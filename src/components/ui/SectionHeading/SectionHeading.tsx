import React from 'react';
import Eyebrow from '../Eyebrow/Eyebrow';
import styles from './SectionHeading.module.css';

export interface SectionHeadingProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'center' | 'left' | string;
  size?: 'md' | 'lg' | string;
  inverse?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  size = 'lg',
  inverse = false,
  className = '',
  style = {},
}: SectionHeadingProps) {
  const containerClass = align === 'center' ? styles.containerCenter : styles.containerLeft;
  const titleSizeClass = size === 'md' ? styles.titleMd : styles.titleLg;
  const titleColorClass = inverse ? styles.titleInverse : styles.titleDefault;
  const subtitleColorClass = inverse ? styles.subtitleInverse : styles.subtitleDefault;
  const subtitleAlignClass = align === 'left' ? styles.subtitleLeft : '';

  return (
    <div className={`${containerClass} ${className}`} style={style}>
      {eyebrow && (
        <div className={styles.eyebrowWrapper}>
          <Eyebrow tone={inverse ? 'inverse' : 'brand'}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2 className={`${styles.title} ${titleSizeClass} ${titleColorClass}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`${styles.subtitle} ${subtitleAlignClass} ${subtitleColorClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
