import React from 'react';
import styles from './Card.module.css';

const PADS: Record<string, string> = {
  none: styles.padNone,
  sm: styles.padSm,
  md: styles.padMd,
  lg: styles.padLg,
};

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg' | string;
  hover?: boolean;
  highlighted?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function Card({
  children,
  padding = 'md',
  hover = false,
  highlighted = false,
  className = '',
  style = {},
  ...rest
}: CardProps) {
  const padClass = PADS[padding] || styles.padMd;
  const classes = [
    styles.card,
    padClass,
    highlighted ? styles.highlighted : '',
    hover && !highlighted ? styles.hoverable : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} style={style} {...rest}>
      {children}
    </div>
  );
}
