'use client';

import React, { useState } from 'react';
import styles from './Accordion.module.css';

export interface AccordionItem {
  id?: string | number;
  question: React.ReactNode;
  answer: React.ReactNode;
}

export interface AccordionProps {
  items?: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: (string | number)[];
  className?: string;
  style?: React.CSSProperties;
}

export default function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  className = '',
  style = {},
}: AccordionProps) {
  const [open, setOpen] = useState<Set<string | number>>(new Set(defaultOpen));

  const toggle = (id: string | number) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={`${styles.container} ${className}`} style={style}>
      {items.map((item, i) => {
        const id = item.id ?? i;
        const isOpen = open.has(id);

        return (
          <div key={id} className={styles.item}>
            <button
              type="button"
              onClick={() => toggle(id)}
              className={styles.trigger}
              aria-expanded={isOpen}
            >
              <span className={styles.question}>{item.question}</span>
              <span
                className={`${styles.iconWrapper} ${
                  isOpen ? styles.iconOpen : styles.iconClosed
                }`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={isOpen ? '#fff' : 'var(--stone-400)'}
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M12 6v12M6 12h12" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className={styles.answerWrapper}>
                <p className={styles.answer}>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
