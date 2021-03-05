import React from 'react';
import styles from './style/index.module.less';
import './style/index.less';

export interface ButtonProps {
  defaultCss?: string;
  type?: string;
  size?: 'large' | 'default' | 'small';
  active?: boolean;
  disabled?: boolean;
  block?: boolean;
  basic?: boolean;
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}
export default function Button(props: ButtonProps = {}) {
  const {
    defaultCss='x-btn',
    type='light',
    size='default',
    active=false,
    disabled=false,
    block=false,
    basic=false,
    className,
    loading=false,
    children,
    htmlType="button",
    ...others
  } = props;

  const btnName = [
    className,
    defaultCss,
    styles.test,
    size ? `${defaultCss}-${size}` : false,
    type ? `${defaultCss}-${type}` : false,
    basic ? `${defaultCss}-basic` : false,
    loading ? `${defaultCss}-loading` : false,
    disabled || loading ? 'disabled' : false,
    active ? 'active' : false,
    block ? 'block' : false,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <button {...others} disabled={disabled || loading} type={htmlType} className={btnName}>
      {children &&
        React.Children.map(children, (child) => {
          if (React.isValidElement(child)) return child;
          return <span> {child} </span>;
        })}
    </button>
  );
}

