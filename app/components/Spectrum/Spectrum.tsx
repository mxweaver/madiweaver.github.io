import React from 'react'
import { compose } from 'redux'
import animate, { WrappedProps as AnimateProps } from '../../hoc/animate';
import withAudioAnalyser, { WrappedProps as AudioProps } from '../../hoc/withAudioAnalyser';

interface Props extends AnimateProps, AudioProps {
  className?: string;
}

class Spectrum extends React.Component<Props> {
  private canvas = React.createRef<HTMLCanvasElement>()
  private ctx: CanvasRenderingContext2D
  private data?: Uint8Array

  public componentDidMount() {
    this.ctx = this.canvas.current.getContext('2d')
  }

  public componentDidUpdate(prevProps: Props) {
    const { analyser, onReady } = this.props

    if (analyser && !prevProps.analyser) {
      this.data = new Uint8Array(analyser.frequencyBinCount)
      onReady()
    }

    if (this.props.step !== prevProps.step) {
      this.ctx.save();
      this.ctx.translate(1, 0);
      this.ctx.drawImage(this.canvas.current, 0, 0);
      this.ctx.restore();
      analyser.getByteFrequencyData(this.data)

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

export default compose(
  animate(60),
  withAudioAnalyser(1024)
)(Spectrum)
