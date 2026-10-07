'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SectionHeading from '../SectionHeading/SectionHeading';
import Accordion from '../Accordion/Accordion';
import styles from './SecurityPage.module.css';

export default function SecurityPage() {
  const badges = ['SOC 2 Type II', 'SOC 1 Type II', 'SOX-aligned', 'HIPAA-ready', 'GDPR'];

  const areas = [
    {
      n: '01',
      t: 'Certifications',
      d: 'Independent auditors test our controls every year.',
      items: [
        { t: 'SOC 2 Type II', d: 'Security, availability and confidentiality controls across every system.' },
        { t: 'SOC 1 Type II', d: 'Controls over financial reporting, examined by a licensed CPA firm.' },
        { t: 'HIPAA-ready', d: 'Deployable under a BAA when protected health information is in scope.' },
        { t: 'Penetration testing', d: 'Third-party tests at least annually, with results shared under NDA.' },
      ],
    },
    {
      n: '02',
      t: 'Your data',
      d: 'Encrypted, isolated, and never used for anything but your work.',
      items: [
        { t: 'Encryption', d: 'AES-256 at rest and TLS 1.3 in transit, everywhere.' },
        { t: 'No model training', d: "Your ledger is never used to train models, ours or anyone else's." },
        { t: 'Tenant isolation', d: 'Each customer\'s data is logically separated with its own keys.' },
        { t: 'Retention you control', d: 'Set retention periods and request deletion at any time.' },
      ],
    },
    {
      n: '03',
      t: 'Access and controls',
      d: 'The same controls your auditor expects from your own team.',
      items: [
        { t: 'Least privilege', d: 'Read-only by default. Write access is scoped per system and workflow.' },
        { t: 'Segregation of duties', d: 'Metahubs prepares. Named people on your team approve.' },
        { t: 'SSO and SAML', d: 'Sign in through Okta, Google or Microsoft Entra ID.' },
        { t: 'Full audit trail', d: 'Every action logged with source, preparer, reviewer and timestamp.' },
      ],
    },
    {
      n: '04',
      t: 'What we\'ll sign',
      d: 'Standard agreements ready for your legal team.',
      items: [
        { t: 'DPA', d: 'Data processing agreement aligned with GDPR and CCPA.' },
        { t: 'BAA', d: 'Business associate agreement for HIPAA-covered data.' },
        { t: 'MSA', d: 'Master services agreement with security exhibit.' },
        { t: 'Custom terms', d: 'Enterprise plans can negotiate additional security terms.' },
      ],
    },
  ];

  const docs = [
    { t: 'SOC 2 Type II report', s: 'Most recent audit period' },
    { t: 'SOC 1 Type II report', s: 'Controls over financial reporting' },
    { t: 'Penetration test summary', s: 'Third-party, annual' },
    { t: 'Subprocessor list', s: 'Updated quarterly' },
    { t: 'Data processing agreement', s: 'GDPR and CCPA' },
    { t: 'Security questionnaire', s: 'SIG Lite and CAIQ' },
  ];

  const faqItems = [
    {
      id: 0,
      question: 'Does Metahubs store our credentials?',
      answer: 'Where possible we connect with OAuth or API tokens. Any stored secrets are encrypted in a managed vault and never visible to staff.',
    },
    {
      id: 1,
      question: 'Can Metahubs post entries on its own?',
      answer: 'Only if you allow it. By default every entry, schedule and payment is a draft until a named reviewer approves it.',
    },
    {
      id: 2,
      question: 'Where is our data hosted?',
      answer: 'In US data centers by default. EU hosting is available on Enterprise plans.',
    },
    {
      id: 3,
      question: 'Will our auditors accept Metahubs\'s work?',
      answer: 'Every output links to its source documents and records who prepared and approved it, which is the evidence auditors ask for.',
    },
    {
      id: 4,
      question: 'Who at Metahubs can see our data?',
      answer: 'Only the finance leads assigned to your account, with access logged and reviewed. Engineers do not have standing access to customer data.',
    },
  ];

  return (
    <div className={styles.page}>
      <Header active="security" />

      {/* HERO */}
      <section data-screen-label="Security hero" className={styles.heroSection}>
        <div className={styles.gridPattern} />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <span className={styles.heroEyebrow}>Security</span>
            <h1 className={styles.heroTitle}>
              Built for the review your{' '}
              <span className={styles.heroHighlight}>compliance team runs.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              What we&apos;re certified for, what we never do with your data, and what we&apos;ll sign.
            </p>
          </div>
          <div className={styles.badgesRow}>
            {badges.map((b, idx) => (
              <span key={idx} className={styles.badgePill}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTROLS */}
      <section data-screen-label="Controls" className={styles.controlsSection}>
        <div className={styles.controlsContainer}>
          {areas.map((a, idx) => (
            <div key={idx} className={styles.areaRow}>
              <div className={styles.areaLeft}>
                <span className={styles.areaNum}>{a.n}</span>
                <h2 className={styles.areaTitle}>{a.t}</h2>
                <p className={styles.areaDesc}>{a.d}</p>
              </div>
              <div className={styles.areaGrid}>
                {a.items.map((it, iidx) => (
                  <div key={iidx} className={styles.areaCard}>
                    <h3 className={styles.cardTitle}>{it.t}</h3>
                    <p className={styles.cardDesc}>{it.d}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DOCUMENTS */}
      <section data-screen-label="Documents" className={styles.documentsSection}>
        <div className={styles.documentsContainer}>
          <SectionHeading
            eyebrow="Trust Center"
            title="Documents for your review"
            subtitle="Available under NDA. Most requests are answered the same day."
          />
          <div className={styles.docsGrid}>
            {docs.map((d, idx) => (
              <div key={idx} className={styles.docCard}>
                <span className={styles.docIcon}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0369a1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
                    <path d="M14 3v5h5" />
                  </svg>
                </span>
                <div className={styles.docText}>
                  <span className={styles.docTitle}>{d.t}</span>
                  <span className={styles.docSub}>{d.s}</span>
                </div>
                <Link href="/#contact" className={styles.docLink}>
                  Request &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY FAQ */}
      <section data-screen-label="Security FAQ" className={styles.faqSection}>
        <div className={styles.faqRow}>
          <div className={styles.faqLeft}>
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Security questions"
              subtitle="Sending a questionnaire? We'll complete it."
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
