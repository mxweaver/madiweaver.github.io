import React from 'react'
import classnames from 'classnames'
import c from './Motion.scss'

interface Props {
  className?: string;
}

interface State {
  alpha: number;
  beta: number;
  gamma: number;
}

export default class Motion extends React.Component<Props, State> {
  public readonly state: State = {
    alpha: 0,
    beta: 0,
    gamma: 0
  }

  public componentDidMount() {
    if ((window as any).DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", this.handleOrientationChange);
    }
  }

  public componentWillUnmount() {
    if ((window as any).DeviceOrientationEvent) {
      window.removeEventListener("deviceorientation", this.handleOrientationChange);
    }
  }

  private handleOrientationChange = (event: DeviceOrientationEvent) => {
    this.setState({
      alpha: event.alpha,
      gamma: event.gamma, 
      beta: event.beta
    })
  }

  public render() {
    const { alpha, beta, gamma } = this.state

    return (
      <svg className={classnames(this.props.className, c.motion)}>
        <circle
          cx={150 + gamma}
          cy={150 + beta}
          r={20}
        />
      </svg>
    )
  }
}
