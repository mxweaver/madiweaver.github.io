import React, { Component } from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import getDisplayName from 'react-display-name'

export interface WrappedProps extends React.Props<any> {
  step: number;
  onReady: () => void;
}

interface State {
  step: number;
}

export default function animate(WrappedComponent: React.ComponentType<WrappedProps>) {
  class AnimatedComponent extends Component<{}, State> {
    public static displayName = `Animated(${getDisplayName(WrappedComponent)})`

    public state = {
      step: 0
    }

    private tick = () => {
      this.setState({ step: this.state.step + 1 })
      window.requestAnimationFrame(this.tick)
    }

    public render() {
      return <WrappedComponent
        step={this.state.step}
        onReady={this.tick}
        {...this.props}
      />
    }
  }

  hoistNonReactStatic(AnimatedComponent, WrappedComponent)

  return AnimatedComponent
}
