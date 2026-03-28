'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function FAQ() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
    { q: t('q4'), a: t('a4') },
    { q: t('q5'), a: t('a5') },
  ];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.25em] text-navy/50 uppercase font-medium">
            {t('subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mt-4">
            {t('title')}
          </h2>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-gray-200">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="py-6">
                <button
                  className="w-full flex items-center justify-between gap-6 text-start"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium text-navy/90">
                    {item.q}
                  </span>
                  <span
                    className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-navy text-white rotate-45'
                        : 'bg-primary text-white'
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </span>
                </button>

                <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                  <div>
                    <p className="pt-4 text-navy/50 text-[15px] leading-relaxed pe-16">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
