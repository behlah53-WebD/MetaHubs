import React from 'react';
import Badge from '../Badge/Badge';
import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './PricingCard.module.css';

function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--brand-500)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={styles.checkIcon}
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export interface PricingCardProps {
  name: React.ReactNode;
  description?: React.ReactNode;
  price: React.ReactNode;
  unit?: React.ReactNode;
  features?: React.ReactNode[];
  cta?: React.ReactNode;
  href?: string;
  popular?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function PricingCard({
  name,
  description,
  price,
  unit,
  features = [],
  cta = 'Get Started',
  href = '#',
  popular = false,
  className = '',
  style = {},
}: PricingCardProps) {
  return (
    <div className={`${styles.wrapper} ${className}`} style={style}>
      {popular && (
        <div className={styles.popularBadge}>
          <Badge tone="brand" variant="solid">
            Most Popular
          </Badge>
        </div>
      )}
      <Card
        highlighted={popular}
        hover={!popular}
        padding="md"
        className={styles.cardContent}
      >
        <div className={styles.header}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.priceWrapper}>
            <span className={styles.price}>{price}</span>
            {unit && <span className={styles.unit}>{unit}</span>}
          </div>
        </div>

        <ul className={styles.featureList}>
          {features.map((f, i) => (
            <li key={i} className={styles.featureItem}>
              <Check />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <Button
          variant={popular ? 'primary' : 'outline'}
          href={href}
          fullWidth
        >
          {cta}
        </Button>
      </Card>
    </div>
  );
}
