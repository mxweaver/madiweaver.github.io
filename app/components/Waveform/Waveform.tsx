import React from 'react'
import classnames from 'classnames'
import animate, { WrappedProps } from '../../hoc/animate'
import c from './Waveform.scss'

interface Props extends WrappedProps {
  className?: string;
}

class Waveform extends React.Component<Props> {
  private audioContext?: AudioContext
  private source?: MediaStreamAudioSourceNode
  private analyser?: AnalyserNode
  private data?: Uint8Array

  public componentDidMount() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)()

      this.source = this.audioContext.createMediaStreamSource(stream)

      this.analyser = this.audioContext.createAnalyser()
      this.analyser.fftSize = 1024

      this.data = new Uint8Array(this.analyser.frequencyBinCount)
      this.analyser.getByteFrequencyData(this.data)
      this.source.connect(this.analyser)

      this.props.onReady()
    })
  }

  public componentDidUpdate(prevProps: Props) {
    if (this.props.step !== prevProps.step) {
      this.analyser.getByteFrequencyData(this.data)
    }
  }

  public render() {
    return (
      <div className={classnames(this.props.className, c.waveform)}>
        {this.data && Array.from(this.data).map((x, i) => <div key={i} style={{ height: x }} />)}
      </div>
    )
  }
}

export default animate(60)(Waveform)
