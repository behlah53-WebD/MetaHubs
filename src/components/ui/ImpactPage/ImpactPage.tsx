'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './ImpactPage.module.css';

export default function ImpactPage() {
  const [filter, setFilter] = useState('All');

  const stats = [
    { v: '70%', l: 'Less time preparing the close' },
    { v: '3 days', l: 'Median time to close' },
    { v: '1,200+', l: 'Reconciliations per month' },
    { v: '0', l: 'Entries posted without approval' },
  ];

  const stories = [
    { id: 'story-1', w: 'Close', m: '8 days → 2', t: 'A biotech controller moves from preparing the close to reviewing it', meta: 'Series B biotech · QuickBooks' },
    { id: 'story-2', w: 'Payables', m: '4 files → 1', t: 'Replacing a chain of AP spreadsheets with one approval trigger', meta: 'Medical devices · NetSuite' },
    { id: 'story-3', w: 'Reporting', m: '6 days → 1', t: 'Board-ready variance commentary before the review meeting', meta: 'Public company · NetSuite + Planful' },
    { id: 'story-4', w: 'Reconciliation', m: '42 recons', t: 'Every balance sheet account reconciled by day two', meta: 'SaaS, 3 entities · Sage Intacct' },
    { id: 'story-5', w: 'Close', m: '3 entities', t: 'Consolidating US, UK and EU books without a new tool', meta: 'Diagnostics · NetSuite' },
    { id: 'story-6', w: 'Payables', m: '11 hrs/wk', t: 'Giving an AP lead her week back from invoice coding', meta: 'Clinical-stage biotech · Bill.com' },
  ];

  const themes = [
    { bg: '#0a1f44', fg: '#fff', sub: '#7dd3fc', bar: 'rgba(125,211,252,.3)' },
    { bg: '#f0f9ff', fg: '#0a1f44', sub: '#0369a1', bar: '#bae6fd' },
    { bg: '#0c4a6e', fg: '#fff', sub: '#bae6fd', bar: 'rgba(186,230,253,.3)' },
  ];

  const barHeights = [
    ['100%', '85%', '60%', '40%', '25%'],
    ['30%', '50%', '45%', '70%', '95%'],
    ['90%', '70%', '75%', '40%', '20%'],
  ];

  const enrichedStories = stories.map((s, i) => {
    const t = themes[i % 3];
    const b = barHeights[i % 3];
    return {
      ...s,
      ...t,
      b1: b[0],
      b2: b[1],
      b3: b[2],
      b4: b[3],
      b5: b[4],
    };
  });

  const filterNames = ['All', 'Close', 'Reconciliation', 'Payables', 'Reporting'];
  const filteredStories = filter === 'All' ? enrichedStories : enrichedStories.filter((s) => s.w === filter);

  return (
    <div className={styles.page}>
      <Header active="impact" />

      {/* HERO */}
      <section data-screen-label="Impact hero" className={styles.heroSection}>
        <div className={styles.gridPattern} />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <span className={styles.heroEyebrow}>Impact</span>
            <h1 className={styles.heroTitle}>
              Weeks of work, <span className={styles.heroHighlight}>down to days.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Results from finance teams running Metahubs today. Every figure is measured from their own closes.
            </p>
          </div>
          <div className={styles.statsGrid}>
            {stats.map((s, idx) => (
              <div key={idx} className={styles.statBlock}>
                <span className={styles.statValue}>{s.v}</span>
                <span className={styles.statLabel}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section data-screen-label="Featured story" className={styles.featuredSection}>
        <div className={styles.featuredInner}>
          <div className={styles.calendarVisual}>
            <div className={styles.calendarCard}>
              <div className={styles.calendarHeader}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#7dd3fc' }}>
                  Month-end close · October
                </span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#0a1f44', background: '#38bdf8', padding: '4px 10px', borderRadius: '9999px' }}>
                  Closed day 2
                </span>
              </div>
              <div className={styles.calendarGrid}>
                {[1, 2].map((d) => (
                  <span key={d} className={`${styles.calDay} ${styles.calActive}`}>{d}</span>
                ))}
                {[3, 4, 5, 6, 7, 8].map((d) => (
                  <span key={d} className={`${styles.calDay} ${styles.calStruck}`}>{d}</span>
                ))}
                {[9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map((d) => (
                  <span key={d} className={`${styles.calDay} ${styles.calNormal}`}>{d}</span>
                ))}
              </div>
              <div className={styles.calendarSummary}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#cbd5e1' }}>
                  <span>Reconciliations</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>42 / 42</span>
                </div>
                <div style={{ height: '6px', borderRadius: '9999px', background: 'rgba(255,255,255,.1)', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', background: '#38bdf8' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#cbd5e1' }}>
                  <span>Awaiting controller review</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>3 entries</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.featuredText}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#0284c7' }}>
              Featured story
            </span>
            <p className={styles.featuredQuote}>
              &ldquo;I used to spend the first eight days of every month preparing. Now I spend two reviewing, and the workpapers are better than mine were.&rdquo;
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-heading)' }}>Customer name, CPA</span>
              <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Controller, Series B biotech · QuickBooks</span>
            </div>
            <div className={styles.metricsRow}>
              <div className={styles.metricCol}>
                <span className={styles.metricNum}>8 &rarr; 2</span>
                <span className={styles.metricName}>Days to close</span>
              </div>
              <div className={styles.metricCol}>
                <span className={styles.metricNum}>42</span>
                <span className={styles.metricName}>Recons per month</span>
              </div>
              <div className={styles.metricCol}>
                <span className={styles.metricNum}>0</span>
                <span className={styles.metricName}>Audit adjustments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL STORIES */}
      <section data-screen-label="All stories" className={styles.storiesSection}>
        <div className={styles.storiesContainer}>
          <div className={styles.filterHeader}>
            <SectionHeading
              align="left"
              eyebrow="Case Studies"
              title="Every story, by workflow"
            />
            <div className={styles.filterButtons}>
              {filterNames.map((name, idx) => {
                const isActive = name === filter;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setFilter(name)}
                    className={styles.filterBtn}
                    style={{
                      background: isActive ? '#0a1f44' : '#fff',
                      color: isActive ? '#fff' : '#475569',
                      border: `1px solid ${isActive ? '#0a1f44' : '#dfe7f0'}`,
                    }}
                  >
                    {name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.storiesGrid}>
            {filteredStories.map((c) => (
              <Link key={c.id} href="#" className={styles.storyCard}>
                <div className={styles.storyGraphic} style={{ background: c.bg }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '70%' }}>
                    <span style={{ height: '8px', borderRadius: '4px', background: c.bar, width: '100%' }} />
                    <span style={{ height: '8px', borderRadius: '4px', background: c.bar, width: '65%' }} />
                  </div>
                  <div className={styles.barsContainer}>
                    <span style={{ flex: 1, height: c.b1, background: c.bar, borderRadius: '3px 3px 0 0' }} />
                    <span style={{ flex: 1, height: c.b2, background: c.bar, borderRadius: '3px 3px 0 0' }} />
                    <span style={{ flex: 1, height: c.b3, background: c.bar, borderRadius: '3px 3px 0 0' }} />
                    <span style={{ flex: 1, height: c.b4, background: c.bar, borderRadius: '3px 3px 0 0' }} />
                    <span style={{ flex: 1, height: c.b5, background: '#38bdf8', borderRadius: '3px 3px 0 0' }} />
                  </div>
                </div>
                <div className={styles.storyContent}>
                  <div className={styles.metricBadgeRow}>
                    <span className={styles.storyMetric}>{c.m}</span>
                    <span className={styles.storyPill}>{c.w}</span>
                  </div>
                  <p className={styles.storyTitle}>{c.t}</p>
                  <div className={styles.storyFooter}>
                    <span>{c.meta}</span>
                    <span style={{ color: '#0284c7', fontWeight: 600 }}>Read &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
