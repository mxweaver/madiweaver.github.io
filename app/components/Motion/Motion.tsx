import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import c from './Motion.scss';
import withDeviceOrientation, { WrappedProps } from '../../hoc/withDeviceOrientation';

interface Props extends WrappedProps {
  className?: string;
}

const Motion: FunctionComponent<Props> = (props: Props) => {
  const { deviceOrientation, className } = props;

  if (!deviceOrientation) {
    return <></>;
  }

  return (
    <svg className={classnames(className, c.motion)}>
      <circle
        cx={150 + deviceOrientation.gamma}
        cy={150 + deviceOrientation.beta}
        r={20}
      />
    </svg>
  );
}

Motion.defaultProps = {
  className: undefined,
}

export default withDeviceOrientation(Motion);
