'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Subtitle */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[11px] tracking-[0.3em] text-white/60 uppercase font-medium">
              {t('subtitle')}
            </span>
            <span className="block w-8 h-[2px] bg-primary" />
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(2.8rem,6vw,5.5rem)] font-light text-white leading-[1.08] mb-8">
            {t('title1')}
            <br />
            <span className="font-normal">{t('title2')}</span>
          </h1>

          {/* Description */}
          <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-md mb-12">
            {t('description')}
          </p>

          {/* CTA Button */}
          <button className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full inline-flex items-center gap-3 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
            {t('cta')}
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5 rtl:rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <button
          className="w-2.5 h-2.5 rounded-full bg-white/25 transition-colors hover:bg-white/50"
          aria-label="Slide 1"
        />
        <button
          className="w-2.5 h-2.5 rounded-full bg-white/25 transition-colors hover:bg-white/50"
          aria-label="Slide 2"
        />
        <button
          className="w-3.5 h-3.5 rounded-full border-2 border-primary bg-transparent"
          aria-label="Slide 3 (active)"
        />
      </div>
    </section>
  );
}
