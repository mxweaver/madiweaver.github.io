import React, {
  FC, useEffect, useState, useRef,
} from 'react';
import useAnimation from '../../hooks/useAnimation';
import useAudioAnalyser from '../../hooks/useAudioAnalyser';
import c from './Spectrum.scss';

const Spectrum: FC<{}> = () => {
  const analyser = useAudioAnalyser();

  const canvas = useRef<HTMLCanvasElement>();

  const [data, setData] = useState<Uint8Array | undefined>();

  useEffect(() => {
    if (analyser) {
      setData(new Uint8Array(analyser.frequencyBinCount));
    }
  }, [analyser]);

  useAnimation(() => {
    if (!analyser) {
      return;
    }

    const ctx = canvas.current.getContext('2d');
    ctx.save();
    ctx.translate(1, 0);
    ctx.drawImage(canvas.current, 0, 0);
    ctx.restore();
    analyser.getByteFrequencyData(data);

    data.forEach((value, i) => {
      ctx.fillStyle = `rgb(${value},${value},${value})`;
      ctx.fillRect(0, i, 1, 1);
    });
  });

  return <canvas ref={canvas} className={c.canvas} />;
};

export default Spectrum;
