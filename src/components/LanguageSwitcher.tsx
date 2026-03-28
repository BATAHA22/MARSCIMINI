'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

const labels: Record<string, string> = {
  en: 'EN',
  ar: 'AR',
  fr: 'FR',
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const switchTo = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    return segments.join('/');
  };

  return (
    <div className="flex items-center gap-1">
      {Object.entries(labels).map(([code, label]) => (
        <a
          key={code}
          href={switchTo(code)}
          className={`text-[11px] font-medium px-2.5 py-1 rounded-full transition-all duration-200 ${
            locale === code
              ? 'bg-primary text-white'
              : 'text-white/50 hover:text-white hover:bg-white/10'
          }`}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
