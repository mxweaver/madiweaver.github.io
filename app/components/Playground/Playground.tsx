import React, { Component } from 'react'
import animate, { WrappedProps } from '../../hoc/animate'
import c from './Playground.scss'

interface State {
  x: number;
  y: number;
}

class Playground extends Component<WrappedProps, State> {
  public state: State = {
    x: 0,
    y: 0
  }

  public componentDidMount() {
    this.props.onReady()
  }

  public componentDidUpdate(prevProps: WrappedProps) {
    if (this.props.step !== prevProps.step) {
      this.setState({
        x: this.state.x + 1,
        y: this.state.y + 1
      })
    }
  }

  public render() {
    return (
      <svg className={c.display}>
        <rect x={this.state.x} y={this.state.y} width={100} height={100} fill='red' />
      </svg>
    )
  }
}

export default animate(60)(Playground)
