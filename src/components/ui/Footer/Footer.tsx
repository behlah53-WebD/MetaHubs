import React from 'react';
import Link from 'next/link';
import Button from '../Button/Button';
import styles from './Footer.module.css';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  showCta?: boolean;
  links?: FooterLink[];
  className?: string;
  style?: React.CSSProperties;
}

export default function Footer({
  showCta = true,
  links,
  className = '',
  style = {},
}: FooterProps = {}) {
  const defaultLinks: FooterLink[] = [
    { label: 'Product', href: '/product' },
    { label: 'Impact', href: '/impact' },
    { label: 'Workflows', href: '/workflows' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Security', href: '/security' },
    { label: 'Privacy Policy', href: '#' },
  ];

  const footerLinks = links || defaultLinks;

  return (
    <div className={className} style={style}>
      {showCta && (
        <section className={styles.ctaSection}>
          <div className={styles.gridPattern} />
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaHeading}>
              Put Metahubs on your first workflow.
            </h2>
            <p className={styles.ctaParagraph}>
              Walk us through how your team closes today. We&apos;ll show the same work running in your tools.
            </p>
            <Button size="lg" href="/#contact">
              Book a Demo &rarr;
            </Button>
          </div>
        </section>
      )}

      <footer className={styles.footerBar}>
        <div className={styles.footerInner}>
          <div className={styles.companyInfo}>
            <span>&copy; 2026 Metahubs, Inc.</span>
            <span className={styles.address}>
              5th Floor, Salarpuria Touchstone, Outer Ring Road, Kadubeesanahalli, Bengaluru, Karnataka 560103, India
            </span>
          </div>

          <div className={styles.navLinks}>
            {footerLinks.map((link, idx) => (
              <Link key={idx} href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
