'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../Header/Header';
import Button from '../Button/Button';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './HomePage.module.css';

export default function HomePage() {
  const [heroApproved, setHeroApproved] = useState(false);
  const [activeCat, setActiveCat] = useState('All');
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    notes: '',
  });

  const closeTasks = [
    { task: 'Bank and card feeds imported', meta: '6 accounts · Close employee', status: 'Done', bg: '#ecfdf5', fg: '#059669', rowBg: '#fff' },
    { task: 'Operating cash reconciled', meta: '0 differences', status: 'Done', bg: '#ecfdf5', fg: '#059669', rowBg: '#fff' },
    { task: 'Vendor and CRO accruals', meta: '5 entries · support attached', status: 'Review', bg: '#fffbeb', fg: '#d97706', rowBg: '#fff' },
    { task: 'AR reconciliation', meta: '1 difference explained', status: 'Review', bg: '#fffbeb', fg: '#d97706', rowBg: '#fff' },
    { task: 'Flux commentary', meta: 'Drafting', status: 'Running', bg: '#e0f2fe', fg: '#0369a1', rowBg: '#f0f9ff' },
  ];

  const accrualRows = [
    { v: 'CRO — Study 204', a: '$186,000', b: 'Contract' },
    { v: 'Outside counsel', a: '$42,500', b: 'Invoice lag' },
    { v: 'Cloud hosting', a: '$18,240', b: 'Usage' },
    { v: 'Consultants', a: '$27,000', b: 'Timesheets' },
    { v: 'Insurance', a: '$9,833', b: 'Schedule' },
  ];

  const operators = ['Big Four audit', 'Market data', 'Life sciences', 'Investment banking', 'ERP software'];

  const flowNodes = [
    { a: 'Every month-end', b: 'Trigger' },
    { a: 'Pull trial balance', b: 'NetSuite' },
    { a: 'Match transactions', b: 'Metahubs' },
    { a: 'Send for sign-off', b: 'Review' },
  ];

  const sheetRows = [
    { n: '2', a: 'Operating 4471', b: '482,190', c: '482,190' },
    { n: '3', a: 'Payroll 8820', b: '64,300', c: '64,300' },
    { n: '4', a: 'Money market', b: '1,250,000', c: '1,250,000' },
    { n: '5', a: 'Total cash', b: '1,796,490', c: '1,796,490' },
  ];

  const capabilities: Array<{
    dir: React.CSSProperties['flexDirection'];
    tag: string;
    title: string;
    body: string;
    items: string[];
    cards: Array<{ a: string; b: string; v: string }>;
    foot: string;
  }> = [
    {
      dir: 'row',
      tag: '',
      title: 'Reconciliations',
      body: "Metahubs ties every account to its source, investigates what doesn't match and prepares the workpaper.",
      items: ['Bank and credit card', 'Balance sheet accounts', 'Payroll clearing'],
      cards: [
        { a: 'Bank statement', b: 'Closing balance · Sep 30', v: '$84,250.00' },
        { a: 'General ledger', b: 'Cash account 1010', v: '$84,250.00' },
      ],
      foot: 'Reconciled by Metahubs',
    },
    {
      dir: 'row-reverse',
      tag: '',
      title: 'Accruals and recurring entries',
      body: 'Expenses land in the month they were incurred, with schedules and entries ready for approval.',
      items: ['Vendor and CRO accruals', 'Prepaid amortization', 'Payroll and bonus accruals'],
      cards: [
        { a: 'Vendor invoice', b: 'September services · received Oct 4', v: '$12,000' },
        { a: 'Accrual entry', b: 'Dr Expense / Cr Accrued liabilities', v: '$12,000' },
      ],
      foot: 'Prepared for your approval',
    },
    {
      dir: 'row',
      tag: 'For multi-entity groups',
      title: 'Consolidation',
      body: 'Separate entities come together in one set of books, with eliminations and currency handled.',
      items: ['Intercompany eliminations', 'FX revaluation and translation', 'Consolidated trial balance'],
      cards: [
        { a: 'US entity', b: 'USD', v: '$4.2M' },
        { a: 'UK entity', b: 'GBP → USD', v: '$1.1M' },
        { a: 'EU entity', b: 'EUR → USD', v: '$0.8M' },
      ],
      foot: 'Consolidated TB · XLSX',
    },
    {
      dir: 'row-reverse',
      tag: '',
      title: 'Reporting and close review',
      body: 'Statements, variance explanations and reporting packs arrive together, ready for sign-off.',
      items: ['Flux and variance commentary', 'Close checklist and sign-offs', 'Financial statement package'],
      cards: [
        { a: 'Software expense', b: 'Annual renewal explains the increase', v: '+$3,200' },
        { a: 'Professional fees', b: 'Audit fieldwork started in September', v: '+$18,400' },
      ],
      foot: 'Supporting workpaper included',
    },
  ];

  const tools = [
    'NetSuite', 'QuickBooks', 'Xero', 'Sage Intacct',
    'Excel', 'Google Sheets', 'Coupa', 'Bill.com',
    'Ramp', 'Brex', 'Rippling', 'Gusto',
    'ADP', 'Carta', 'Slack', 'Microsoft Teams'
  ].map((n) => ({ n, i: n[0] }));

  const allWorkflows = [
    { cat: 'Prep & Cutoff', t: 'Bank and card feeds', d: "Brings the period's bank and card activity into your ledger." },
    { cat: 'Prep & Cutoff', t: 'AP and AR cutoff', d: 'Checks bills and invoices are booked to the correct period.' },
    { cat: 'Prep & Cutoff', t: 'Period lock', d: 'Tracks sign-offs and readies the period to lock.' },
    { cat: 'Reconciliations', t: 'Bank and card recs', d: 'Ties statements to the ledger and explains every break.' },
    { cat: 'Reconciliations', t: 'Balance sheet recs', d: 'Supports each balance with schedules and source documents.' },
    { cat: 'Reconciliations', t: 'Intercompany recs', d: 'Matches balances across entities and chases mismatches.' },
    { cat: 'Revenue', t: 'Revenue recognition', d: 'Builds schedules and entries under your ASC 606 policy.' },
    { cat: 'Revenue', t: 'Deferred revenue', d: 'Rolls forward deferrals and tracks unbilled revenue.' },
    { cat: 'Expenses', t: 'Vendor and CRO accruals', d: 'Estimates work performed but not yet invoiced.' },
    { cat: 'Expenses', t: 'Payroll accruals', d: 'Accrues earned wages, bonus and employee expenses.' },
    { cat: 'Schedules', t: 'Prepaids', d: 'Keeps prepaid schedules current and drafts monthly expense.' },
    { cat: 'Schedules', t: 'Fixed assets and leases', d: 'Maintains depreciation and ASC 842 lease schedules.' },
    { cat: 'Schedules', t: 'Stock compensation', d: 'Rolls forward ASC 718 expense and drafts entries.' },
    { cat: 'Consolidation', t: 'Eliminations', d: 'Removes intercompany activity from group results.' },
    { cat: 'Consolidation', t: 'FX translation', d: 'Revalues and translates entity results for consolidation.' },
    { cat: 'Reporting', t: 'Flux commentary', d: 'Explains movements in the numbers in plain language.' },
    { cat: 'Reporting', t: 'Board packs and PBC lists', d: 'Assembles board reporting and auditor requests.' },
  ];

  const catNames = ['All', 'Prep & Cutoff', 'Reconciliations', 'Revenue', 'Expenses', 'Schedules', 'Consolidation', 'Reporting'];
  const filteredWorkflows = activeCat === 'All' ? allWorkflows : allWorkflows.filter((w) => w.cat === activeCat);

  const security = [
    { t: 'SOC 2 Type II', d: 'Controls independently audited across every system we run.' },
    { t: 'SOC 1', d: 'Controls over financial reporting, examined by a licensed CPA firm.' },
    { t: 'SOX-aligned', d: 'Preparer and approver roles stay separate, with a full approval trail.' },
    { t: 'No training on your data', d: 'Your ledger is never used to train models or shared across customers.' },
    { t: 'HIPAA-ready', d: 'Available under a BAA when protected health information is in scope.' },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className={styles.page}>
      <Header />

      {/* HERO */}
      <section data-screen-label="Hero" className={styles.heroSection}>
        <div className={styles.gridPattern} />
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>
            <span className={styles.pulseDot} />
            AI employees for finance &amp; accounting
          </span>
          <h1 className={styles.heroTitle}>
            Month-end, <span className={styles.heroHighlight}>handled.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Metahubs works inside your accounting stack, prepares the close from start to finish, and hands every entry to your team for sign-off. Plans from $900/month.
          </p>
          <div className={styles.heroCtaRow}>
            <Button size="lg" href="#contact">
              Book a Demo &rarr;
            </Button>
            <Button size="lg" variant="inverse" href="#pricing">
              See Pricing &darr;
            </Button>
          </div>

          {/* Product Picture Mockup */}
          <div className={styles.productPicture}>
            <div className={styles.outerFrame}>
              <div className={styles.innerFrame}>
                <div className={styles.windowBar}>
                  <span className={styles.windowDot} />
                  <span className={styles.windowDot} />
                  <span className={styles.windowDot} />
                  <span className={styles.windowUrl}>app.metahubs.ai / close / september-2026</span>
                </div>
                <div className={styles.productGrid}>
                  <div className={styles.tasksCol}>
                    <div className={styles.tasksHeader}>
                      <span className={styles.tasksHeaderTitle}>September close</span>
                      <span className={styles.tasksHeaderPercent}>68%</span>
                    </div>
                    <div className={styles.progressBarTrack}>
                      <div className={styles.progressBarFill} />
                    </div>
                    {closeTasks.map((t, idx) => (
                      <div
                        key={idx}
                        className={styles.taskItem}
                        style={{ background: t.rowBg }}
                      >
                        <div className={styles.taskItemInfo}>
                          <span className={styles.taskItemName}>{t.task}</span>
                          <span className={styles.taskItemMeta}>{t.meta}</span>
                        </div>
                        <span
                          className={styles.taskItemStatus}
                          style={{ background: t.bg, color: t.fg }}
                        >
                          {t.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.accrualsCol}>
                    <div className={styles.accrualsHeader}>
                      <span className={styles.fileName}>accruals_sep26.xlsx</span>
                      <span className={styles.reviewBadge}>Ready for review</span>
                    </div>
                    <div className={styles.accrualsTable}>
                      <div className={styles.tableHeader}>
                        <span className={styles.cell}>Vendor</span>
                        <span className={styles.cellRight}>Accrual</span>
                        <span className={styles.cellRight}>Basis</span>
                      </div>
                      {accrualRows.map((r, idx) => (
                        <div key={idx} className={styles.tableRow}>
                          <span className={styles.cell} style={{ color: '#0a1f44', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {r.v}
                          </span>
                          <span className={styles.cellRight} style={{ color: '#334155', fontVariantNumeric: 'tabular-nums' }}>
                            {r.a}
                          </span>
                          <span className={styles.cellRight} style={{ color: '#64748b' }}>
                            {r.b}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className={styles.approveBottomBar}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '13px', fontWeight: 600 }}>5 entries prepared</span>
                        <span style={{ fontSize: '11px', color: '#94a5ba' }}>Reversing October 1 &middot; support attached</span>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => setHeroApproved(true)}
                        style={{ minWidth: '100px' }}
                      >
                        {heroApproved ? 'Approved' : 'Approve'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATOR STRIP */}
      <section className={styles.operatorStrip}>
        <div className={styles.operatorInner}>
          <span className={styles.operatorLabel}>Built by operators from</span>
          {operators.map((o, idx) => (
            <span key={idx} className={styles.operatorName}>
              {o}
            </span>
          ))}
        </div>
      </section>

      {/* AUTOMATE */}
      <section data-screen-label="Automate" className={styles.automateSection}>
        <div className={styles.automateContainer}>
          <SectionHeading
            eyebrow="What It Does"
            title="Hand off the repetitive work"
            subtitle="Metahubs runs recurring finance tasks in the tools you already use, so your team spends its time reviewing."
          />
          <div className={styles.featureCardsGrid}>
            {/* Card 1 */}
            <div className={styles.featureCard}>
              <div className={styles.featureCardTop} style={{ background: '#f0f9ff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '.08em', textTransform: 'uppercase', color: '#0369a1', marginBottom: '4px' }}>
                  <span>Close workflow</span><span>Draft</span>
                </div>
                {flowNodes.map((n, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 12px', background: '#fff', border: '1px solid #bae6fd', borderRadius: '10px', marginTop: '8px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#0a1f44' }}>{n.a}</span>
                    <span style={{ fontSize: '11px', color: '#0369a1', background: '#e0f2fe', padding: '2px 8px', borderRadius: '9999px' }}>{n.b}</span>
                  </div>
                ))}
              </div>
              <div className={styles.featureCardBody}>
                <h3 className={styles.featureCardTitle}>Works directly in your systems</h3>
                <p className={styles.featureCardText}>Pulls trial balances, updates records and drafts entries in NetSuite, QuickBooks and Xero.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles.featureCard}>
              <div className={styles.featureCardTop} style={{ background: '#f0f9ff' }}>
                <div style={{ width: '100%', background: '#fff', border: '1px solid #bae6fd', borderRadius: '10px', overflow: 'hidden', fontSize: '12px' }}>
                  <div style={{ padding: '8px 12px', borderBottom: '1px solid #e0f2fe', fontFamily: 'var(--font-mono)', color: '#0369a1' }}>
                    Aug close — cash.xlsx
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '28px minmax(0,1.4fr) minmax(0,1fr) minmax(0,1fr)' }}>
                    <span style={{ padding: '6px', background: '#f6f9fc', color: '#94a5ba' }}></span>
                    <span style={{ padding: '6px 8px', background: '#f6f9fc', color: '#64748b', fontWeight: 600 }}>Account</span>
                    <span style={{ padding: '6px 8px', background: '#f6f9fc', color: '#64748b', fontWeight: 600, textAlign: 'right' }}>Book</span>
                    <span style={{ padding: '6px 8px', background: '#f6f9fc', color: '#64748b', fontWeight: 600, textAlign: 'right' }}>Bank</span>
                  </div>
                  {sheetRows.map((s, idx) => (
                    <div key={idx} style={{ display: 'grid', gridTemplateColumns: '28px minmax(0,1.4fr) minmax(0,1fr) minmax(0,1fr)', borderTop: '1px solid #eef3f8' }}>
                      <span style={{ padding: '6px', background: '#f6f9fc', color: '#94a5ba', textAlign: 'center' }}>{s.n}</span>
                      <span style={{ padding: '6px 8px', color: '#0a1f44' }}>{s.a}</span>
                      <span style={{ padding: '6px 8px', textAlign: 'right', color: '#334155', fontVariantNumeric: 'tabular-nums' }}>{s.b}</span>
                      <span style={{ padding: '6px 8px', textAlign: 'right', color: '#334155', fontVariantNumeric: 'tabular-nums' }}>{s.c}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.featureCardBody}>
                <h3 className={styles.featureCardTitle}>Follows your process</h3>
                <p className={styles.featureCardText}>Learns from the checklists and workbooks your team already uses. Nothing about your close has to change.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.featureCard}>
              <div className={styles.featureCardTop} style={{ background: '#0a1f44', gap: '12px' }}>
                <div style={{ padding: '14px', borderRadius: '10px', background: 'rgba(56,189,248,.1)', border: '1px solid rgba(125,211,252,.3)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '.08em', textTransform: 'uppercase', color: '#7dd3fc' }}>Submitted for approval</span>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>AR reconciliation · 1 difference explained</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '12px', color: '#e0f2fe', border: '1px solid rgba(125,211,252,.3)', borderRadius: '9999px', padding: '4px 10px' }}>recon_1200.xlsx</span>
                  <span style={{ fontSize: '12px', color: '#e0f2fe', border: '1px solid rgba(125,211,252,.3)', borderRadius: '9999px', padding: '4px 10px' }}>aging_sep.pdf</span>
                  <span style={{ fontSize: '12px', color: '#e0f2fe', border: '1px solid rgba(125,211,252,.3)', borderRadius: '9999px', padding: '4px 10px' }}>JE-2291</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '9999px', background: '#38bdf8', color: '#0a1f44', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>MK</span>
                  <span style={{ fontSize: '13px', color: '#cbd5e1' }}>Waiting on Controller</span>
                </div>
              </div>
              <div className={styles.featureCardBody}>
                <h3 className={styles.featureCardTitle}>Finishes the job</h3>
                <p className={styles.featureCardText}>Builds the workbook, attaches the support and routes it to the right reviewer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CLOSE */}
      <section id="close" data-screen-label="Close" className={styles.closeSection}>
        <div className={styles.closeContainer}>
          <SectionHeading
            eyebrow="The Close"
            title="Metahubs runs your month-end close."
          />
          {capabilities.map((c, idx) => (
            <div
              key={idx}
              className={styles.capabilityRow}
              style={{ flexDirection: c.dir }}
            >
              <div className={styles.capabilityText}>
                {c.tag && (
                  <span style={{ alignSelf: 'flex-start', fontSize: '12px', fontWeight: 600, color: '#0369a1', background: '#e0f2fe', padding: '4px 10px', borderRadius: '9999px' }}>
                    {c.tag}
                  </span>
                )}
                <h3 className={styles.capabilityTitle}>{c.title}</h3>
                <p className={styles.capabilityBody}>{c.body}</p>
                <ul className={styles.capabilityList}>
                  {c.items.map((it, i) => (
                    <li key={i} className={styles.capabilityItem}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.capabilityVisual}>
                {c.cards.map((k, kidx) => (
                  <div key={kidx} style={{ background: '#fff', border: '1px solid #bae6fd', borderRadius: '12px', padding: '16px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: '#0a1f44' }}>{k.a}</span>
                      <span style={{ fontSize: '12px', color: '#64748b' }}>{k.b}</span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '20px', color: '#0a1f44', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>
                      {k.v}
                    </span>
                  </div>
                ))}
                <div style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 600, color: '#fff', background: '#0a1f44', padding: '8px 12px', borderRadius: '9999px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: '#38bdf8' }} />
                  {c.foot}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="cases" data-screen-label="Case studies" className={styles.caseStudiesSection}>
        <div className={styles.caseStudiesContainer}>
          <SectionHeading
            eyebrow="Case Studies"
            title="From weeks of work to days"
            subtitle="Every figure comes from a real close."
          />
          <div className={styles.caseCardsGrid}>
            {/* Case 1 */}
            <Link href="/impact" className={styles.caseCard}>
              <div style={{ height: '220px', position: 'relative', background: '#0a1f44', padding: '22px', display: 'flex', flexDirection: 'column', gap: '12px', overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#7dd3fc' }}>October close</span>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#0a1f44', background: '#38bdf8', padding: '3px 9px', borderRadius: '9999px' }}>Closed day 2</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: '6px', flex: 1 }}>
                  <span style={{ borderRadius: '6px', background: '#38bdf8', color: '#0a1f44', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</span>
                  <span style={{ borderRadius: '6px', background: '#38bdf8', color: '#0a1f44', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
                  <span style={{ borderRadius: '6px', border: '1px dashed rgba(125,211,252,.35)', color: '#64748b', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'line-through' }}>3</span>
                  <span style={{ borderRadius: '6px', border: '1px dashed rgba(125,211,252,.35)', color: '#64748b', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'line-through' }}>4</span>
                  <span style={{ borderRadius: '6px', border: '1px dashed rgba(125,211,252,.35)', color: '#64748b', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'line-through' }}>5</span>
                  <span style={{ borderRadius: '6px', border: '1px dashed rgba(125,211,252,.35)', color: '#64748b', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'line-through' }}>6</span>
                  <span style={{ borderRadius: '6px', border: '1px dashed rgba(125,211,252,.35)', color: '#64748b', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'line-through' }}>7</span>
                  <span style={{ borderRadius: '6px', border: '1px dashed rgba(125,211,252,.35)', color: '#64748b', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'line-through' }}>8</span>
                  <span style={{ borderRadius: '6px', background: 'rgba(255,255,255,.05)', color: '#94a5ba', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>9</span>
                  <span style={{ borderRadius: '6px', background: 'rgba(255,255,255,.05)', color: '#94a5ba', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>10</span>
                  <span style={{ borderRadius: '6px', background: 'rgba(255,255,255,.05)', color: '#94a5ba', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>11</span>
                  <span style={{ borderRadius: '6px', background: 'rgba(255,255,255,.05)', color: '#94a5ba', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>12</span>
                  <span style={{ borderRadius: '6px', background: 'rgba(255,255,255,.05)', color: '#94a5ba', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>13</span>
                  <span style={{ borderRadius: '6px', background: 'rgba(255,255,255,.05)', color: '#94a5ba', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>14</span>
                </div>
                <span style={{ fontSize: '12px', color: '#cbd5e1' }}>Days 3–8 back to the team</span>
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '28px', letterSpacing: '-0.02em', color: '#0284c7' }}>8 days → 2</span>
                <p style={{ margin: 0, fontSize: 'var(--text-base)', fontWeight: 600, lineHeight: 1.45, color: 'var(--text-heading)', flex: 1 }}>How a biotech controller moved from preparing the close to reviewing it</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', paddingTop: '14px', borderTop: '1px solid var(--border-default)', fontSize: 'var(--text-xs)', color: 'var(--stone-500)' }}>
                  <span>Series B biotech · QuickBooks</span><span style={{ color: '#0284c7', fontWeight: 600 }}>Read →</span>
                </div>
              </div>
            </Link>

            {/* Case 2 */}
            <Link href="/impact" className={styles.caseCard}>
              <div style={{ height: '220px', position: 'relative', background: '#f0f9ff', padding: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px', overflow: 'hidden' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#64748b', background: '#fff', border: '1px solid #dfe7f0', borderRadius: '6px', padding: '6px 10px', textDecoration: 'line-through' }}>po_log.xlsx</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#64748b', background: '#fff', border: '1px solid #dfe7f0', borderRadius: '6px', padding: '6px 10px', textDecoration: 'line-through' }}>invoices_q3.xlsx</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#64748b', background: '#fff', border: '1px solid #dfe7f0', borderRadius: '6px', padding: '6px 10px', textDecoration: 'line-through' }}>approvals.xlsx</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#64748b', background: '#fff', border: '1px solid #dfe7f0', borderRadius: '6px', padding: '6px 10px', textDecoration: 'line-through' }}>pay_run.xlsx</span>
                </div>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
                <div style={{ background: '#0a1f44', borderRadius: '12px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '140px', boxShadow: '0 12px 24px -10px rgba(10,31,68,.5)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#7dd3fc' }}>One trigger</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>PO approved</span>
                  <span style={{ fontSize: '11px', color: '#cbd5e1' }}>Match · code · pay run</span>
                  <span style={{ alignSelf: 'flex-start', fontSize: '11px', fontWeight: 600, color: '#0a1f44', background: '#38bdf8', padding: '3px 9px', borderRadius: '9999px' }}>Automated</span>
                </div>
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '28px', letterSpacing: '-0.02em', color: '#0284c7' }}>4 files → 1</span>
                <p style={{ margin: 0, fontSize: 'var(--text-base)', fontWeight: 600, lineHeight: 1.45, color: 'var(--text-heading)', flex: 1 }}>Replacing a chain of payables spreadsheets with one approval trigger</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', paddingTop: '14px', borderTop: '1px solid var(--border-default)', fontSize: 'var(--text-xs)', color: 'var(--stone-500)' }}>
                  <span>Medical devices · NetSuite</span><span style={{ color: '#0284c7', fontWeight: 600 }}>Read →</span>
                </div>
              </div>
            </Link>

            {/* Case 3 */}
            <Link href="/impact" className={styles.caseCard}>
              <div style={{ height: '220px', position: 'relative', background: '#fff', borderBottom: '1px solid #eef3f8', padding: '22px', display: 'flex', flexDirection: 'column', gap: '12px', overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#64748b' }}>Q3 budget vs actuals</span>
                  <span style={{ display: 'flex', gap: '10px', fontSize: '11px', color: '#64748b' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#bae6fd' }} />Budget</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#0a1f44' }} />Actual</span>
                  </span>
                </div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '14px', paddingBottom: '4px', borderBottom: '1px solid #dfe7f0', position: 'relative' }}>
                  <div style={{ flex: 1, display: 'flex', gap: '4px', alignItems: 'flex-end', height: '100%' }}>
                    <span style={{ flex: 1, height: '62%', background: '#bae6fd', borderRadius: '4px 4px 0 0' }} />
                    <span style={{ flex: 1, height: '70%', background: '#0a1f44', borderRadius: '4px 4px 0 0' }} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', gap: '4px', alignItems: 'flex-end', height: '100%' }}>
                    <span style={{ flex: 1, height: '40%', background: '#bae6fd', borderRadius: '4px 4px 0 0' }} />
                    <span style={{ flex: 1, height: '38%', background: '#0a1f44', borderRadius: '4px 4px 0 0' }} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', gap: '4px', alignItems: 'flex-end', height: '100%' }}>
                    <span style={{ flex: 1, height: '30%', background: '#bae6fd', borderRadius: '4px 4px 0 0' }} />
                    <span style={{ flex: 1, height: '31%', background: '#0a1f44', borderRadius: '4px 4px 0 0' }} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', gap: '4px', alignItems: 'flex-end', height: '100%' }}>
                    <span style={{ flex: 1, height: '72%', background: '#bae6fd', borderRadius: '4px 4px 0 0' }} />
                    <span style={{ flex: 1, height: '88%', background: '#38bdf8', borderRadius: '4px 4px 0 0' }} />
                  </div>
                  <div style={{ position: 'absolute', right: 0, top: 0, maxWidth: '170px', background: '#0a1f44', color: '#fff', borderRadius: '10px', padding: '8px 10px', fontSize: '11px', lineHeight: 1.4, boxShadow: '0 10px 20px -10px rgba(10,31,68,.5)' }}>
                    <span style={{ color: '#38bdf8', fontWeight: 700 }}>Clinical ops +12.6%</span><br />Site activation pulled forward
                  </div>
                </div>
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '28px', letterSpacing: '-0.02em', color: '#0284c7' }}>6 days → 1</span>
                <p style={{ margin: 0, fontSize: 'var(--text-base)', fontWeight: 600, lineHeight: 1.45, color: 'var(--text-heading)', flex: 1 }}>Board-ready variance commentary drafted before the review meeting</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', paddingTop: '14px', borderTop: '1px solid var(--border-default)', fontSize: 'var(--text-xs)', color: 'var(--stone-500)' }}>
                  <span>Public company · NetSuite + Planful</span><span style={{ color: '#0284c7', fontWeight: 600 }}>Read →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" data-screen-label="Pricing" className={styles.pricingSection}>
        <div className={styles.gridPattern} />
        <div className={styles.pricingContainer}>
          <div className={styles.pricingHeaderRow}>
            <div style={{ flex: '1 1 420px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#7dd3fc' }}>Pricing</span>
              <h2 className={styles.pricingTitle}>
                Plans from <span style={{ color: '#38bdf8' }}>$900</span>/month
              </h2>
              <p style={{ margin: 0, maxWidth: '520px', fontSize: 'var(--text-lg)', lineHeight: 1.625, color: '#cbd5e1' }}>
                Tell us which work to hand over. We map it with you and agree on one monthly price for your team.
              </p>
            </div>
            <Button size="lg" href="#contact">
              Book a Demo &rarr;
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: '#e0f2fe' }}>Works with the tools you already run</span>
            <div className={styles.toolsGrid}>
              {tools.map((tl, idx) => (
                <div key={idx} className={styles.toolCard}>
                  <span style={{ width: '30px', height: '30px', borderRadius: '8px', background: '#e0f2fe', color: '#0a1f44', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, flexShrink: 0 }}>
                    {tl.i}
                  </span>
                  <span style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: '#fff' }}>{tl.n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW LIBRARY */}
      <section id="library" data-screen-label="Workflow library" className={styles.librarySection}>
        <div className={styles.libraryContainer}>
          <SectionHeading
            eyebrow="Workflow Library"
            title="What can Metahubs take on?"
          />
          <div className={styles.categoryPillsRow}>
            {catNames.map((cat, idx) => {
              const isActive = cat === activeCat;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveCat(cat)}
                  className={styles.categoryPill}
                  style={{
                    background: isActive ? '#0a1f44' : '#fff',
                    color: isActive ? '#fff' : '#475569',
                    borderColor: isActive ? '#0a1f44' : '#dfe7f0',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
          <div className={styles.libraryGrid}>
            {filteredWorkflows.map((w, idx) => (
              <div key={idx} className={styles.libraryCard}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#0284c7' }}>
                  {w.cat}
                </span>
                <h3 style={{ margin: 0, fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--text-heading)' }}>
                  {w.t}
                </h3>
                <p style={{ margin: 0, fontSize: 'var(--text-sm)', lineHeight: 1.55, color: 'var(--text-muted)' }}>
                  {w.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section id="security" data-screen-label="Security" className={styles.securitySection}>
        <div className={styles.securityContainer}>
          <SectionHeading
            eyebrow="Security"
            title="Ready for the review your compliance team runs"
            subtitle="What we're certified for, what we never do with your data, and what we'll sign."
          />
          <div className={styles.securityGrid}>
            {security.map((sc, idx) => (
              <div key={idx} className={styles.securityCard}>
                <span style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <h3 style={{ margin: 0, fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--text-heading)' }}>{sc.t}</h3>
                <p style={{ margin: 0, fontSize: 'var(--text-sm)', lineHeight: 1.55, color: 'var(--text-muted)' }}>{sc.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" data-screen-label="Contact" className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactLeft}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#7dd3fc' }}>Book a Demo</span>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', textWrap: 'balance' }}>
              Put Metahubs on your first workflow.
            </h2>
            <p style={{ margin: 0, fontSize: 'var(--text-lg)', lineHeight: 1.625, color: '#cbd5e1' }}>
              Walk us through how your team closes today. We&apos;ll show the same work running in your tools and quote a price.
            </p>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginTop: '12px', color: '#cbd5e1', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              <span>5th Floor, Salarpuria Touchstone, Outer Ring Road, Kadubeesanahalli, Bengaluru, Karnataka 560103, India</span>
            </div>
          </div>

          <div className={styles.contactFormCard}>
            {formSent ? (
              <div style={{ padding: '40px 8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ width: '48px', height: '48px', borderRadius: '9999px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '22px', color: 'var(--text-heading)' }}>Thanks, we&apos;ll be in touch.</span>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>Expect a reply within one business day.</span>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className={styles.formGrid}>
                  <label className={styles.label}>
                    Name
                    <input
                      required
                      placeholder="Jane Doe"
                      className={styles.input}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </label>
                  <label className={styles.label}>
                    Work email
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      className={styles.input}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </label>
                  <label className={styles.label}>
                    Company
                    <input
                      placeholder="Optional"
                      className={styles.input}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </label>
                  <label className={styles.label}>
                    Finance team size
                    <input
                      placeholder="Optional"
                      className={styles.input}
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    />
                  </label>
                </div>
                <label className={styles.label}>
                  What would you hand over first?
                  <textarea
                    rows={3}
                    placeholder="e.g. Bank reconciliations and vendor accruals"
                    className={styles.textarea}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </label>
                <Button size="lg" fullWidth type="submit">
                  Book a Demo &rarr;
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0a1f44', borderTop: '1px solid rgba(125,211,252,.14)', padding: '32px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px', flexWrap: 'wrap', fontSize: 'var(--text-sm)', color: '#94a5ba' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span>&copy; 2026 Metahubs, Inc.</span>
            <span style={{ maxWidth: '360px', lineHeight: 1.5 }}>5th Floor, Salarpuria Touchstone, Outer Ring Road, Kadubeesanahalli, Bengaluru, Karnataka 560103, India</span>
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="#" style={{ color: '#94a5ba' }}>Privacy Policy</Link>
            <Link href="#" style={{ color: '#94a5ba' }}>Careers</Link>
            <Link href="#" style={{ color: '#94a5ba' }}>LinkedIn</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
