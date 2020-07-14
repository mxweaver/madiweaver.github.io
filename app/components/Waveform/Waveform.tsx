import React, {
  FC, useState, useEffect, ReactNode,
} from 'react';
import useAnimation from '../../hooks/useAnimation';
import c from './Waveform.scss';
import useAudioAnalyser from '../../hooks/useAudioAnalyser';

const Waveform: FC<{}> = () => {
  const analyser = useAudioAnalyser();
  const [data, setData] = useState<Uint8Array | undefined>();

  useEffect(() => {
    if (analyser) {
      setData(new Uint8Array(analyser.frequencyBinCount));
    }
  }, [analyser?.frequencyBinCount]);

  useAnimation(() => {
    if (analyser) {
      analyser.getByteFrequencyData(data);
    }
  });

  const columns: ReactNode[] = [];
  if (data) {
    // eslint-disable-next-line react/no-array-index-key
    data.forEach((x, i) => columns.push(<div key={i} style={{ height: x }} />));
  }

  return (
    <div className={c.waveform}>
      {columns}
    </div>
  );
};

export default Waveform;
