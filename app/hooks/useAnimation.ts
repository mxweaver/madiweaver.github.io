import {
  useState, useEffect, useRef,
} from 'react';

const useAnimation = (step: () => void, interval = 60): void => {
  const ref = useRef<Function>();
  ref.current = step;

  const [running, setRunning] = useState<boolean>(true);
  const [prevTimestamp, setPrevTimestamp] = useState<number>(0);

  const tick = (timestamp: number): void => {
    if (timestamp - prevTimestamp >= interval) {
      ref.current();
      setPrevTimestamp(timestamp);
    }

    if (running) {
      window.requestAnimationFrame(tick);
    }
  };

  useEffect(() => {
    tick(prevTimestamp);
    return () => setRunning(false);
  }, []);
};

export default useAnimation;
