import React, { CSSProperties, FunctionComponent } from 'react';
import { Input as InputAntd } from 'formik-antd';
import { useField } from 'formik';

import './Password.scss';

export interface PasswordProps {
  name: string,
  label: string,
  placeholder?: string,
  focus?: boolean,
  disabled?: boolean,
  autoComplete?: string,
  style?: CSSProperties,
  onChange?(value: string): void
}

export const Password: FunctionComponent<PasswordProps> = ({
  name,
  label,
  placeholder,
  focus,
  disabled,
  autoComplete,
  style,
  onChange
}) => {
  const [field, meta, helpers] = useField(name);

  const triggered = () => meta.error && meta.touched;

  const changed = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.defaultValue);
    }
  }

  return (
    <div className={triggered() ? 'password-wrapper has-error' : 'password-wrapper'}>
      <div className="label-wrapper">{label}</div>

      <InputAntd.Password
        size="large"
        name={name}
        autoFocus={focus ?? false}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        onChange={changed}
        style={style}
      />

      { triggered() && <div className="password-error-wrapper"><span>{meta.error}</span></div>}
    </div>
  );
};