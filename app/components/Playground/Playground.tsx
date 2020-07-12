import React, {
  FunctionComponent,
  useRef,
  useState,
  useEffect,
} from 'react';
import classnames from 'classnames';
import animate, { WrappedProps } from '../../hoc/animate';
import c from './Playground.scss';

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
}

interface CircleSet {
  [key: number]: Circle;
}

interface Props extends WrappedProps {
  className?: string;
}

const Playground: FunctionComponent = (props: Props) => {
  const { onReady, className, step } = props;
  const container = useRef<SVGSVGElement>();

  const [circles, setCircles] = useState<CircleSet>({});
  const [isNewShape, setIsNewShape] = useState<boolean>(false);
  const [selectedCircleId, setSelectedCircleId] = useState<number | undefined>();
  const [dragOffset, setDragOffset] = useState<Point | undefined>();

  useEffect(onReady, []);

  useEffect(() => {
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
  }, [step]);

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
      className={classnames(className, c.display)}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {Object.values(circles).map(({
        id, radius, x, y,
      }) => (
        <circle
          key={id}
          data-circle-id={id}
          r={radius}
          cx={x}
          cy={y}
        />
      ))}
    </svg>
  );
};

Playground.defaultProps = {
  className: undefined,
};

export default animate(60)(Playground);
