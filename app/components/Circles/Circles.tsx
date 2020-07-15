import React, { FC, useRef, useState } from 'react';
import _ from 'lodash';
import chroma from 'chroma-js';
import useAnimation from '../../hooks/useAnimation';
import c from './Circles.scss';
import { Options, defaultOptions } from './Options';
import OptionsPanel from './OptionsPanel';

let lastCircleId = 0;
function getCircleId(): number {
  lastCircleId += 1;
  return lastCircleId;
}

interface Point {
  x: number;
  y: number;
}

interface Circle extends Point {
  id: number;
  radius: number;
  color: string;
  velocity: Point
}

interface CircleSet {
  [key: number]: Circle;
}

function createCircle(properties: Partial<Circle>): Circle {
  return {
    x: 0,
    y: 0,
    radius: 10,
    id: getCircleId(),
    color: chroma.random().brighten(2).css(),
    velocity: {
      x: 0,
      y: 0,
    },
    ...properties,
  };
}

function getDistance(a: Point, b: Point): number {
  return Math.sqrt(((a.x - b.x) ** 2) + ((a.y - b.y) ** 2));
}

const G = 1;

function getAttractiveForce(a: Circle, b: Circle): Point {
  const force = (G * a.radius * b.radius) / (getDistance(a, b) ** 2);

  return {
    x: force * (b.x - a.x),
    y: force * (b.y - a.y),
  };
}

const PARALLAX_FACTOR = 0.1;

const Circles: FC<{}> = () => {
  const container = useRef<SVGSVGElement>();

  const [circles, setCircles] = useState<CircleSet>({});
  const [isNewShape, setIsNewShape] = useState<boolean>(false);
  const [selectedCircleId, setSelectedCircleId] = useState<number | undefined>();
  const [dragOffset, setDragOffset] = useState<Point | undefined>();
  const [options, setOptions] = useState<Options>(defaultOptions);
  const [mouse, setMouse] = useState<Point | undefined>(undefined);

  const parallaxOffsetX = options.parallax && mouse
    ? ((container.current.getBoundingClientRect().width) / 2 - mouse.x) * PARALLAX_FACTOR
    : 0;

  const parallaxOffsetY = options.parallax && mouse
    ? ((container.current.getBoundingClientRect().height) / 2 - mouse.y) * PARALLAX_FACTOR
    : 0;

  useAnimation(() => {
    if (selectedCircleId !== undefined && isNewShape) {
      const selectedCircle = circles[selectedCircleId];

      setCircles({
        ...circles,
        [selectedCircleId]: {
          ...selectedCircle,
          radius: selectedCircle.radius + 1,
        },
      });
    }

    if (options.gravity) {
      setCircles((oldCircles) => _.mapValues(oldCircles, (newCircle, id) => {
        if (selectedCircleId === Number(id)) {
          return newCircle;
        }

        let forceX = 0;
        let forceY = 0;

        _.forOwn(oldCircles, (otherCircle, otherCircleId) => {
          if (otherCircleId === id) {
            return;
          }

          const attractiveForce = getAttractiveForce(newCircle, otherCircle);

          forceX += attractiveForce.x;
          forceY += attractiveForce.y;
        });

        const accelerationX = forceX / newCircle.radius;
        const accelerationY = forceY / newCircle.radius;

        const velocity = {
          x: newCircle.velocity.x + accelerationX,
          y: newCircle.velocity.y + accelerationY,
        };

        return {
          ...newCircle,
          x: newCircle.x + velocity.x,
          y: newCircle.y + velocity.y,
          velocity,
        };
      }));
    }
  });

  const handleMouseDown = (event: React.MouseEvent<SVGSVGElement>) => {
    const bounds = container.current.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const target = event.target as SVGCircleElement;

    if (event.target === event.currentTarget) {
      const circle = createCircle({ x, y });
      setCircles({ ...circles, [circle.id]: circle });
      setSelectedCircleId(circle.id);
      setDragOffset({ x: 0, y: 0 });
      setIsNewShape(true);
    } else {
      const circleId = Number(target.getAttribute('data-circle-id'));
      setIsNewShape(false);
      setSelectedCircleId(circleId);
      setDragOffset({
        x: x - circles[circleId].x,
        y: y - circles[circleId].y,
      });
    }
  };

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    const bounds = container.current.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    setMouse({ x, y });

    if (selectedCircleId !== undefined) {
      const selectedCircle = circles[selectedCircleId];
      setCircles({
        ...circles,
        [selectedCircleId]: {
          ...selectedCircle,
          x: x - dragOffset.x,
          y: y - dragOffset.y,
        },
      });
    }
  };

  const handleMouseUp = () => {
    setSelectedCircleId(undefined);
  };

  const handleMouseLeave = () => {
    setMouse(undefined);
  };

  return (
    <div className={c.container}>
      <svg
        ref={container}
        className={c.display}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {Object.values(circles).map(({
          id, radius, x, y, color,
        }) => (
          <circle
            key={id}
            data-circle-id={id}
            r={radius}
            cx={x + parallaxOffsetX}
            cy={y + parallaxOffsetY}
            style={{
              cursor: selectedCircleId ? 'grabbing' : undefined,
              fill: color,
            }}
          />
        ))}
      </svg>
      <OptionsPanel options={options} onChange={setOptions} />
    </div>
  );
};

export default Circles;
