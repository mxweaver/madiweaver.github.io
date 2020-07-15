import React, { FC } from 'react';
import { Options } from './Options';
import c from './OptionsPanel.scss';

interface Props {
  options: Options;
  onChange: (options: Options) => void;
}

const OptionsPanel: FC<Props> = (props: Props) => {
  const { options, onChange } = props;

  function handleGravityChange(event: React.ChangeEvent<HTMLInputElement>): void {
    onChange({
      ...options,
      gravity: event.target.checked,
    });
  }

  return (
    <div className={c.container}>
      <h2>Options</h2>
      <label htmlFor="gravity">
        Gravity
        {' '}
        <input
          type="checkbox"
          name="gravity"
          checked={options.gravity}
          onChange={handleGravityChange}
        />
      </label>
    </div>
  );
};

export default OptionsPanel;
