import { useState, useEffect } from 'react';

interface Hook {
  supported: boolean;
  current: DeviceOrientationEvent;
}

const useDeviceOrientation = (): Hook => {
  const [supported, setSupported] = useState<boolean>(!!window.DeviceOrientationEvent);
  const [current, setCurrent] = useState<DeviceOrientationEvent | undefined>();

  useEffect(() => {
    window.addEventListener('deviceorientation', setCurrent);
    return () => window.removeEventListener('deviceorientation', setCurrent);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (current === undefined) {
        setSupported(false);
      }
    }, 200);
  }, []);

  return {
    supported,
    current,
  };
};

export default useDeviceOrientation;
