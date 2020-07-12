import React, { Component } from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import getDisplayName from 'react-display-name';

export interface WrappedProps extends React.Props<any> {
  step: number;
  onReady: () => void;
}

interface State {
  step: number;
  previousAnimationTimestamp: number;
}

const animate = (frequency: number) => (WrappedComponent: React.ComponentType<WrappedProps>) => {
  const interval = 1000 / frequency;

  class AnimatedComponent extends Component<{}, State> {
    public static displayName = `Animated(${getDisplayName(WrappedComponent)})`;

    public state = {
      step: 0,
      previousAnimationTimestamp: 0,
    };

    private tick = (timestamp: number) => {
      if (timestamp - this.state.previousAnimationTimestamp >= interval) {
        this.setState({
          step: this.state.step + 1,
          previousAnimationTimestamp: timestamp,
        });
      }

      window.requestAnimationFrame(this.tick);
    };

    public render() {
      return (
        <WrappedComponent
          step={this.state.step}
          onReady={() => this.tick(0)}
          {...this.props}
        />
      );
    }
  }

  hoistNonReactStatic(AnimatedComponent, WrappedComponent);

  return AnimatedComponent;
};

export default animate;
