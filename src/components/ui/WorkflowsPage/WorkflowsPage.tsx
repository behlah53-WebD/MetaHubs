'use client';

import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './WorkflowsPage.module.css';

export default function WorkflowsPage() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const rawWorkflows = [
    { cat: 'Prep & Cutoff', t: 'Bank and card feeds', d: "Brings the period's bank and card activity into your ledger.", f: 'Monthly', o: 'Imported transactions' },
    { cat: 'Prep & Cutoff', t: 'AP and AR cutoff', d: 'Checks bills and invoices are booked to the correct period.', f: 'Monthly', o: 'Cutoff exceptions list' },
    { cat: 'Prep & Cutoff', t: 'Period lock', d: 'Tracks sign-offs and readies the period to lock.', f: 'Monthly', o: 'Signed-off checklist' },
    { cat: 'Prep & Cutoff', t: 'Open items follow-up', d: 'Chases unresolved items carried from the last close.', f: 'Monthly', o: 'Open items tracker' },
    { cat: 'Reconciliations', t: 'Bank and card recs', d: 'Ties statements to the ledger and explains every break.', f: 'Monthly', o: 'Recon workpaper' },
    { cat: 'Reconciliations', t: 'Balance sheet recs', d: 'Supports each balance with schedules and source documents.', f: 'Monthly', o: 'Recon workpapers' },
    { cat: 'Reconciliations', t: 'Payroll clearing', d: 'Reconciles payroll postings to payments and flags leftovers.', f: 'Per payroll', o: 'Clearing recon' },
    { cat: 'Reconciliations', t: 'Intercompany recs', d: 'Matches balances across entities and chases mismatches.', f: 'Monthly', o: 'IC matching report' },
    { cat: 'Revenue', t: 'Revenue recognition', d: 'Builds schedules and entries under your ASC 606 policy.', f: 'Monthly', o: 'Rev schedule, JEs' },
    { cat: 'Revenue', t: 'Deferred revenue', d: 'Rolls forward deferrals and tracks unbilled revenue.', f: 'Monthly', o: 'Roll-forward' },
    { cat: 'Revenue', t: 'AR aging and reserves', d: 'Reviews overdue balances and proposes reserves.', f: 'Monthly', o: 'Aging, reserve JE' },
    { cat: 'Expenses', t: 'Vendor and CRO accruals', d: 'Estimates work performed but not yet invoiced.', f: 'Monthly', o: 'Accrual schedule, JEs' },
    { cat: 'Expenses', t: 'Payroll and bonus accruals', d: 'Accrues earned wages, bonus and employee expenses.', f: 'Monthly', o: 'Accrual JEs' },
    { cat: 'Expenses', t: 'Invoice coding and matching', d: 'Codes invoices and runs two- and three-way PO matching.', f: 'Daily', o: 'Approved bills' },
    { cat: 'Expenses', t: 'AP aging review', d: 'Flags stale, duplicate or unusual payables.', f: 'Weekly', o: 'Exceptions list' },
    { cat: 'Schedules', t: 'Prepaids', d: 'Keeps prepaid schedules current and drafts monthly expense.', f: 'Monthly', o: 'Amortization schedule' },
    { cat: 'Schedules', t: 'Fixed assets and leases', d: 'Maintains depreciation and ASC 842 lease schedules.', f: 'Monthly', o: 'FA and lease schedules' },
    { cat: 'Schedules', t: 'Stock compensation', d: 'Rolls forward ASC 718 expense and drafts entries.', f: 'Monthly', o: 'SBC schedule, JEs' },
    { cat: 'Schedules', t: 'Debt and interest', d: 'Updates debt schedules and accrues interest.', f: 'Monthly', o: 'Debt schedule' },
    { cat: 'Consolidation', t: 'Eliminations', d: 'Removes intercompany activity from group results.', f: 'Monthly', o: 'Elimination JEs' },
    { cat: 'Consolidation', t: 'FX translation', d: 'Revalues and translates entity results for consolidation.', f: 'Monthly', o: 'FX schedule' },
    { cat: 'Consolidation', t: 'Consolidated trial balance', d: 'Combines entity TBs with consolidation adjustments.', f: 'Monthly', o: 'Consolidated TB' },
    { cat: 'Reporting', t: 'Flux commentary', d: 'Explains movements in the numbers in plain language.', f: 'Monthly', o: 'Flux analysis' },
    { cat: 'Reporting', t: 'Budget vs actuals', d: 'Compares results to plan and traces the drivers.', f: 'Monthly', o: 'BvA pack' },
    { cat: 'Reporting', t: 'Board packs and PBC lists', d: 'Assembles board reporting and auditor requests.', f: 'Quarterly', o: 'Board pack, PBC' },
  ];

  const categoryNames = ['All', 'Prep & Cutoff', 'Reconciliations', 'Revenue', 'Expenses', 'Schedules', 'Consolidation', 'Reporting'];

  const q = searchQuery.trim().toLowerCase();
  const matchedWorkflows = rawWorkflows.filter(
    (w) => !q || (w.t + ' ' + w.d + ' ' + w.cat).toLowerCase().includes(q)
  );

  const displayedWorkflows =
    selectedCat === 'All'
      ? matchedWorkflows
      : matchedWorkflows.filter((w) => w.cat === selectedCat);

  const groups = categoryNames.slice(1).map((label) => {
    const items = displayedWorkflows.filter((w) => w.cat === label);
    return {
      label,
      items,
      count: items.length + (items.length === 1 ? ' workflow' : ' workflows'),
    };
  }).filter((g) => g.items.length > 0);

  return (
    <div className={styles.page}>
      <Header active="workflows" />

      {/* HERO */}
      <section data-screen-label="Workflows hero" className={styles.heroSection}>
        <div className={styles.gridPattern} />
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Workflow Library</span>
          <h1 className={styles.heroTitle}>
            Pick the work. <span className={styles.heroHighlight}>We&apos;ll take it from there.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            {rawWorkflows.length} ready-made workflows across the close, revenue, spend and reporting. Every one ends in a draft for your approval.
          </p>
          <div className={styles.searchWrapper}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#94a5ba"
              strokeWidth="2"
              strokeLinecap="round"
              className={styles.searchIcon}
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search workflows, e.g. accruals"
              className={styles.searchInput}
            />
          </div>
        </div>
      </section>

      {/* LIBRARY */}
      <section data-screen-label="Library" className={styles.librarySection}>
        <div className={styles.libraryContainer}>
          <aside className={styles.sidebar}>
            <span className={styles.sidebarTitle}>Categories</span>
            {categoryNames.map((label) => {
              const isSelected = label === selectedCat;
              const count = label === 'All'
                ? matchedWorkflows.length
                : matchedWorkflows.filter((w) => w.cat === label).length;

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setSelectedCat(label)}
                  className={styles.sidebarBtn}
                  style={{
                    background: isSelected ? '#e0f2fe' : 'transparent',
                    color: isSelected ? '#0a1f44' : '#475569',
                  }}
                >
                  <span>{label}</span>
                  <span style={{ color: '#94a5ba', fontWeight: 500 }}>{count}</span>
                </button>
              );
            })}
          </aside>

          <div className={styles.mainContent}>
            {groups.map((g) => (
              <div key={g.label} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className={styles.groupHeader}>
                  <h2 className={styles.groupTitle}>{g.label}</h2>
                  <span className={styles.groupCount}>{g.count}</span>
                </div>
                <div className={styles.cardsGrid}>
                  {g.items.map((w, idx) => (
                    <div key={idx} className={styles.workflowCard}>
                      <div className={styles.cardTopRow}>
                        <h3 className={styles.cardTitle}>{w.t}</h3>
                        <span className={styles.frequencyPill}>{w.f}</span>
                      </div>
                      <p className={styles.cardDesc}>{w.d}</p>
                      <span className={styles.cardFooter}>
                        Delivers: <span style={{ color: 'var(--stone-700)', fontWeight: 600 }}>{w.o}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {groups.length === 0 && (
              <div className={styles.emptyState}>
                No workflows match. Tell us about it on a demo call and we&apos;ll scope it.
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
