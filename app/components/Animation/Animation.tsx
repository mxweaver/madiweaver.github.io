import React, { FC, useState } from 'react';
import useAnimation from '../../hooks/useAnimation';

const Animation: FC = () => {
  const [counter, setCounter] = useState<number>(0);

  useAnimation(() => setCounter((c) => c + 1));

  return (
    <div>
      step
      {' '}
      {counter}
    </div>
  );
};

export default Animation;
