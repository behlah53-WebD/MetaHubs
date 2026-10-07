'use client';

import React from 'react';
import Footer from '../Footer/Footer';
import styles from './SiteFooterPreview.module.css';

export default function SiteFooterPreview() {
  return (
    <div className={styles.previewContainer}>
      <Footer />
    </div>
  );
}
