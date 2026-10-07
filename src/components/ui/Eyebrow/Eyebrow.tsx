import React from 'react';
import styles from './Eyebrow.module.css';

export interface EyebrowProps {
  children?: React.ReactNode;
  tone?: 'brand' | 'inverse' | string;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

export default function Eyebrow({
  children,
  tone = 'brand',
  as: Component = 'p',
  className = '',
  style = {},
  ...rest
}: EyebrowProps) {
  const toneClass = (styles as Record<string, string>)[tone] || styles.brand;

  return (
    <Component
      className={`${styles.eyebrow} ${toneClass} ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  );
}
