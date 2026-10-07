'use client';

import React from 'react';
import Link from 'next/link';
import Button from '../Button/Button';
import styles from './Header.module.css';

export interface HeaderProps {
  active?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Header({ active = '', className = '', style = {} }: HeaderProps) {
  const links = [
    { id: 'product', label: 'Product', href: '/product' },
    { id: 'impact', label: 'Impact', href: '/impact' },
    { id: 'workflows', label: 'Workflows', href: '/workflows' },
    { id: 'pricing', label: 'Pricing', href: '/pricing' },
    { id: 'security', label: 'Security', href: '/security' },
  ];

  return (
    <header className={`${styles.header} ${className}`} style={style}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoLink}>
          <span className={styles.logoIcon}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0a1f44"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 19V5l14 14V5" />
            </svg>
          </span>
          <span className={styles.logoText}>Metahubs</span>
        </Link>

        <nav className={styles.nav}>
          {links.map((link) => {
            const isActive = link.id === active;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`${styles.navLink} ${
                  isActive ? styles.linkActive : styles.linkInactive
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Button size="sm" href="/#contact">
          Book a Demo &rarr;
        </Button>
      </div>
    </header>
  );
}
