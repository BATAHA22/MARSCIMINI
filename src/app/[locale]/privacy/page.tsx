'use client';

import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('privacy');
  const c = useTranslations('contact');

  const sections = [
    { title: t('s1Title'), content: t('s1Content') },
    { title: t('s2Title'), content: t('s2Content') },
    { title: t('s3Title'), content: t('s3Content') },
    { title: t('s4Title'), content: t('s4Content') },
    { title: t('s5Title'), content: t('s5Content') },
    { title: t('s6Title'), content: t('s6Content') },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-light text-white">
            {t('title')}
          </h1>
          <p className="text-white/40 text-sm mt-4">{t('lastUpdated')}</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-navy/60 text-base leading-relaxed mb-12">
            {t('intro')}
          </p>

          <div className="space-y-10">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="text-xl font-semibold text-navy mb-3">
                  {i + 1}. {s.title}
                </h2>
                <p className="text-navy/55 text-[15px] leading-relaxed">
                  {s.content}
                </p>
              </div>
            ))}

            {/* Contact section */}
            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                7. {t('s7Title')}
              </h2>
              <p className="text-navy/55 text-[15px] leading-relaxed mb-4">
                {t('s7Content')}
              </p>
              <div className="bg-surface rounded-xl p-6 space-y-2 text-sm text-navy/60">
                <p>
                  <span className="font-medium text-navy">Email:</span>{' '}
                  {c('emailValue')}
                </p>
                <p>
                  <span className="font-medium text-navy">Phone:</span>{' '}
                  {c('phoneValue')}
                </p>
                <p>
                  <span className="font-medium text-navy">Address:</span>{' '}
                  {c('addressValue')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
