'use client';

import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Button from '../Button/Button';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './ProductPage.module.css';

export default function ProductPage() {
  const [approved, setApproved] = useState(false);

  const steps = [
    { n: '01', t: 'Map the work', d: 'Walk us through your close checklist, workbooks and approval rules on a call.', time: 'Week 1' },
    { n: '02', t: 'Connect systems', d: 'Grant read-only access to your ERP, banks and shared drives.', time: 'Week 1' },
    { n: '03', t: 'Parallel close', d: 'Metahubs runs one close alongside your team so you can compare every output.', time: 'Weeks 2–4' },
    { n: '04', t: 'Hand it over', d: 'Your team moves from preparing to reviewing. Add workflows when ready.', time: 'Month 2' },
  ];

  const employees = [
    { t: 'Close', cadence: 'Monthly', d: 'Runs the close checklist, imports feeds, checks cut-off and prepares the period for lock.', in: 'ERP, bank feeds', out: 'Checklist, JEs' },
    { t: 'Reconciliation', cadence: 'Monthly', d: 'Ties every balance to its source, investigates breaks and writes the workpaper.', in: 'GL, statements', out: 'Recon workpapers' },
    { t: 'Accruals', cadence: 'Monthly', d: 'Estimates unbilled work, maintains prepaid schedules and drafts reversing entries.', in: 'POs, contracts', out: 'Schedules, JEs' },
    { t: 'Payables', cadence: 'Daily', d: 'Codes invoices, matches POs, chases approvers and prepares the pay run.', in: 'AP inbox, POs', out: 'Approved bills' },
    { t: 'Consolidation', cadence: 'Monthly', d: 'Eliminates intercompany activity and translates entity results into one set of books.', in: 'Entity TBs', out: 'Consolidated TB' },
    { t: 'Reporting', cadence: 'Monthly', d: 'Explains movements, drafts variance commentary and assembles the reporting pack.', in: 'Actuals, budget', out: 'Flux, board pack' },
  ];

  const reviewPoints = [
    'Nothing posts without a named approver',
    'Every number links to its source document',
    'Preparer and approver roles stay separate',
    'Comments teach the employee for next month',
  ];

  const trail = [
    { who: 'NB', what: 'Drafted accrual of $186,000 from Study 204 contract', when: 'Sep 30, 9:12 AM', bg: '#0a1f44', fg: '#38bdf8' },
    { who: 'NB', what: 'Attached contract, SOW and site activity report', when: 'Sep 30, 9:13 AM', bg: '#0a1f44', fg: '#38bdf8' },
    { who: 'JL', what: 'Reviewed by Senior Accountant', when: 'Sep 30, 2:40 PM', bg: '#e0f2fe', fg: '#0369a1' },
    {
      who: 'MK',
      what: approved ? 'Approved by Controller' : 'Waiting on Controller',
      when: approved ? 'Just now' : 'Assigned',
      bg: approved ? '#ecfdf5' : '#fffbeb',
      fg: approved ? '#059669' : '#d97706',
    },
  ];

  const t = (arr: string[]) => arr.map((n: string) => ({ n, i: n[0] }));
  const groups = [
    { label: 'ERP & ledger', tools: t(['NetSuite', 'QuickBooks', 'Xero', 'Sage Intacct']) },
    { label: 'Spend & AP', tools: t(['Coupa', 'Bill.com', 'Ramp', 'Brex']) },
    { label: 'Payroll & equity', tools: t(['Rippling', 'Gusto', 'ADP', 'Carta']) },
    { label: 'Files & comms', tools: t(['Excel', 'Google Sheets', 'Slack', 'Microsoft Teams']) },
  ];

  return (
    <div className={styles.page}>
      <Header active="product" />

      {/* HERO */}
      <section data-screen-label="Product hero" className={styles.heroSection}>
        <div className={styles.gridPattern} />
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Product</span>
          <h1 className={styles.heroTitle}>
            AI employees that do the work your close checklist{' '}
            <span className={styles.heroHighlight}>already describes.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Each Metahubs employee owns one part of your finance operation. It logs into your systems, follows your templates, and submits finished work for approval.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section data-screen-label="How it works" className={styles.howSection}>
        <div className={styles.sectionContainer}>
          <SectionHeading
            eyebrow="How It Works"
            title="From your first call to a handed-off close"
          />
          <div className={styles.stepsGrid}>
            {steps.map((s, idx) => (
              <div key={idx} className={styles.stepCard}>
                <span className={styles.stepNum}>{s.n}</span>
                <h3 className={styles.stepTitle}>{s.t}</h3>
                <p className={styles.stepDesc}>{s.d}</p>
                <span className={styles.stepTime}>{s.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMPLOYEES */}
      <section data-screen-label="Employees" className={styles.employeesSection}>
        <div className={styles.sectionContainer}>
          <SectionHeading
            eyebrow="The Team"
            title="Six employees, one finance function"
            subtitle="Hire one to start. Add the rest as your team gets comfortable reviewing their work."
          />
          <div className={styles.employeesGrid}>
            {employees.map((e, idx) => (
              <div key={idx} className={styles.employeeCard}>
                <div className={styles.employeeHeader}>
                  <h3 className={styles.employeeName}>{e.t}</h3>
                  <span className={styles.cadencePill}>{e.cadence}</span>
                </div>
                <p className={styles.employeeDesc}>{e.d}</p>
                <div className={styles.employeeIoGrid}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span className={styles.ioLabel}>Reads</span>
                    <span className={styles.ioValue}>{e.in}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span className={styles.ioLabel}>Delivers</span>
                    <span className={styles.ioValue}>{e.out}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEW */}
      <section data-screen-label="Review" className={styles.reviewSection}>
        <div className={styles.reviewRow}>
          <div className={styles.reviewLeft}>
            <SectionHeading
              align="left"
              eyebrow="Review And Approval"
              title="Your team signs off. Every time."
              subtitle="Work arrives as a draft with its support attached. Reviewers approve, send back with a comment, or edit in place."
            />
            <ul className={styles.reviewList}>
              {reviewPoints.map((r, idx) => (
                <li key={idx} className={styles.reviewItem}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.reviewCheckIcon}
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.reviewRightBox}>
            <div className={styles.reviewCard}>
              <div className={styles.reviewCardHeader}>
                <span className={styles.reviewCardTitle}>JE-2291 · CRO accrual</span>
                <span className={styles.reviewCardBadge}>Awaiting approval</span>
              </div>
              <div className={styles.trailList}>
                {trail.map((tItem, idx) => (
                  <div key={idx} className={styles.trailItem}>
                    <span
                      className={styles.trailAvatar}
                      style={{ background: tItem.bg, color: tItem.fg }}
                    >
                      {tItem.who}
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span className={styles.trailWhat}>{tItem.what}</span>
                      <span className={styles.trailWhen}>{tItem.when}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.reviewActions}>
                <Button size="sm" onClick={() => setApproved(true)}>
                  {approved ? 'Approved' : 'Approve'}
                </Button>
                <Button size="sm" variant="outline">
                  Send Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section data-screen-label="Integrations" className={styles.integrationsSection}>
        <div className={styles.sectionContainer}>
          <SectionHeading
            eyebrow="Integrations"
            title="Works with the stack you already run"
            subtitle="Read-only to start. Write access only where you grant it."
          />
          {groups.map((g, idx) => (
            <div key={idx} className={styles.integrationRow}>
              <span className={styles.integrationCategory}>{g.label}</span>
              <div className={styles.integrationTools}>
                {g.tools.map((tool: { n: string; i: string }, tidx: number) => (
                  <span key={tidx} className={styles.toolPill}>
                    <span className={styles.toolInitial}>{tool.i}</span>
                    {tool.n}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
