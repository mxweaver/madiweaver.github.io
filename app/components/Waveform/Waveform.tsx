import React from 'react'
import { compose } from 'redux'
import classnames from 'classnames'
import animate, { WrappedProps as AnimateProps } from '../../hoc/animate';
import withAudioAnalyser, { WrappedProps as AudioProps } from '../../hoc/withAudioAnalyser';
import c from './Waveform.scss'

interface Props extends AnimateProps, AudioProps {
  className?: string;
}

interface State {
  data?: Uint8Array;
}

class Waveform extends React.Component<Props, State> {
  public readonly state: State = {}

  public componentDidUpdate(prevProps: Props) {
    const { analyser, onReady } = this.props

    if (analyser && !prevProps.analyser) {
      onReady()
    }

    if (this.props.step !== prevProps.step) {
      const data = new Uint8Array(analyser.frequencyBinCount)
      analyser.getByteFrequencyData(data)
      this.setState({ data })
    }
  }

  public render() {
    const { data } = this.state

    return (
      <div className={classnames(this.props.className, c.waveform)}>
        {data && Array.from(data).map((x, i) => <div key={i} style={{ height: x }} />)}
      </div>
    )
  }
}

export default compose(
  animate(60),
  withAudioAnalyser(1024)
)(Waveform)
