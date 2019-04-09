import React, { Component } from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import getDisplayName from 'react-display-name'

export interface WrappedProps {
  deviceOrientation: DeviceOrientationEvent;
}

interface State {
  deviceOrientation?: DeviceOrientationEvent;
}

export default function withDeviceOrientation (WrappedComponent: React.ComponentType<WrappedProps & React.Props<any>>) {
  class ComponentWithDeviceOrientation extends Component<{}, State> {
    public static displayName = `WithDeviceOrientation(${getDisplayName(WrappedComponent)})`

    public state: State = {}

    private handleOrientationChange = (deviceOrientation: DeviceOrientationEvent) => {
      this.setState({ deviceOrientation })
    }

    public componentDidMount() {
      if ((window as any).DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", this.handleOrientationChange);
      } else {
        console.error('failed to subscribe to device orientation events')
      }
    }
  
    public componentWillUnmount() {
      if ((window as any).DeviceOrientationEvent) {
        window.removeEventListener("deviceorientation", this.handleOrientationChange);
      }
    }

    public render() {
      return <WrappedComponent
        deviceOrientation={this.state.deviceOrientation}
        {...this.props}
      />
    }
  }

  hoistNonReactStatic(ComponentWithDeviceOrientation, WrappedComponent)

  return ComponentWithDeviceOrientation
}
