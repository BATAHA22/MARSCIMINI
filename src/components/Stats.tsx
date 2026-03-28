'use client';

import { useTranslations } from 'next-intl';

export default function Stats() {
  const t = useTranslations('stats');

  const items = [
    { value: t('partners'), label: t('partnersLabel') },
    { value: t('countries'), label: t('countriesLabel') },
    { value: t('products'), label: t('productsLabel') },
    { value: t('years'), label: t('yearsLabel') },
  ];

  return (
    <section className="bg-navy py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10 rtl:lg:divide-x-reverse">
          {items.map((item, i) => (
            <div key={i} className="text-center px-4">
              <p className="text-4xl lg:text-5xl font-light text-white mb-2">
                {item.value}
              </p>
              <p className="text-white/40 text-sm tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
