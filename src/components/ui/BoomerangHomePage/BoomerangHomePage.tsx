'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../Button/Button';
import Badge from '../Badge/Badge';
import Eyebrow from '../Eyebrow/Eyebrow';
import BrowserFrame from '../BrowserFrame/BrowserFrame';
import SectionHeading from '../SectionHeading/SectionHeading';
import PricingCard from '../PricingCard/PricingCard';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import Accordion from '../Accordion/Accordion';
import styles from './BoomerangHomePage.module.css';

const SOURCES = ['google', 'g2', 'glassdoor', 'builtwith', 'crunchbase', 'indeed', 'apollo', 'navigator'];

const RUN_STEPS = [
  { agent: 'Scraper', status: 'Pulled 2,960 profiles from G2 + Crunchbase', color: 'var(--brand-500)' },
  { agent: 'Enricher', status: 'Added email, phone, headcount, stack', color: 'var(--emerald-500)' },
  { agent: 'Verifier', status: 'Checking deliverability · 82%', color: 'var(--amber-500)' },
];

const ROWS = [
  { name: 'Maya Chen', company: 'Ramply', title: 'CFO', email: 'maya@ramply.io', status: 'Verified', bg: 'var(--emerald-50)', fg: 'var(--emerald-600)' },
  { name: 'Tom Adeyemi', company: 'Finstack', title: 'VP Finance', email: 't.adeyemi@finstack.com', status: 'Verified', bg: 'var(--emerald-50)', fg: 'var(--emerald-600)' },
  { name: 'Laura Bianchi', company: 'Clearbooks HQ', title: 'CFO', email: 'laura@clearbookshq.com', status: 'Verified', bg: 'var(--emerald-50)', fg: 'var(--emerald-600)' },
  { name: 'Arjun Rao', company: 'Paylane', title: 'Controller', email: 'arjun.rao@paylane.co', status: 'Checking', bg: 'var(--amber-50)', fg: 'var(--amber-600)' },
  { name: 'Emily Stone', company: 'Vaultly', title: 'CFO', email: 'emily@vaultly.com', status: 'Checking', bg: 'var(--amber-50)', fg: 'var(--amber-600)' },
  { name: 'Kenji Mori', company: 'Quanta Billing', title: 'VP Finance', email: 'kenji@quantabilling.com', status: 'Checking', bg: 'var(--amber-50)', fg: 'var(--amber-600)' },
];

const AGENTS = [
  {
    num: '01',
    role: 'Collects',
    name: 'Scraper',
    tint: 'var(--brand-50)',
    color: 'var(--brand-600)',
    desc: 'Paste a search URL or describe your ICP. The Scraper pulls matching companies and people from 8+ sources.',
    tasks: ['Google, G2, Glassdoor, Crunchbase, Indeed', 'Apollo and Sales Navigator searches', 'De-duplicates across sources'],
  },
  {
    num: '02',
    role: 'Enriches',
    name: 'Enricher',
    tint: 'var(--emerald-50)',
    color: 'var(--emerald-600)',
    desc: 'Fills every row with the fields your team needs to prioritize and personalize outreach.',
    tasks: ['Work email and direct phone', 'Headcount, funding, tech stack', 'LinkedIn and company URLs'],
  },
  {
    num: '03',
    role: 'Verifies',
    name: 'Verifier',
    tint: 'var(--amber-50)',
    color: 'var(--amber-600)',
    desc: 'Checks every email before it reaches your CSV, so you only pay for leads you can actually contact.',
    tasks: ['SMTP-level deliverability checks', 'Catch-all and role-address flags', 'CRM-ready column mapping'],
  },
];

const STEPS = [
  { n: '01', title: 'Write a brief', body: 'Paste a search URL or describe who you want to reach in plain English.' },
  { n: '02', title: 'Approve the plan', body: 'See sources, estimated rows, and cost before anything runs.' },
  { n: '03', title: 'Agents run', body: 'Scrape, enrich, and verify happen in sequence. Most runs finish in under 30 minutes.' },
  { n: '04', title: 'Export', body: 'Download a clean CSV or push straight to your CRM.' },
];

const USE_CASES = [
  {
    team: 'Agencies',
    title: 'Client lists on demand',
    body: 'Spin up a fresh, verified list for every client ICP without adding researchers.',
    flow: ['Sales Navigator', 'Enrich', 'Verify'],
  },
  {
    team: 'SDR teams',
    title: 'Account-based prospecting',
    body: 'Turn a target account list into decision-makers with direct contact details.',
    flow: ['Crunchbase', 'Enrich', 'CRM push'],
  },
  {
    team: 'Founders',
    title: 'Hiring-signal outreach',
    body: 'Find companies hiring for roles you sell into, then reach the people who own the budget.',
    flow: ['Indeed', 'Glassdoor', 'Enrich'],
  },
  {
    team: 'Growth',
    title: 'Competitor displacement',
    body: 'List every company running a competitor\'s stack and the buyer behind it.',
    flow: ['BuiltWith', 'G2', 'Verify'],
  },
];

const STATS = [
  { value: '8+', label: 'Data sources' },
  { value: '99%', label: 'Deliverability on verified rows' },
  { value: '30min', label: 'Typical run time' },
  { value: '500+', label: 'Teams using Boomerang' },
];

const PLAN_DETAILS = [
  { k: 'Sources', v: 'G2, Crunchbase' },
  { k: 'Target', v: 'CFOs · SaaS · US · 50–500 staff' },
  { k: 'Estimated rows', v: '~2,500' },
  { k: 'Estimated cost', v: '$30.00' },
];

const SECURITY_ITEMS = [
  { title: 'Encrypted everywhere', body: 'Data is encrypted in transit and at rest. Exports expire automatically.' },
  { title: 'Your data stays yours', body: 'Lists you build are never resold or shared with other customers.' },
  { title: 'Approval before spend', body: 'No run starts and nothing is charged until you approve the plan.' },
  { title: 'Full audit trail', body: 'Every row shows which agent produced it and from which source.' },
];

const INTEGRATIONS = [
  { name: 'HubSpot', kind: 'CRM' },
  { name: 'Salesforce', kind: 'CRM' },
  { name: 'Pipedrive', kind: 'CRM' },
  { name: 'Instantly', kind: 'Sequencer' },
  { name: 'Smartlead', kind: 'Sequencer' },
  { name: 'Lemlist', kind: 'Sequencer' },
  { name: 'Clay', kind: 'Enrichment' },
  { name: 'Zapier', kind: 'Automation' },
  { name: 'Google Sheets', kind: 'Spreadsheet' },
  { name: 'Slack', kind: 'Alerts' },
];

const FOUNDER_FACTS = [
  { value: '8+', label: 'Sources, one workflow' },
  { value: '500+', label: 'Teams onboarded' },
  { value: '99%', label: 'Verified deliverability' },
  { value: '24h', label: 'Support response time' },
];

const F1 = ['All 8+ sources', 'De-duplicated results', 'CSV export', 'Pay only for delivered rows'];
const F2 = ['Everything in Scrape', 'Work email + phone', 'Company firmographics', 'Email verification', 'CRM push'];
const F3 = ['Dedicated operator', 'Custom sources', 'Mailbox infrastructure setup', 'Priority support'];

const FAQ_ITEMS = [
  { id: 0, question: 'What exactly is an agent?', answer: 'An agent is a task-specific worker inside Boomerang. The Scraper, Enricher, and Verifier each handle one step and pass results to the next, so you get a finished list instead of raw data.' },
  { id: 1, question: 'How am I charged?', answer: 'Per row delivered. You approve an estimate before each run and are only billed for rows that make it into your export.' },
  { id: 2, question: 'Which sources are supported?', answer: 'Google, G2, Glassdoor, BuiltWith, Crunchbase, Indeed, Apollo, and LinkedIn Sales Navigator, with more added regularly.' },
  { id: 3, question: 'Can I push leads to my CRM?', answer: 'Yes. Exports are CRM-ready CSVs, and the Scrape + Enrich plan can push directly to supported CRMs.' },
  { id: 4, question: 'Is there a free trial?', answer: 'Your first 1,000 rows are free. No credit card required.' },
];

export default function BoomerangHomePage({ showAnnouncement = true }) {
  const [scrolled, setScrolled] = useState(false);
  const [approved, setApproved] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const marqueeSources = [...SOURCES, ...SOURCES];

  return (
    <div className={styles.page}>
      {/* Top Announcement Bar */}
      {showAnnouncement && (
        <div className={styles.announcementBar}>
          <span>New: Verifier agent now checks every email before it lands in your CSV.</span>
          <a href="#agents" className={styles.announcementLink}>See how it works →</a>
        </div>
      )}

      {/* Sticky Header */}
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : styles.headerTransparent}`}>
        <div className={styles.headerInner}>
          <Link href="/boomerang-home" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/assets/Logo.svg" alt="Boomerang" className={styles.logoImg} />
          </Link>
          <nav className={styles.nav}>
            <a href="#agents" className={styles.navLink}>Agents</a>
            <a href="#how" className={styles.navLink}>How It Works</a>
            <a href="#security" className={styles.navLink}>Security</a>
            <a href="#integrations" className={styles.navLink}>Integrations</a>
            <a href="#pricing" className={styles.navLink}>Pricing</a>
          </nav>
          <div className={styles.headerActions}>
            <Button variant="ghost" size="sm" href="https://app.theboomerang.co">Log In</Button>
            <Button size="sm" href="https://app.theboomerang.co">Start Scraping Free</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section data-screen-label="Hero" className={styles.heroSection}>
        <div className={styles.heroDots} />
        <div className={styles.heroSplitInner}>
          <div className={styles.heroTextCol}>
            <Badge tone="brand">3 agents · 8+ sources · pay per result</Badge>
            <h1 className={styles.heroTitle}>An outbound research team that never logs off.</h1>
            <p className={styles.heroDesc}>
              Boomerang&apos;s agents scrape leads from Google, G2, Glassdoor, Crunchbase and 8+ sources, enrich every row, and hand you a verified, CRM-ready CSV. You review. They do the rest.
            </p>
            <div className={styles.heroButtons}>
              <Button size="lg" href="https://app.theboomerang.co">Start Scraping Free</Button>
              <Button size="lg" variant="outline" href="#how">See How It Works</Button>
            </div>
            <div className={styles.heroProof}>
              <span>No credit card</span>
              <span>No subscription</span>
              <span>$3.5 / 1,000 rows</span>
            </div>
          </div>

          <BrowserFrame url="app.theboomerang.co/runs/saas-cfo-us">
            <div className={styles.browserInner}>
              <div className={styles.browserHeader}>
                <span className={styles.runLabel}>Run · SaaS CFOs, US</span>
                <span className={styles.agentsWorkingBadge}>
                  <span className={styles.pulseDot} />
                  Agents working
                </span>
              </div>
              <div className={styles.stepsGrid}>
                {RUN_STEPS.map((step, idx) => (
                  <div key={idx} className={styles.stepCard}>
                    <span className={styles.stepAgentTitle}>
                      <span style={{ width: 8, height: 8, borderRadius: 9999, background: step.color }} />
                      {step.agent}
                    </span>
                    <span className={styles.stepStatus}>{step.status}</span>
                  </div>
                ))}
              </div>
              <div className={styles.rowsList}>
                {ROWS.map((row, idx) => (
                  <div key={idx} className={styles.rowItem}>
                    <div className={styles.rowNameCol}>
                      <span className={styles.rowName}>{row.name}</span>
                      <span className={styles.rowSub}>{row.title} · {row.company}</span>
                    </div>
                    <span className={styles.rowEmail}>{row.email}</span>
                    <span
                      className={styles.rowBadge}
                      style={{ background: row.bg, color: row.fg }}
                    >
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </BrowserFrame>
        </div>
      </section>

      {/* Sources Marquee */}
      <section className={styles.marqueeSection}>
        <div className={styles.marqueeLabel}>Agents pull from</div>
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {marqueeSources.map((src, idx) => (
              <img
                key={idx}
                src={`/assets/sources/${src}.svg`}
                alt={src}
                className={styles.sourceImg}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" data-screen-label="Agents" className={styles.sectionCard}>
        <div className={styles.sectionContainer}>
          <SectionHeading
            eyebrow="The Team"
            title="Three agents. One clean list."
            subtitle="Each agent owns one job in your lead workflow and hands its output to the next. You see every step."
          />
          <div className={styles.agentsGrid}>
            {AGENTS.map((agent, idx) => (
              <div key={idx} className={styles.agentCard}>
                <div className={styles.agentTop}>
                  <span
                    className={styles.agentNum}
                    style={{ background: agent.tint, color: agent.color }}
                  >
                    {agent.num}
                  </span>
                  <span className={styles.agentRole}>{agent.role}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <h3 className={styles.agentTitle}>{agent.name}</h3>
                  <p className={styles.agentDesc}>{agent.desc}</p>
                </div>
                <ul className={styles.agentTasks}>
                  {agent.tasks.map((task, tIdx) => (
                    <li key={tIdx} className={styles.agentTaskItem}>
                      <svg
                        className={styles.agentCheckIcon}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6366f1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" data-screen-label="How it works" className={styles.sectionPage}>
        <div className={styles.sectionContainer}>
          <SectionHeading
            eyebrow="How It Works"
            title="From search URL to enriched CSV in minutes"
            subtitle="Give the agents a brief. Approve the plan. Download the file."
          />
          <div className={styles.stepsContainer}>
            {STEPS.map((st, idx) => (
              <div key={idx} className={styles.stepBlock}>
                <span className={styles.stepNumber}>{st.n}</span>
                <h3 className={styles.stepHeading}>{st.title}</h3>
                <p className={styles.stepBody}>{st.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases (Workflows) Section */}
      <section id="use-cases" data-screen-label="Use cases" className={styles.sectionCard}>
        <div className={styles.sectionContainer}>
          <SectionHeading
            eyebrow="Workflows"
            title="One team, every list you need"
            subtitle="Pick a workflow and the agents handle it end to end."
          />
          <div className={styles.useCasesGrid}>
            {USE_CASES.map((uc, idx) => (
              <div key={idx} className={styles.useCaseCard}>
                <span className={styles.useCaseTeam}>{uc.team}</span>
                <h3 className={styles.useCaseTitle}>{uc.title}</h3>
                <p className={styles.useCaseBody}>{uc.body}</p>
                <div className={styles.useCaseFlow}>
                  {uc.flow.map((fl, fIdx) => (
                    <span key={fIdx} className={styles.flowPill}>{fl}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review / Human in the loop Section */}
      <section data-screen-label="Review" className={styles.sectionCard}>
        <div className={styles.reviewGrid}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <SectionHeading
              align="left"
              eyebrow="You Stay In Control"
              title="Agents do the work. You make the calls."
              subtitle="Every run starts with a plan you approve and ends with a file you can audit. Nothing is sent, synced, or charged without you."
            />
            <div className={styles.statsGrid}>
              {STATS.map((stat, idx) => (
                <div key={idx} className={styles.statItem}>
                  <span className={styles.statVal}>{stat.value}</span>
                  <span className={styles.statLbl}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.planCardWrapper}>
            <div className={styles.planLabel}>Plan for approval</div>
            <div className={styles.planInner}>
              {PLAN_DETAILS.map((p, idx) => (
                <div key={idx} className={styles.planRow}>
                  <span className={styles.planKey}>{p.k}</span>
                  <span className={styles.planVal}>{p.v}</span>
                </div>
              ))}
            </div>
            <div className={styles.planActions}>
              <Button onClick={() => setApproved(true)}>
                {approved ? 'Plan Approved' : 'Approve Plan'}
              </Button>
              <Button variant="outline">Edit Brief</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" data-screen-label="Security" className={styles.sectionPage}>
        <div className={styles.sectionContainer}>
          <SectionHeading
            eyebrow="Security"
            title="Built to be trusted with your pipeline"
          />
          <div className={styles.securityGrid}>
            {SECURITY_ITEMS.map((item, idx) => (
              <div key={idx} className={styles.securityCard}>
                <h3 className={styles.securityTitle}>{item.title}</h3>
                <p className={styles.securityBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" data-screen-label="Integrations" className={styles.sectionCard}>
        <div className={styles.sectionContainer}>
          <SectionHeading
            eyebrow="Integrations"
            title="Lands where your team already works"
            subtitle="Push finished lists to your CRM, sequencer, or sheet in one click."
          />
          <div className={styles.integrationsGrid}>
            {INTEGRATIONS.map((ig, idx) => (
              <div key={idx} className={styles.integrationCard}>
                <span className={styles.integrationIcon}>{ig.name[0]}</span>
                <div className={styles.integrationInfo}>
                  <span className={styles.integrationName}>{ig.name}</span>
                  <span className={styles.integrationKind}>{ig.kind}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section data-screen-label="Founder" className={styles.sectionPage}>
        <div className={styles.founderGrid}>
          <div className={styles.founderQuoteCol}>
            <Eyebrow>Why We Built This</Eyebrow>
            <p className={styles.founderQuote}>
              &ldquo;We ran outbound agencies for years and spent more time building lists than selling. Boomerang is the research team we wished we could hire.&rdquo;
            </p>
            <div className={styles.founderCreds}>
              <span className={styles.founderName}>Founder name</span>
              <span className={styles.founderRole}>Co-founder, Boomerang</span>
            </div>
          </div>
          <div className={styles.founderFactsGrid}>
            {FOUNDER_FACTS.map((ff, idx) => (
              <div key={idx} className={styles.founderFactCard}>
                <span className={styles.factValue}>{ff.value}</span>
                <span className={styles.factLabel}>{ff.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section data-screen-label="Testimonials" className={styles.sectionCard}>
        <div className={styles.sectionContainer}>
          <SectionHeading
            eyebrow="Testimonials"
            title="Teams that hired the agents"
          />
          <div className={styles.testimonialsGrid}>
            <TestimonialCard
              quote="We replaced two weeks of VA research with one afternoon run. The emails actually bounce less than what we bought before."
              name="Priya Menon"
              title="Head of Growth, Ledgerline"
              avatar="/assets/testimonials-1.png"
            />
            <TestimonialCard
              quote="The approval step sold me. I see exactly what's being scraped and what it costs before a single row is charged."
              name="Daniel Ortiz"
              title="Founder, Outreachly"
              avatar="/assets/testimonials-2.jpg"
            />
            <TestimonialCard
              quote="Pay per result is the only model that makes sense for list building. Boomerang is the first tool that does it well."
              name="Sarah Kim"
              title="SDR Manager, Northpeak"
              avatar="/assets/testimonials-3.jpg"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" data-screen-label="Pricing" className={styles.sectionPage}>
        <div className={styles.sectionContainer}>
          <SectionHeading
            eyebrow="Pricing"
            title="Pay per result"
            subtitle="No subscriptions, no hidden fees. You're charged only for rows the agents deliver."
          />
          <div className={styles.pricingGrid}>
            <PricingCard
              name="Scrape"
              description="Raw leads from any supported source."
              price="$3.5"
              unit="/ 1,000 rows"
              features={F1}
              cta="Start Scraping"
              href="https://app.theboomerang.co"
            />
            <PricingCard
              name="Scrape + Enrich"
              description="Every row enriched and verified."
              price="$12"
              unit="/ 1,000 rows"
              features={F2}
              cta="Get Started"
              href="https://app.theboomerang.co"
              popular={true}
            />
            <PricingCard
              name="Managed"
              description="We run the agents for your team."
              price="Custom"
              unit=""
              features={F3}
              cta="Talk to Sales"
              href="#"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" data-screen-label="FAQ" className={styles.sectionCard}>
        <div className={styles.faqLayout}>
          <div className={styles.faqHeadingCol}>
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Questions, answered"
              subtitle="Anything else? Our team replies within a business day."
            />
          </div>
          <div className={styles.faqContentCol}>
            <Accordion items={FAQ_ITEMS} defaultOpen={[0]} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBgGrid} />
        <div className={styles.ctaInner}>
          <SectionHeading
            inverse={true}
            eyebrow="Get Started"
            title="Put your first run on the agents today"
            subtitle="Your first 1,000 rows are free. No credit card required."
          />
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button size="lg" href="https://app.theboomerang.co">Start Scraping Free</Button>
            <Button size="lg" variant="inverse" href="#">Schedule a Call</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>© 2026 Chitlangia Infotech Private Limited</span>
          <span className={styles.operationalBadge}>
            <span className={styles.pulseDot} />
            All systems operational
          </span>
          <div className={styles.footerLinks}>
            <a href="https://infra.theboomerang.co" className={styles.footerLink}>Infrastructure</a>
            <a href="https://love.theboomerang.co" className={styles.footerLink}>Reviews</a>
            <a href="#" className={styles.footerLink}>Privacy</a>
            <a href="#" className={styles.footerLink}>Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
