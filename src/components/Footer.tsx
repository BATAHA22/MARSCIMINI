'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const h = useTranslations('header');
  const locale = useLocale();

  return (
    <footer className="bg-navy text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <svg className="w-7 h-7" viewBox="0 0 28 28">
                <g stroke="#E63946" strokeWidth="2.8" strokeLinecap="round">
                  <line x1="14" y1="3" x2="14" y2="25" />
                  <line x1="3" y1="14" x2="25" y2="14" />
                  <line x1="6.2" y1="6.2" x2="21.8" y2="21.8" />
                  <line x1="21.8" y1="6.2" x2="6.2" y2="21.8" />
                </g>
              </svg>
              <span className="text-lg font-bold tracking-tight uppercase">
                MARSCIMINI
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-4">
              {t('description')}
            </p>
            <p className="text-white/25 text-xs">{t('registration')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-5">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              {[
                { label: h('home'), href: `/${locale}` },
                { label: h('about'), href: `/${locale}#about` },
                { label: h('services'), href: `/${locale}/services` },
                { label: h('blog'), href: `/${locale}#blog` },
                { label: h('contact'), href: `/${locale}/contact` },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-5">{t('services')}</h4>
            <ul className="space-y-3 mb-8">
              {[t('importExport'), t('supplyChain'), t('qualityControl'), t('consulting')].map((label) => (
                <li key={label}>
                  <a href={`/${locale}/services`} className="text-white/40 hover:text-white text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-sm mb-3">{t('legal')}</h4>
            <a href={`/${locale}/privacy`} className="text-white/40 hover:text-white text-sm transition-colors">
              {t('privacy')}
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-5">{t('contactInfo')}</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t('address')}
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="break-all">{t('email')}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p>{h('phone')}</p>
                  <p>{t('phone2')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/25 text-sm text-center">
            &copy; {new Date().getFullYear()} MARSCIMINI GENERAL TRADING L.L.C. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
