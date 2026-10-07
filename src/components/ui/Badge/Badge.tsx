import React from 'react';
import styles from './Badge.module.css';

const TONES: Record<string, { soft: { bg: string; border: string; color: string }; solid: { bg: string; border: string; color: string }; dot: string }> = {
  brand: {
    soft: { bg: 'var(--brand-50)', border: 'var(--brand-200)', color: 'var(--brand-700)' },
    solid: { bg: 'var(--brand-500)', border: 'transparent', color: '#fff' },
    dot: 'var(--brand-500)',
  },
  neutral: {
    soft: { bg: 'var(--stone-100)', border: 'transparent', color: 'var(--stone-500)' },
    solid: { bg: 'var(--stone-800)', border: 'transparent', color: '#fff' },
    dot: 'var(--stone-400)',
  },
  emerald: {
    soft: { bg: 'var(--emerald-50)', border: 'var(--emerald-200)', color: 'var(--emerald-600)' },
    solid: { bg: 'var(--emerald-500)', border: 'transparent', color: '#fff' },
    dot: 'var(--emerald-500)',
  },
  amber: {
    soft: { bg: 'var(--amber-50)', border: 'var(--amber-200)', color: 'var(--amber-600)' },
    solid: { bg: 'var(--amber-500)', border: 'transparent', color: '#fff' },
    dot: 'var(--amber-500)',
  },
  success: {
    soft: { bg: 'var(--stone-100)', border: 'transparent', color: 'var(--stone-500)' },
    solid: { bg: 'var(--emerald-500)', border: 'transparent', color: '#fff' },
    dot: 'var(--green-400)',
  },
};

export interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'soft' | 'solid' | string;
  tone?: 'brand' | 'neutral' | 'emerald' | 'amber' | 'success' | string;
  dot?: boolean;
  pulse?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function Badge({
  children,
  variant = 'soft',
  tone = 'brand',
  dot = false,
  pulse = false,
  className = '',
  style = {},
}: BadgeProps) {
  const currentTone = TONES[tone] || TONES.brand;
  const currentVariant = (currentTone as Record<string, any>)[variant] || currentTone.soft;

  const combinedStyle: React.CSSProperties = {
    backgroundColor: currentVariant.bg,
    border: `1px solid ${currentVariant.border}`,
    color: currentVariant.color,
    ...style,
  };

  return (
    <span
      className={`${styles.badge} ${dot ? styles.paddedDot : styles.paddedNormal} ${className}`}
      style={combinedStyle}
    >
      {dot && (
        <span
          className={`${styles.dot} ${pulse ? styles.pulse : ''}`}
          style={{ backgroundColor: currentTone.dot }}
        />
      )}
      {children}
    </span>
  );
}
