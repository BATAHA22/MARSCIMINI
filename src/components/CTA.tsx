'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function CTA() {
  const t = useTranslations('cta');
  const locale = useLocale();

  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight mb-6">
          {t('title')}
        </h2>
        <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href={`/${locale}/contact`}
            className="bg-white text-navy px-8 py-4 rounded-full font-medium text-sm hover:bg-navy hover:text-white transition-all duration-300 inline-flex items-center gap-3"
          >
            {t('button')}
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
          <span className="text-white/50 text-sm">
            {t('phone')}{' '}
            <a
              href="tel:+971582637334"
              className="text-white font-medium hover:underline"
            >
              +971 58 263 7334
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
