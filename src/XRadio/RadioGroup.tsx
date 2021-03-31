import React from 'react';
import './style/radioGroup.less'

export interface RadioGroupProps {
  name?: string;
  value?: string;
  onChange?: (value: any) => {};
  className?: string
  prefixCls?: string
  children?: any
}

const RadioGroup = (props: RadioGroupProps = {}) => {
  const {
    prefixCls = 'x-radio-group',
    className,
    name,
    value,
    onChange,
    children,
    ...other
  } = props;
  return (
    <div
      {...other}
      className={[prefixCls, className].filter(Boolean).join(' ').trim()}
    >
      {React.Children.toArray(children).map((child) => {
        if (!child) return null
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          ...(child.props || {}),
          ...{
            checked: child.props.value === value,
            name,
            onChange,
          },
        });
      })}
    </div>
  );
};

export default RadioGroup