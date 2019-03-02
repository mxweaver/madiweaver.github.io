import React, { Component } from 'react'
import produce from 'immer'
import classnames from 'classnames'
import animate, { WrappedProps } from '../../hoc/animate'
import c from './Playground.scss'

interface Circle {
  radius: number;
  x: number;
  y: number;
}

interface Props extends WrappedProps {
  className?: string;
}

interface State {
  newCircle?: Circle;
  circles: Circle[];
}

class Playground extends Component<Props, State> {
  public state: State = {
    circles: []
  }

  public componentDidMount() {
    this.props.onReady()
  }

  public componentDidUpdate(prevProps: WrappedProps) {
    if (this.props.step !== prevProps.step) {
      if (this.state.newCircle)
        this.setState(produce((draft: State) => {
          draft.newCircle.radius++
        }))
    }
  }

  public handleMouseDown = (event: React.MouseEvent<SVGSVGElement>) => {
    this.setState({
      newCircle: {
        x: event.clientX,
        y: event.clientY,
        radius: 10
      }
    })
  }

  public handleMouseUp = () => {
    if (this.state.newCircle) {
      this.setState(produce((draft: State) => {
        draft.circles.push(draft.newCircle)
        draft.newCircle = undefined
      }))
    }
  }

  public handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    const { clientX, clientY } = event

    if (this.state.newCircle) {
      this.setState(produce((draft: State) => {
        draft.newCircle.x = clientX
        draft.newCircle.y = clientY
      }))
    }
  }

  public render() {
    const { newCircle, circles } = this.state

    return (
      <svg
        className={classnames(this.props.className, c.display)}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}
      >
        {circles.map((c, i) => <circle key={i} r={c.radius} cx={c.x} cy={c.y} />)}
        {newCircle && <circle
          r={newCircle.radius}
          cx={newCircle.x}
          cy={newCircle.y}
        />}
      </svg>
    )
  }
}

export default animate(60)(Playground)
