'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../Button/Button';
import Badge from '../Badge/Badge';
import BrowserFrame from '../BrowserFrame/BrowserFrame';
import SectionHeading from '../SectionHeading/SectionHeading';
import SegmentedTabs from '../SegmentedTabs/SegmentedTabs';
import PricingCard from '../PricingCard/PricingCard';
import Accordion from '../Accordion/Accordion';
import styles from './MetahubsHomeV1Page.module.css';

export default function MetahubsHomeV1Page() {
  const [currentWf, setCurrentWf] = useState('close');
  const [approvedWf, setApprovedWf] = useState<Record<string, boolean>>({});

  const done = { bg: 'var(--emerald-50)', fg: 'var(--emerald-600)' };
  const review = { bg: 'var(--amber-50)', fg: 'var(--amber-600)' };
  const run = { bg: 'var(--brand-50)', fg: 'var(--brand-600)' };

  const closeTasks = [
    { task: 'Bank and card feeds imported', meta: 'Close employee · 6 accounts', status: 'Done', ...done },
    { task: 'Operating cash reconciled', meta: 'Recon employee · 0 differences', status: 'Done', ...done },
    { task: 'CRO accrual drafted — $186,000', meta: 'Accruals employee · linked to contract', status: 'Review', ...review },
    { task: 'AR reconciliation', meta: 'Recon employee · 1 difference found', status: 'Review', ...review },
    { task: 'Q3 variance commentary', meta: 'FP&A employee · drafting', status: 'Running', ...run },
    { task: 'Period lock', meta: 'Waiting on controller sign-off', status: 'Queued', bg: 'var(--stone-100)', fg: 'var(--stone-500)' },
  ];

  const systems = ['NetSuite', 'QuickBooks', 'Xero', 'Sage Intacct', 'Coupa', 'Bill.com', 'Ramp', 'Brex', 'Excel', 'Planful'];
  const systemsLoop = [...systems, ...systems];

  const principles = [
    { n: '01', title: 'Works in your stack', body: 'Metahubs logs into NetSuite, QuickBooks, your bank portals and shared drives. No migration, no new ledger.' },
    { n: '02', title: 'Follows your process', body: 'We build each workflow from your existing checklist, templates and thresholds, so the output looks like your team made it.' },
    { n: '03', title: 'You approve everything', body: 'Entries, schedules and commentary arrive as drafts with full support. Nothing posts without a named reviewer.' },
  ];

  const workflows: Record<string, any> = {
    close: {
      label: 'Month-End Close',
      kicker: 'Month-end close',
      title: 'A close checklist that works itself down',
      body: 'The close employee pulls bank and card activity, checks cut-off, posts recurring entries and prepares the period for lock once your controller signs off.',
      steps: [
        'Imports bank and card activity for the period',
        'Flags bills and invoices booked in the wrong month',
        'Posts recurring and reversing entries as drafts',
        "Carries unresolved items into next month's list",
      ],
      file: 'close_checklist_sep26.xlsx',
      cols: ['Task', 'Owner', 'Due'],
      rows: [
        ['Bank feeds imported', 'Metahubs', 'Day 1'],
        ['Cut-off review', 'Metahubs', 'Day 1'],
        ['Recurring JEs drafted', 'Metahubs', 'Day 2'],
        ['Flux review', 'Controller', 'Day 2'],
        ['Period lock', 'Controller', 'Day 3'],
      ],
      note: '3 of 5 tasks ready for sign-off',
    },
    recon: {
      label: 'Reconciliation',
      kicker: 'Account reconciliation',
      title: 'Every balance tied out, every difference explained',
      body: 'The reconciliation employee matches ledger balances to source statements, investigates breaks and writes the workpaper your auditor will ask for.',
      steps: [
        'Matches GL balances to bank, card and subledgers',
        'Investigates unmatched items and proposes fixes',
        'Prepares supporting workpapers with source links',
        'Routes exceptions to the right reviewer',
      ],
      file: 'recon_1010_operating_cash.xlsx',
      cols: ['Account', 'GL', 'Statement'],
      rows: [
        ['1010 Operating cash', '$482,190', '$482,190'],
        ['1020 Payroll cash', '$64,300', '$64,300'],
        ['1200 Accounts receivable', '$1,208,450', '$1,211,950'],
        ['2010 Credit card', '($38,712)', '($38,712)'],
        ['2100 Accrued liabilities', '($210,400)', '($210,400)'],
      ],
      note: '1 difference of $3,500 explained',
    },
    accruals: {
      label: 'Accruals',
      kicker: 'Accruals and prepaids',
      title: 'Expenses in the month they belong',
      body: 'The accruals employee reviews open POs, contracts and vendor activity, then drafts accrual and amortization schedules for your approval.',
      steps: [
        'Reviews open POs and unbilled vendor work',
        'Builds prepaid and amortization schedules',
        'Drafts accrual entries with reversal dates',
        'Links every estimate to its source document',
      ],
      file: 'accruals_sep26.xlsx',
      cols: ['Vendor', 'Estimate', 'Basis'],
      rows: [
        ['CRO — Study 204', '$186,000', 'Contract'],
        ['Legal counsel', '$42,500', 'Invoice lag'],
        ['Cloud hosting', '$18,240', 'Usage'],
        ['Consultants', '$27,000', 'Timesheets'],
        ['Insurance prepaid', '$9,833', 'Schedule'],
      ],
      note: '5 entries drafted, reversing Oct 1',
    },
    ap: {
      label: 'Payables',
      kicker: 'Accounts payable',
      title: 'From inbox to approved bill in one pass',
      body: 'The payables employee reads incoming invoices, codes them, matches them to POs and chases approvals so bills are ready for the next pay run.',
      steps: [
        'Extracts and codes invoices from the AP inbox',
        'Runs two- and three-way PO matching',
        'Chases approvers by email and Slack',
        'Prepares the pay run for final release',
      ],
      file: 'ap_queue_week39.xlsx',
      cols: ['Vendor', 'Amount', 'Match'],
      rows: [
        ['Fisher Scientific', '$12,480', '3-way'],
        ['AWS', '$18,240', 'PO'],
        ['WeWork', '$9,600', 'Contract'],
        ['Deloitte', '$24,000', 'Needs PO'],
        ['Gusto', '$1,140', 'Auto'],
      ],
      note: '4 of 5 bills ready for pay run',
    },
    fpa: {
      label: 'FP&A',
      kicker: 'FP&A commentary',
      title: 'Variance commentary written before the meeting',
      body: 'The FP&A employee compares actuals to budget and forecast, finds the drivers and drafts the commentary your CFO would otherwise write at midnight.',
      steps: [
        'Pulls actuals, budget and forecast by department',
        'Flags variances above your thresholds',
        'Traces drivers to transactions and vendors',
        'Drafts board-ready commentary for edit',
      ],
      file: 'bva_q3_2026.xlsx',
      cols: ['Line', 'Actual', 'vs Budget'],
      rows: [
        ['R&D', '$4.21M', '+8.4%'],
        ['G&A', '$1.12M', '−2.1%'],
        ['Sales & marketing', '$0.86M', '+1.3%'],
        ['Clinical ops', '$2.74M', '+12.6%'],
        ['Total opex', '$8.93M', '+6.2%'],
      ],
      note: '2 variances over threshold explained',
    },
  };

  const activeWorkflow = workflows[currentWf];
  const wfTabs = Object.entries(workflows).map(([id, w]) => ({ id, label: w.label }));

  const process = [
    { n: '01', title: 'Map the work', body: 'A 30-minute call to walk through your close checklist and pick the first workflow.' },
    { n: '02', title: 'Connect systems', body: 'Read-only access to start. Write access only where you approve it.' },
    { n: '03', title: 'Parallel run', body: 'Metahubs runs alongside your team for one close so you can compare output.' },
    { n: '04', title: 'Hand it over', body: 'Your team moves from preparing to reviewing. Add workflows when ready.' },
  ];

  const cases = [
    { metric: '2 days', metricLabel: 'Month-end close, down from 8', title: 'How a clinical-stage biotech moved its controller from preparing to reviewing', meta: 'Series B biotech · QuickBooks' },
    { metric: '1 file', metricLabel: 'Procure-to-pay, down from 4', title: 'Replacing a chain of AP spreadsheets with a single approval trigger', meta: 'Medical devices · NetSuite' },
    { metric: '6 days', metricLabel: 'Saved on budget vs actuals each quarter', title: 'Board-ready variance commentary drafted before the review meeting', meta: 'Public company · NetSuite + Planful' },
  ];

  const certs = ['SOC 2 Type II', 'AES-256 at rest', 'TLS 1.3', 'SSO / SAML'];

  const security = [
    { title: 'Least-privilege access', body: 'Start read-only. Write permissions are scoped per system and per workflow.' },
    { title: 'Full audit trail', body: 'Every action is logged with the source document, the employee that did it and the human who approved it.' },
    { title: 'No training on your data', body: 'Your financial data is never used to train models or shared across customers.' },
    { title: 'Segregation of duties', body: 'Preparer and approver roles stay separate, matching your internal controls.' },
  ];

  const founders = [
    { initial: 'A', name: 'Founder name', role: 'Co-founder & CEO', bio: 'Former controller who built and sold an accounting platform used by thousands of small businesses.' },
    { initial: 'B', name: 'Founder name', role: 'Co-founder & CTO', bio: 'Built financial data infrastructure at a market-data company and led engineering at a trading platform.' },
    { initial: 'C', name: 'Advisor name', role: 'Advisor, former public-company CFO', bio: 'Two decades running finance and audit readiness at publicly traded life-sciences companies.' },
  ];

  const p1 = ['NetSuite, QuickBooks or Xero connection', 'Month-end close workflow', 'Bank and card reconciliations', 'Weekly check-in with your finance lead'];
  const p2 = ['Everything in Foundation', 'Balance sheet reconciliations', 'Accruals and prepaids', 'Accounts payable and approvals', 'Slack approval routing'];
  const p3 = ['Everything in Growth', 'Multi-entity consolidation', 'FP&A commentary', 'SOX-ready controls documentation', 'Dedicated implementation lead'];

  const faq = [
    { id: 0, question: 'What is an AI employee?', answer: 'A Metahubs employee is an agent trained on one finance workflow, such as reconciliations or payables. It works in your systems, follows your checklist, and hands its work to a person for approval.' },
    { id: 1, question: 'Do we need to change our ERP or process?', answer: 'No. Metahubs works inside the systems and templates you already use. We build each workflow from your existing close checklist.' },
    { id: 2, question: 'Can anything post without approval?', answer: 'Not unless you allow it. By default every entry, schedule and payment is a draft until a named reviewer approves it.' },
    { id: 3, question: 'How long does onboarding take?', answer: 'Most teams run their first workflow in parallel within two to three weeks, then hand it over after one successful close.' },
    { id: 4, question: 'How is pricing set?', answer: 'You pay a fixed monthly price based on the workflows you use. We agree it up front and you can add or remove workflows any month.' },
  ];

  return (
    <div className={styles.page}>
      {/* Top Announcement Bar */}
      <div className={styles.announcementBar}>
        <span>Case study: how a Series B team closed the month in 2 days.</span>
        <a href="#cases" className={styles.announcementLink}>Read it &rarr;</a>
      </div>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logoLink}>
            <span className={styles.logoSquare}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 19V5l14 14V5" />
              </svg>
            </span>
            <span className={styles.logoText}>Metahubs</span>
          </Link>
          <nav className={styles.nav}>
            <a href="#workflows" className={styles.navLink}>Workflows</a>
            <a href="#cases" className={styles.navLink}>Customers</a>
            <a href="#security" className={styles.navLink}>Security</a>
            <a href="#pricing" className={styles.navLink}>Pricing</a>
            <a href="#about" className={styles.navLink}>About</a>
          </nav>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Button variant="ghost" size="sm" href="#">Sign In</Button>
            <Button size="sm" href="#demo">Book a Demo</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section data-screen-label="Hero" className={styles.heroSection}>
        <div className={styles.heroDots} />
        <div className={styles.heroInner}>
          <div className={styles.heroTextCol}>
            <Badge tone="brand">AI employees for finance teams</Badge>
            <h1 className={styles.heroTitle}>Your books, closed. Your team, signing off.</h1>
            <p className={styles.heroDesc}>
              Metahubs&apos;s AI employees prepare the close, reconcile accounts, process payables and draft variance commentary inside the tools you already use. Every entry waits for a human approval.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button size="lg" href="#demo">Book a Demo</Button>
              <Button size="lg" variant="outline" href="#workflows">See Workflows</Button>
            </div>
            <div className={styles.heroProof}>
              <span>Works in NetSuite, QuickBooks and Excel</span>
              <span>SOC 2 Type II</span>
            </div>
          </div>

          <BrowserFrame url="app.metahubs.ai/close/sep-2026">
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--stone-500)' }}>September close</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '22px', color: 'var(--text-heading)' }}>Day 2 of 3</span>
                </div>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 'var(--text-xs)', color: 'var(--emerald-600)', fontWeight: 600 }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '9999px', background: 'var(--green-400)', animation: 'nb-pulse 2s ease-in-out infinite' }} />
                  4 employees working
                </span>
              </div>
              <div style={{ height: '8px', borderRadius: '9999px', background: 'var(--stone-100)', overflow: 'hidden' }}>
                <div style={{ width: '68%', height: '100%', background: 'var(--brand-500)', borderRadius: '9999px' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {closeTasks.map((t, idx) => (
                  <div key={idx} style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', gap: '12px', padding: '11px 0', borderBottom: '1px solid var(--border-subtle)', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-heading)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.task}</span>
                      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--stone-500)' }}>{t.meta}</span>
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '9999px', background: t.bg, color: t.fg, whiteSpace: 'nowrap' }}>{t.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </BrowserFrame>
        </div>
      </section>

      {/* Systems Strip */}
      <section className={styles.marqueeSection}>
        <div className={styles.marqueeLabel}>Works inside 80+ finance systems</div>
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {systemsLoop.map((s, idx) => (
              <span key={idx} className={styles.marqueeItem}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section data-screen-label="Principles" className={styles.sectionBlock} style={{ background: 'var(--surface-card)' }}>
        <div className={styles.sectionContainer}>
          <SectionHeading
            eyebrow="How We Work"
            title="Hire the work, keep the judgment"
            subtitle="Metahubs takes the repetitive hours out of finance operations. Your controllers stay in charge of every number."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: '24px' }}>
            {principles.map((p, idx) => (
              <div key={idx} style={{ border: '1px solid var(--border-default)', borderRadius: '12px', background: 'var(--surface-card)', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '.1em', color: 'var(--brand-500)' }}>{p.n}</span>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '24px', letterSpacing: '-0.02em', color: 'var(--text-heading)' }}>{p.title}</h3>
                <p style={{ margin: 0, fontSize: 'var(--text-sm)', lineHeight: 1.625, color: 'var(--text-muted)' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflows (Tabs) */}
      <section id="workflows" data-screen-label="Workflows" className={styles.sectionBlock} style={{ background: 'var(--surface-page)' }}>
        <div className={styles.sectionContainer} style={{ gap: '40px' }}>
          <SectionHeading
            eyebrow="Workflows"
            title="One employee per job on your close checklist"
            subtitle="Start with one workflow. Add more as your team trusts the output."
          />
          <div style={{ display: 'flex', justifyContent: 'center', overflowX: 'auto', paddingBottom: '4px' }}>
            <SegmentedTabs
              tabs={wfTabs}
              value={currentWf}
              onChange={setCurrentWf}
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: '24px', alignItems: 'stretch' }}>
            <div style={{ border: '1px solid var(--border-default)', borderRadius: '12px', background: 'var(--surface-card)', padding: '36px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--brand-500)' }}>{activeWorkflow.kicker}</span>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(1.6rem,2.6vw,2rem)', lineHeight: 1.2, letterSpacing: '-0.02em', color: 'var(--text-heading)', textWrap: 'balance' }}>{activeWorkflow.title}</h3>
              <p style={{ margin: 0, fontSize: 'var(--text-base)', lineHeight: 1.625, color: 'var(--text-muted)' }}>{activeWorkflow.body}</p>
              <ul style={{ margin: 0, padding: '20px 0 0', listStyle: 'none', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {activeWorkflow.steps.map((st: string, sidx: number) => (
                  <li key={sidx} style={{ display: 'flex', gap: '10px', fontSize: 'var(--text-sm)', color: 'var(--stone-600)', lineHeight: 1.5 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {st}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ border: '1px solid var(--border-default)', borderRadius: '12px', background: 'var(--surface-card)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border-default)', background: 'var(--stone-50)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--stone-600)' }}>{activeWorkflow.file}</span>
                <Badge tone="amber">Awaiting approval</Badge>
              </div>
              <div style={{ padding: '8px 20px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.6fr) minmax(0,1fr) minmax(0,1fr)', gap: '12px', padding: '12px 0', borderBottom: '1px solid var(--border-default)', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--stone-400)' }}>
                  <span>{activeWorkflow.cols[0]}</span><span style={{ textAlign: 'right' }}>{activeWorkflow.cols[1]}</span><span style={{ textAlign: 'right' }}>{activeWorkflow.cols[2]}</span>
                </div>
                {activeWorkflow.rows.map((r: string[], ridx: number) => (
                  <div key={ridx} style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.6fr) minmax(0,1fr) minmax(0,1fr)', gap: '12px', padding: '12px 0', borderBottom: '1px solid var(--border-subtle)', fontSize: 'var(--text-sm)', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-heading)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r[0]}</span>
                    <span style={{ textAlign: 'right', color: 'var(--stone-600)', fontVariantNumeric: 'tabular-nums' }}>{r[1]}</span>
                    <span style={{ textAlign: 'right', color: 'var(--stone-600)', fontVariantNumeric: 'tabular-nums' }}>{r[2]}</span>
                  </div>
                ))}
                <div style={{ marginTop: 'auto', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--stone-500)' }}>{activeWorkflow.note}</span>
                  <Button
                    size="sm"
                    onClick={() => setApprovedWf({ ...approvedWf, [currentWf]: true })}
                  >
                    {approvedWf[currentWf] ? 'Approved' : 'Approve'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section data-screen-label="Process" className={styles.sectionBlock} style={{ background: 'var(--surface-card)' }}>
        <div className={styles.sectionContainer}>
          <SectionHeading
            eyebrow="Getting Started"
            title="Live in weeks, built around your checklist"
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))', border: '1px solid var(--border-default)', borderRadius: '12px', background: 'var(--surface-card)', overflow: 'hidden' }}>
            {process.map((st, idx) => (
              <div key={idx} style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '12px', borderRight: '1px solid var(--border-default)', marginRight: '-1px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '.1em', color: 'var(--brand-500)' }}>{st.n}</span>
                <h3 style={{ margin: 0, fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-heading)' }}>{st.title}</h3>
                <p style={{ margin: 0, fontSize: 'var(--text-sm)', lineHeight: 1.625, color: 'var(--text-muted)' }}>{st.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="cases" data-screen-label="Case studies" className={styles.sectionBlock} style={{ background: 'var(--surface-page)' }}>
        <div className={styles.sectionContainer}>
          <SectionHeading
            eyebrow="Customers"
            title="Finance teams that got their week back"
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: '24px' }}>
            {cases.map((c, idx) => (
              <a key={idx} href="#" style={{ border: '1px solid var(--border-default)', borderRadius: '12px', background: 'var(--surface-card)', padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px', color: 'inherit', textDecoration: 'none' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '40px', letterSpacing: '-0.02em', color: 'var(--text-heading)' }}>{c.metric}</span>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{c.metricLabel}</span>
                </div>
                <p style={{ margin: 0, fontSize: 'var(--text-base)', lineHeight: 1.5, color: 'var(--text-heading)', fontWeight: 500, flex: 1 }}>{c.title}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--border-default)' }}>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--stone-500)' }}>{c.meta}</span>
                  <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--brand-500)', whiteSpace: 'nowrap' }}>Read &rarr;</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" data-screen-label="Security" className={styles.sectionBlock} style={{ background: 'var(--surface-card)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))', gap: '56px', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <SectionHeading
              align="left"
              eyebrow="Security"
              title="Built for the audit, not just the demo"
              subtitle="Controls your compliance team and auditors can review line by line."
            />
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {certs.map((ce, idx) => (
                <span key={idx} style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '.06em', color: 'var(--stone-700)', border: '1px solid var(--border-strong)', borderRadius: '9999px', padding: '6px 12px' }}>{ce}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))', gap: '16px' }}>
            {security.map((sc, idx) => (
              <div key={idx} style={{ border: '1px solid var(--border-default)', borderRadius: '12px', background: 'var(--stone-50)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h3 style={{ margin: 0, fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--text-heading)' }}>{sc.title}</h3>
                <p style={{ margin: 0, fontSize: 'var(--text-sm)', lineHeight: 1.625, color: 'var(--text-muted)' }}>{sc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders / Team */}
      <section id="about" data-screen-label="Founders" className={styles.sectionBlock} style={{ background: 'var(--surface-page)' }}>
        <div className={styles.sectionContainer}>
          <SectionHeading
            eyebrow="The Team"
            title="Built by people who have closed the books"
            subtitle="Former controllers, auditors and ERP engineers, advised by public-company CFOs."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: '24px' }}>
            {founders.map((f, idx) => (
              <div key={idx} style={{ border: '1px solid var(--border-default)', borderRadius: '12px', background: 'var(--surface-card)', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{ width: '48px', height: '48px', borderRadius: '9999px', background: 'var(--brand-100)', color: 'var(--brand-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{f.initial}</span>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--text-heading)' }}>{f.name}</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{f.role}</span>
                  </div>
                </div>
                <p style={{ margin: 0, fontSize: 'var(--text-sm)', lineHeight: 1.625, color: 'var(--stone-600)' }}>{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" data-screen-label="Pricing" className={styles.sectionBlock} style={{ background: 'var(--surface-card)' }}>
        <div className={styles.sectionContainer}>
          <SectionHeading
            eyebrow="Pricing"
            title="Pay for the workflows you use"
            subtitle="One monthly price, agreed up front. Add or remove workflows any month."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: '24px', alignItems: 'stretch' }}>
            <PricingCard name="Foundation" description="Integrations plus month-end close." price="$900" unit="/ month" features={p1} cta="Book a Demo" href="#demo" />
            <PricingCard name="Growth" description="Close, reconciliations and payables." price="$2,400" unit="/ month" features={p2} cta="Book a Demo" href="#demo" popular={true} />
            <PricingCard name="Enterprise" description="Multi-entity, public-company ready." price="Custom" unit="" features={p3} cta="Talk to Sales" href="#demo" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" data-screen-label="FAQ" className={styles.sectionBlock} style={{ background: 'var(--surface-page)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 300px', minWidth: 0 }}>
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Questions from controllers"
              subtitle="Anything else? A finance lead replies within one business day."
            />
          </div>
          <div style={{ flex: '2 1 460px', minWidth: 0 }}>
            <Accordion items={faq} defaultOpen={[0]} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="demo" style={{ position: 'relative', overflow: 'hidden', background: 'var(--stone-900)', padding: '112px 24px' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--stone-700) 1px,transparent 1px),linear-gradient(90deg,var(--stone-700) 1px,transparent 1px)', backgroundSize: '48px 48px', opacity: 0.1, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', textAlign: 'center' }}>
          <SectionHeading
            inverse={true}
            eyebrow="Book a Demo"
            title="Tell us what you close every month"
            subtitle="We'll map the work in a 30-minute call and quote a monthly price for your team."
          />
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button size="lg" href="#">Book a Demo</Button>
            <Button size="lg" variant="inverse" href="#security">Review Security</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--stone-900)', borderTop: '1px solid var(--stone-800)', padding: '40px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px', flexWrap: 'wrap', fontSize: 'var(--text-sm)', color: 'var(--stone-400)' }}>
          <span>&copy; 2026 Metahubs, Inc.</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '9999px', background: 'var(--green-400)', animation: 'nb-pulse 2s ease-in-out infinite' }} />
            All systems operational
          </span>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="#security" style={{ color: 'var(--stone-400)' }}>Security</a>
            <a href="#" style={{ color: 'var(--stone-400)' }}>Blog</a>
            <a href="#" style={{ color: 'var(--stone-400)' }}>Privacy</a>
            <a href="#" style={{ color: 'var(--stone-400)' }}>Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
