import React, { CSSProperties, FunctionComponent, useEffect, useState } from 'react';
import { Select as SelectAntd } from 'formik-antd';
import { useField, useFormikContext } from 'formik';

import './Tags.scss';

export interface TagsProps {
  name: string,
  label?: string,
  mode: 'tags' | 'multiple'
  options: Array<string>,
  maxTagCount?: number,
  maxTagLength?: number,
  placeholder?: string,
  value?: Array<string>,
  disabled?: boolean,
  style?: CSSProperties,
  onChange?(values: Array<string>): void,
  onSelect?(value: string): void
  onSearch?(value: string): void,
  onFocus?(event: React.FocusEvent<HTMLElement>): void,
  onBlur?(event: React.FocusEvent<HTMLElement>): void
}

export const Tags: FunctionComponent<TagsProps> = ({
  name,
  label,
  mode,
  options,
  maxTagCount,
  maxTagLength,
  placeholder,
  value,
  disabled,
  style,
  onChange,
  onSelect,
  onSearch,
  onFocus,
  onBlur
}) => {
  const [selected, setSelected] = useState<Array<string>>(value ?? [])
  const [field, meta, helpers] = useField(name);
  const { setFieldValue, submitCount } = useFormikContext();

  useEffect(() => {
    setSelected(value ?? []);
    setFieldValue(name, value)
  }, [value])

  const triggered = () => meta.error && submitCount > 0;

  const changed = (value: Array<string>) => {
    setSelected(value ?? []);

    if (onChange) {
      onChange(value);
    }
  }

  return (
    <div className={triggered() ? 'tags-wrapper has-error' : 'tags-wrapper'}>

      { label && <div className="label-wrapper">{label}</div> }

      <SelectAntd
        name={name}
        defaultActiveFirstOption={false}
        defaultValue={selected}
        value={selected}
        disabled={disabled}
        style={style}
        placeholder={placeholder}
        mode={mode}
        optionFilterProp="children"
        maxTagCount={maxTagCount ?? 6}
        maxTagTextLength={maxTagLength ?? 20}
        onSelect={onSelect}
        onChange={changed}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
      >
        {options.map((option: string) => <SelectAntd.Option key={option} value={option}>{option}</SelectAntd.Option>)}
      </SelectAntd>

      { triggered() && <div className="tags-error-wrapper"><span>{meta.error}</span></div> }
    </div>
  );
};