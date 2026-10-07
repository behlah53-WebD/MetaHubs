import React from 'react';
import styles from './StatBlock.module.css';

export interface StatBlockProps {
  value: React.ReactNode;
  label: React.ReactNode;
  align?: React.CSSProperties['textAlign'];
  className?: string;
  style?: React.CSSProperties;
}

export default function StatBlock({
  value,
  label,
  align = 'center',
  className = '',
  style = {},
}: StatBlockProps) {
  return (
    <div className={className} style={{ textAlign: align, ...style }}>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
