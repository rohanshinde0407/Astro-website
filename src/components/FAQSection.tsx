'use client';

import React, { useState } from 'react';
import SchemaMarkup from './SchemaMarkup';
import { getFAQPageSchema } from '../utils/schema';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQSection({
  items,
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common inquiries quickly. Optimized for reader clarity and search assistants.',
}: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Build the FAQPage schema
  const faqSchema = getFAQPageSchema({
    questions: items.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
  });

  return (
    <section className="faq-section" style={{ width: '100%' }}>
      {/* Schema injection for AEO/GEO engines */}
      <SchemaMarkup schema={faqSchema} />

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{title}</h2>
        {subtitle && <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>{subtitle}</p>}
      </div>

      <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className={`faq-item ${isActive ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isActive}
              >
                <span>{item.question}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p style={{ margin: 0, paddingTop: '0.5rem' }}>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
