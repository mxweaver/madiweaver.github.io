import React from 'react'
import animate, { WrappedProps } from '../../hoc/animate';

interface Props extends WrappedProps {
  className?: string;
}

class Spectrum extends React.Component<Props> {
  private canvas = React.createRef<HTMLCanvasElement>()
  private ctx: CanvasRenderingContext2D
  private audioContext?: AudioContext
  private source?: MediaStreamAudioSourceNode
  private analyser?: AnalyserNode
  private data?: Uint8Array
  private x = 100

  public componentDidMount() {
    this.ctx = this.canvas.current.getContext('2d')

    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      this.audioContext = new AudioContext()

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
      this.ctx.save();
      this.ctx.translate(1, 0);
      this.ctx.drawImage(this.canvas.current, 0, 0);
      this.ctx.restore();

      this.analyser.getByteFrequencyData(this.data)

      this.x = (this.x + 20) % 256
      for (let i = 0; i < this.data.length; i++) {
        const v = this.data[i]
        this.ctx.fillStyle = `rgb(${v},${v},${v})`
        this.ctx.fillRect(0, i, 1, 1)
      }
    }
  }

  public render() {
    return <canvas ref={this.canvas} className={this.props.className} />
  }
}

export default animate(60)(Spectrum)
