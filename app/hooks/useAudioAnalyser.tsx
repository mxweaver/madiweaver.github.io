import { useState, useEffect } from 'react';

const AudioContext = window.AudioContext || (window as any).webkitAudioContext;

const useAudioAnalyser = (fftSize = 1024): AnalyserNode | undefined => {
  const [analyser, setAnalyser] = useState<AnalyserNode | undefined>();

  const init = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const context: AudioContext = new AudioContext({
      latencyHint: 'interactive',
    });

    const newAnalyser = context.createAnalyser();
    newAnalyser.fftSize = fftSize;

    context
      .createMediaStreamSource(stream)
      .connect(newAnalyser);

    setAnalyser(newAnalyser);
  };

  useEffect(() => { init(); }, []);

  return analyser;
};

export default useAudioAnalyser;
