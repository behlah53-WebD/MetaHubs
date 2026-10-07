'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'dark' | string;
  size?: 'sm' | 'md' | 'lg' | string;
  href?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement> | ((e: any) => void);
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
  style = {},
  ...rest
}: ButtonProps) {
  const classNames = [
    styles.button,
    styles[size] || styles.md,
    styles[variant] || styles.primary,
    fullWidth ? styles.fullWidth : '',
    disabled ? styles.disabled : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if (href && !disabled) {
    const isInternal = href.startsWith('/') || href.startsWith('#');
    if (isInternal) {
      return (
        <Link href={href} className={classNames} style={style} onClick={onClick as any} {...rest}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} className={classNames} style={style} onClick={onClick as any} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames}
      style={style}
      onClick={disabled ? undefined : (onClick as any)}
      {...rest}
    >
      {content}
    </button>
  );
}
