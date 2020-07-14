import React, { FC } from 'react';
import c from './Motion.scss';
import useDeviceOrientation from '../../hooks/withDeviceOrientation';

const Motion: FC<{}> = () => {
  const orientation = useDeviceOrientation();

  if (!orientation) {
    return <></>;
  }

  if (!orientation.supported) {
    return <>Not Supported!</>;
  }

  return (
    <svg className={c.motion}>
      {orientation.current && (
        <circle
          cx={150 + orientation.current.gamma}
          cy={150 + orientation.current.beta}
          r={20}
        />
      )}
    </svg>
  );
};

export default Motion;
