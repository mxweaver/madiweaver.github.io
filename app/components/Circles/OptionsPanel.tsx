import React, { FC, useState } from 'react';
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

  const [expanded, setExpanded] = useState<boolean>(false);

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>): void {
    onChange({
      ...options,
      [event.target.name]: event.target.checked,
    });
  }

  const toggleExpanded = () => setExpanded((oldExpanded) => !oldExpanded);

  return (
    <div className={c.container}>
      <div
        className={c.title}
        onClick={toggleExpanded}
        onKeyPress={toggleExpanded}
        role="button"
        tabIndex={0}
      >
        <h2>
          Options
          {' '}
          {expanded ? '-' : '+'}
        </h2>
      </div>
      {expanded && (
        <>
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
        </>
      )}
    </div>
  );
};

export default OptionsPanel;
