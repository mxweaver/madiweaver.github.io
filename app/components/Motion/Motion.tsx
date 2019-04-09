import React from 'react'
import classnames from 'classnames'
import c from './Motion.scss'
import withDeviceOrientation, { WrappedProps } from '../../hoc/withDeviceOrientation'

interface Props extends WrappedProps {
  className?: string;
}

class Motion extends React.Component<Props, {}> {
  public render() {
    const { deviceOrientation } = this.props

    if (!deviceOrientation) {
      return <></>
    }

    return (
      <svg className={classnames(this.props.className, c.motion)}>
        <circle
          cx={150 + deviceOrientation.gamma}
          cy={150 + deviceOrientation.beta}
          r={20}
        />
      </svg>
    )
  }
}

export default withDeviceOrientation(Motion)
