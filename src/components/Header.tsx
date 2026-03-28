'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('header');
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t('home'), href: `/${locale}` },
    { label: t('about'), href: `/${locale}#about` },
    { label: t('services'), href: `/${locale}/services` },
    { label: t('blog'), href: `/${locale}#blog` },
    { label: t('contact'), href: `/${locale}/contact` },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <nav className="max-w-7xl mx-auto">
        <div
          className={`flex items-center justify-between rounded-full px-6 lg:px-8 py-3 transition-all duration-300 border border-white/[0.06] ${
            scrolled
              ? 'bg-navy/80 backdrop-blur-xl shadow-lg'
              : 'bg-gray-900/40 backdrop-blur-md'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5">
              <svg className="w-7 h-7" viewBox="0 0 28 28">
                <g stroke="#E63946" strokeWidth="2.8" strokeLinecap="round">
                  <line x1="14" y1="3" x2="14" y2="25" />
                  <line x1="3" y1="14" x2="25" y2="14" />
                  <line x1="6.2" y1="6.2" x2="21.8" y2="21.8" />
                  <line x1="21.8" y1="6.2" x2="6.2" y2="21.8" />
                </g>
              </svg>
              <span className="text-white text-lg font-bold tracking-tight uppercase">
                MARSCIMINI
              </span>
            </div>
            <div className="hidden lg:block w-px h-8 bg-white/20 ms-3" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/75 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5"
              >
                {link.label}
                <svg
                  className="w-3 h-3 opacity-40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            <a
              href="tel:+971582637334"
              className="hidden sm:flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium hidden md:block">
                {t('phone')}
              </span>
            </a>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {menuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden mt-2 bg-navy/95 backdrop-blur-xl rounded-2xl p-6 border border-white/[0.06] animate-[fadeIn_0.2s_ease]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-white text-base font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
