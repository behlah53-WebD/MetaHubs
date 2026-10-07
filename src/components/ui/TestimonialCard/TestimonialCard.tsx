import React from 'react';
import Card from '../Card/Card';
import styles from './TestimonialCard.module.css';

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className={styles.starsRow}>
      {Array.from({ length: n }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={styles.starIcon}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export interface TestimonialCardProps {
  quote: React.ReactNode;
  name: string;
  title?: React.ReactNode;
  avatar?: string;
  rating?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function TestimonialCard({
  quote,
  name,
  title,
  avatar,
  rating = 5,
  className = '',
  style = {},
}: TestimonialCardProps) {
  return (
    <Card
      padding="md"
      className={className}
      style={{
        backgroundColor: 'var(--stone-50)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        ...style,
      }}
    >
      <Stars n={rating} />
      <blockquote className={styles.quote}>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className={styles.authorRow}>
        {avatar ? (
          <img src={avatar} alt={name} className={styles.avatar} />
        ) : (
          <div className={styles.avatarFallback}>
            {String(name || '?').charAt(0)}
          </div>
        )}
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.title}>{title}</p>
        </div>
      </div>
    </Card>
  );
}
