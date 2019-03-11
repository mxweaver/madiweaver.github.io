import React, { Component } from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import getDisplayName from 'react-display-name'
import produce from 'immer'

const AudioContext = window.AudioContext || window.webkitAudioContext

export interface WrappedProps extends React.Props<any> {
  analyser: AnalyserNode;
}

interface State {
  context?: AudioContext;
  source?: MediaStreamAudioSourceNode;
  analyser?: AnalyserNode;
}

const withAudioAnalyser = (fftSize: number) => (WrappedComponent: React.ComponentType<WrappedProps>) => {
  class ComponentWithAudioAnalyser extends Component<{}, State> {
    public static displayName = `WithAudioAnalyser(${getDisplayName(WrappedComponent)})`

    public state: State = {}

    public componentDidMount() {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(this.updateAnalyser)
    }

    private updateAnalyser = (stream: MediaStream) => {
      this.setState(produce((draft: State) => {
        draft.context = new AudioContext({
          latencyHint: 'interactive'
        })

        draft.analyser = draft.context.createAnalyser()
        draft.analyser.fftSize = fftSize

        draft.source = draft.context.createMediaStreamSource(stream)
        draft.source.connect(draft.analyser)
      }))
    }

    public render() {
      return <WrappedComponent
        analyser={this.state.analyser}
        {...this.props}
      />
    }
  }

  hoistNonReactStatic(ComponentWithAudioAnalyser, WrappedComponent)

  return ComponentWithAudioAnalyser
}

export default withAudioAnalyser
