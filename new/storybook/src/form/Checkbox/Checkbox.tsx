import React, { CSSProperties, FunctionComponent, useEffect, useState } from 'react';
import { Checkbox as CheckboxAntd } from 'formik-antd';
import { useField, useFormikContext } from 'formik';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

import './Checkbox.scss';

export interface CheckboxProps {
  name: string,
  label: string,
  value: boolean
  disabled?: boolean,
  style?: CSSProperties,
  onChange?(value: boolean): void
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  name,
  label,
  value,
  disabled,
  style,
  onChange
}) => {
  const [inputed, setInputed] = useState<boolean | undefined>(value)
  const [field, meta, helpers] = useField(name);
  const { setFieldValue, submitCount } = useFormikContext();

  useEffect(() => {
    setInputed(value);
    setFieldValue(name, value);
  }, [value]);

  const triggered = () => meta.error && submitCount > 0;

  const changed = (event: CheckboxChangeEvent) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  }

  return (
    <div className={triggered() ? 'checkbox-wrapper has-error' : 'checkbox-wrapper'}>
      <CheckboxAntd
        name={field.name}
        onChange={changed}
        defaultChecked={value}
        value={value}
        disabled={disabled}
        style={style}
      >
        {label}
      </CheckboxAntd>

      { triggered() && <div className="checkbox-error-wrapper"><span>{meta.error}</span></div>}
    </div>
  );
};