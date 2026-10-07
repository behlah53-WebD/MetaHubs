'use client';

import React, { useState } from 'react';
import styles from './SegmentedTabs.module.css';

const TONES: Record<string, string> = {
  brand: styles.toneBrand,
  emerald: styles.toneEmerald,
  amber: styles.toneAmber,
  neutral: styles.toneNeutral,
};

export interface TabItem {
  id: string | number;
  label: React.ReactNode;
}

export interface SegmentedTabsProps {
  tabs?: TabItem[];
  value?: string | number;
  onChange?: (id: any) => void;
  tone?: 'brand' | 'emerald' | 'amber' | 'neutral' | string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SegmentedTabs({
  tabs = [],
  value,
  onChange,
  tone = 'brand',
  className = '',
  style = {},
}: SegmentedTabsProps) {
  const [internal, setInternal] = useState(tabs[0]?.id);
  const active = value !== undefined ? value : internal;

  const setTab = (id: string | number) => {
    setInternal(id);
    if (onChange) onChange(id);
  };

  const activeToneClass = TONES[tone] || styles.toneBrand;

  return (
    <div className={`${styles.track} ${className}`} style={style}>
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setTab(tab.id)}
            className={`${styles.tabButton} ${
              isActive ? `${styles.active} ${activeToneClass}` : styles.inactive
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
