import React, { FC } from 'react';
import { Options } from './Options';
import c from './OptionsPanel.scss';

interface Props {
  options: Options;
  running: boolean;
  onChange: (options: Options) => void;
  onClear: () => void;
  onStart: () => void;
  onStop: () => void;
}

const OptionsPanel: FC<Props> = (props: Props) => {
  const {
    options,
    running,
    onChange,
    onClear,
    onStart,
    onStop,
  } = props;

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>): void {
    onChange({
      ...options,
      [event.target.name]: event.target.checked,
    });
  }

  return (
    <div className={c.container}>
      <h2>Options</h2>
      {[
        ['gravity', 'Gravity'],
        ['parallax', 'Parallax'],
        ['accelerationLines', 'Show Acceleration Lines'],
      ].map(([name, label]) => (
        <p key={name}>
          <label htmlFor={name}>
            <input
              type="checkbox"
              name={name}
              checked={(options as any)[name]}
              onChange={handleCheckboxChange}
            />
            &nbsp;
            {label}
          </label>
        </p>
      ))}
      <p><button onClick={onClear} type="button">Clear</button></p>
      <p><button onClick={running ? onStop : onStart} type="button">{running ? 'Stop' : 'Start'}</button></p>
    </div>
  );
};

export default OptionsPanel;
