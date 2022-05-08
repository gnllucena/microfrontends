import React, { useState, FunctionComponent, CSSProperties } from 'react';
import { Switch as SwitchAntd } from 'formik-antd';
import { useField } from 'formik';

import './Switch.scss';

export interface SwitchProps {
  name: string,
  label: string,
  value: boolean,
  focus?: boolean,
  disabled?: boolean,
  style?: CSSProperties,
  onChange?(checked: boolean): void
}

export const Switch: FunctionComponent<SwitchProps> = ({
  name,
  label,
  value,
  focus,
  disabled,
  style,
  onChange
}) => {
  const [field, meta] = useField(name);
  const [checked, setChecked] = useState(value);

  const triggered = () => meta.error && meta.touched;

  const changed = (check: boolean): void => {
    value = check;

    setChecked(check);

    if (onChange) {
      onChange(check);
    }
  };

  return (
    <div className="switch-wrapper">
      <div className={triggered() ? 'switch-input-wrapper has-error' : 'switch-input-wrapper'}>
        <SwitchAntd
          name={field.name}
          defaultChecked={checked}
          checked={checked}
          autoFocus={focus ?? false}
          disabled={disabled}
          onChange={changed}
          style={style}
        />

        <span className="label-wrapper">{label}</span>
      </div>

      { triggered() && <div className="input-error-wrapper"><span>{meta.error}</span></div>}
    </div>
  );
};
