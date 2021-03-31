import React, { useState } from 'react';
import './style/index.less'
export interface XRadioProp {
  checked?: boolean;
  prefixCls: string;
  className?: string;
  disabled?: boolean;
  type: string;
  value?: any;
  children?: any;
  size?: 'large' | 'default' | 'small';
  onChange?: (value: React.ChangeEvent<HTMLInputElement> | Boolean) => {}
}

const XRadio: React.FC<XRadioProp> = props => {
  const {
    checked: prChecked = false,
    prefixCls = 'x-radio',
    type = 'radio',
    disabled = false,
    size = 'default',
    value = '',
    children,
    className,
    onChange,
    ...other
  } = props
  const [checked, setChecked] = useState(prChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    if (e.target.checked && checked) {
      setChecked(false);
      onChange && onChange(false);
    }
    setChecked(e.target.checked);
    onChange && onChange(e);
  }

  const cls = [
    prefixCls,
    className,
    disabled ? 'disabled' : null,
    size ? `${prefixCls}-${size}` : null,
  ].filter(Boolean).join(' ').trim();

  return (
    <div>
        <input checked={checked} onChange={handleChange}  {...{ ...other, value, type, disabled }} className={cls} />
        {value && <div className={`${prefixCls}-text`}>{value}</div>}
    </div>

  );
}

export default XRadio;