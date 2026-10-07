'use client';

import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PricingCard from '../PricingCard/PricingCard';
import SectionHeading from '../SectionHeading/SectionHeading';
import Accordion from '../Accordion/Accordion';
import styles from './PricingPage.module.css';

export default function PricingPage() {
  const p1 = [
    'NetSuite, QuickBooks or Xero connection',
    'Month-end close workflow',
    'Bank and card reconciliations',
    'Weekly check-in with your finance lead',
  ];

  const p2 = [
    'Everything in Foundation',
    'Balance sheet reconciliations',
    'Accruals and prepaids',
    'Accounts payable and approvals',
    'Slack approval routing',
  ];

  const p3 = [
    'Everything in Growth',
    'Multi-entity consolidation',
    'FP&A commentary',
    'SOX-ready controls documentation',
    'Dedicated implementation lead',
  ];

  const Y = '✓';
  const N = '—';

  const rawTable = [
    ['Workflows', null],
    ['Month-end close', Y, Y, Y],
    ['Bank and card reconciliations', Y, Y, Y],
    ['Balance sheet reconciliations', N, Y, Y],
    ['Accruals and prepaids', N, Y, Y],
    ['Accounts payable', N, Y, Y],
    ['Consolidation', N, N, Y],
    ['FP&A commentary', N, 'Add-on', Y],
    ['Support', null],
    ['Entities included', '1', 'Up to 3', 'Unlimited'],
    ['Finance lead check-ins', 'Weekly', 'Weekly', 'Daily'],
    ['Implementation', 'Guided', 'Guided', 'Dedicated lead'],
    ['SOX controls documentation', N, N, Y],
  ];

  const colColor = (v: any) => (v === N ? '#94a5ba' : v === Y ? '#0284c7' : '#334155');

  const rows = rawTable.map(([f, a, b, c]) =>
    a === null
      ? { f, isCategory: true, bg: '#f0f9ff', w: 700 }
      : { f, a, b, c, isCategory: false, bg: '#fff', w: 400, c1: colColor(a), c2: colColor(b), c3: colColor(c) }
  );

  const faqItems = [
    {
      id: 0,
      question: 'How is the monthly price set?',
      answer: 'We scope the workflows you want to hand over on a call, then agree one fixed monthly price. It only changes if you add or remove workflows.',
    },
    {
      id: 1,
      question: 'Is there a setup fee?',
      answer: 'No. Implementation, including the parallel close, is included in every plan.',
    },
    {
      id: 2,
      question: 'Can we cancel?',
      answer: 'Plans are month to month after the first three months. You keep every workpaper Metahubs produced.',
    },
    {
      id: 3,
      question: 'Do you charge per user?',
      answer: 'No. Invite as many reviewers and approvers as your team needs.',
    },
    {
      id: 4,
      question: 'What if our volume grows?',
      answer: 'Pricing is based on workflows and entities, not transactions. Seasonal spikes do not change your bill.',
    },
  ];

  return (
    <div className={styles.page}>
      <Header active="pricing" />

      {/* HERO */}
      <section data-screen-label="Pricing hero" className={styles.heroSection}>
        <div className={styles.gridPattern} />
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Pricing</span>
          <h1 className={styles.heroTitle}>
            One monthly price. <span className={styles.heroHighlight}>No per-seat math.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            You pay for the workflows Metahubs runs, agreed up front. Add or remove workflows any month.
          </p>
        </div>
      </section>

      {/* PLANS */}
      <section data-screen-label="Plans" className={styles.plansSection}>
        <div className={styles.plansGrid}>
          <PricingCard
            name="Foundation"
            description="Integrations plus month-end close."
            price="$900"
            unit="/ month"
            features={p1}
            cta="Book a Demo"
            href="/#contact"
          />
          <PricingCard
            name="Growth"
            description="Close, reconciliations and payables."
            price="$2,400"
            unit="/ month"
            features={p2}
            cta="Book a Demo"
            href="/#contact"
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            description="Multi-entity and public-company ready."
            price="Custom"
            unit=""
            features={p3}
            cta="Talk to Sales"
            href="/#contact"
          />
        </div>
      </section>

      {/* COMPARE */}
      <section data-screen-label="Compare" className={styles.compareSection}>
        <div className={styles.compareContainer}>
          <SectionHeading
            eyebrow="Compare Plans"
            title="What's included"
          />
          <div className={styles.tableWrapper}>
            <div className={styles.tableInner}>
              <div className={styles.tableHeader}>
                <span className={styles.headerCell}>Feature</span>
                <span className={styles.headerCellCenter}>Foundation</span>
                <span className={styles.headerCellHighlight}>Growth</span>
                <span className={styles.headerCellCenter}>Enterprise</span>
              </div>
              {rows.map((r, idx) => (
                <div
                  key={idx}
                  className={styles.tableRow}
                  style={{ background: r.bg }}
                >
                  <span
                    className={styles.cellFeature}
                    style={{ fontWeight: r.w }}
                  >
                    {r.f}
                  </span>
                  <span
                    className={styles.cellValue}
                    style={{ color: r.c1 }}
                  >
                    {r.a || ''}
                  </span>
                  <span
                    className={styles.cellValue}
                    style={{ color: r.c2 }}
                  >
                    {r.b || ''}
                  </span>
                  <span
                    className={styles.cellValue}
                    style={{ color: r.c3 }}
                  >
                    {r.c || ''}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING FAQ */}
      <section data-screen-label="Pricing FAQ" className={styles.faqSection}>
        <div className={styles.faqRow}>
          <div className={styles.faqLeft}>
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Pricing questions"
              subtitle="Anything else? A finance lead replies within one business day."
            />
          </div>
          <div className={styles.faqRight}>
            <Accordion items={faqItems} defaultOpen={[0]} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
