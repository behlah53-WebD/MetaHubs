import React from 'react';
import styles from './BrowserFrame.module.css';

export interface BrowserFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  url?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function BrowserFrame({
  children,
  url = 'app.theboomerang.co',
  className = '',
  style = {},
  ...rest
}: BrowserFrameProps) {
  return (
    <div className={`${styles.frame} ${className}`} style={style} {...rest}>
      <div className={styles.topBar}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <div className={styles.urlBar}>
          <span className={styles.urlText}>{url}</span>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
