import React, { CSSProperties, FunctionComponent, useEffect, useState } from 'react';
import { Select as SelectAntd } from 'formik-antd';
import { useField, useFormikContext } from 'formik';

import './Select.scss';

export interface SelectOptionProps {
  key: any,
  value: string
}

export interface SelectProps {
  name: string,
  label?: string,
  options: Array<SelectOptionProps>,
  searchable: boolean,
  placeholder?: string,
  value?: string | number,
  disabled?: boolean,
  style?: CSSProperties,
  onChange?(value: string): void,
  onSearch?(value: string): void,
  onFocus?(event: React.FocusEvent<HTMLElement>): void,
  onBlur?(event: React.FocusEvent<HTMLElement>): void
}

export const Select: FunctionComponent<SelectProps> = ({
  name,
  label,
  options,
  searchable,
  placeholder,
  value,
  disabled,
  style,
  onChange,
  onSearch,
  onFocus,
  onBlur
}) => {
  const [selected, setSelected] = useState<string | number | undefined>(value)
  const [field, meta, helpers] = useField(name);
  const { setFieldValue, submitCount } = useFormikContext();

  useEffect(() => {
    setSelected(value);
    setFieldValue(name, value)
  }, [value])

  const triggered = () => meta.error && submitCount > 0;
  const changed = (value: string) => {
    setSelected(value);

    if (onChange) {
      onChange(value);
    }
  }

  return (
    <div className={triggered() ? 'select-wrapper has-error' : 'select-wrapper'}>

      { label && <div className="label-wrapper">{label}</div> }

      <SelectAntd
        showSearch={searchable}
        defaultActiveFirstOption={false}
        name={name}
        defaultValue={selected}
        value={selected}
        disabled={disabled}
        style={style}
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={changed}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input: string, option) => {
          const children = option?.props.children.toString().toLowerCase();
          const value = option?.props.value.toString().toLowerCase();

          return children.indexOf(input.toLowerCase()) >= 0 || value.indexOf(input.toLowerCase()) >= 0
        }}
      >
        <SelectAntd.Option value=""> </SelectAntd.Option>
        {options.map((option: SelectOptionProps) => <SelectAntd.Option key={option.key} value={option.key}>{option.value}</SelectAntd.Option>)}
      </SelectAntd>

      { triggered() && <div className="select-error-wrapper"><span>{meta.error}</span></div> }
    </div>
  );
};