import React, { FC, useRef, useState } from 'react';
import useAnimation from '../../hooks/useAnimation';
import c from './Circles.scss';

let lastCircleId = 0;
function getCircleId(): number {
  lastCircleId += 1;
  return lastCircleId;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

interface Point {
  x: number;
  y: number;
}

interface Circle extends Point {
  id: number;
  radius: number;
  color: string;
}

interface CircleSet {
  [key: number]: Circle;
}

const Circles: FC<{}> = () => {
  const container = useRef<SVGSVGElement>();

  const [circles, setCircles] = useState<CircleSet>({});
  const [isNewShape, setIsNewShape] = useState<boolean>(false);
  const [selectedCircleId, setSelectedCircleId] = useState<number | undefined>();
  const [dragOffset, setDragOffset] = useState<Point | undefined>();

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
  });

  const handleMouseDown = (event: React.MouseEvent<SVGSVGElement>) => {
    const bounds = container.current.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const target = event.target as SVGCircleElement;

    if (event.target === event.currentTarget) {
      const circle = {
        id: getCircleId(),
        x,
        y,
        radius: 10,
        color: getRandomColor(),
      };
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

  return (
    <svg
      ref={container}
      className={c.display}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {Object.values(circles).map(({
        id, radius, x, y, color,
      }) => (
        <circle
          key={id}
          data-circle-id={id}
          r={radius}
          cx={x}
          cy={y}
          style={{
            cursor: selectedCircleId ? 'grabbing' : undefined,
            fill: color,
          }}
          opacity={0.5}
        />
      ))}
    </svg>
  );
};

export default Circles;
