import React, { FC } from 'react';
import { Options } from './Options';
import c from './OptionsPanel.scss';

interface Props {
  options: Options;
  onChange: (options: Options) => void;
}

const OptionsPanel: FC<Props> = (props: Props) => {
  const { options, onChange } = props;

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>): void {
    onChange({
      ...options,
      [event.target.name]: event.target.checked,
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
          onChange={handleCheckboxChange}
        />
      </label>
      <label htmlFor="gravity">
        Parallax
        {' '}
        <input
          type="checkbox"
          name="parallax"
          checked={options.parallax}
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
  );
};

export default OptionsPanel;
