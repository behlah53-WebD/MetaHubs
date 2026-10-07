'use client';

import React from 'react';
import Header from '../Header/Header';
import styles from './SiteHeaderPreview.module.css';

export default function SiteHeaderPreview() {
  return (
    <div className={styles.previewContainer}>
      <div className={styles.previewCanvas}>
        <Header active="" />
      </div>
    </div>
  );
}
