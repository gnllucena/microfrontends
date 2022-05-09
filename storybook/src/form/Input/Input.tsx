import React, { CSSProperties, FunctionComponent, useEffect, useState } from 'react';
import { Input as InputAntd } from 'formik-antd';
import { useField, useFormikContext } from 'formik';

import './Input.scss';

export interface InputProps {
  name: string,
  label?: string,
  placeholder?: string,
  value?: string | number,
  disabled?: boolean,
  autoComplete?: string,
  style?: CSSProperties,
  onChange?(value: string): void,
  onBlur?(value: string): void,
  onPaste?(value: string): void
}

export const Input: FunctionComponent<InputProps> = ({
  name,
  label,
  placeholder,
  value,
  disabled,
  autoComplete,
  style,
  onChange,
  onBlur,
  onPaste
}) => {
  const [inputed, setInputed] = useState<string | number | undefined>(value)
  const [field, meta, helpers] = useField(name);
  const { setFieldValue, submitCount } = useFormikContext();

  useEffect(() => {
    setInputed(value);
    setFieldValue(name, value)
  }, [value]);

  const triggered = () => meta.error && submitCount > 0;

  const changed = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputed(event.target.value);

    if (onChange) {
      onChange(event.target.value);
    }
  }

  const blurred = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event.target.value);
    }
  }

  const pasted = (event: React.ClipboardEvent<HTMLInputElement>) => {
    if (onPaste) {
      const paste = event.clipboardData.getData('Text')
      onPaste(paste);
    }
  }

  return (
    <div className={triggered() ? 'input-wrapper has-error' : 'input-wrapper'}>
      { label && <div className="label-wrapper">{label}</div> }

      <InputAntd
        size="large"
        name={name}
        placeholder={placeholder}
        defaultValue={inputed}
        value={inputed}
        autoComplete={autoComplete}
        disabled={disabled}
        onChange={changed}
        onBlur={blurred}
        style={style}
        onPaste={pasted}
      />
      
      { triggered() && <div className="input-error-wrapper"><span>{meta.error}</span></div>}
    </div>
  );
};