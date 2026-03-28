'use client';

import { useTranslations } from 'next-intl';

const CubeIcon = ({ className = '' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 110"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
  >
    {/* Outer hexagon */}
    <polygon points="50,8 92,32 92,78 50,102 8,78 8,32" />
    {/* Center dividers */}
    <polyline points="8,32 50,56 92,32" />
    <line x1="50" y1="56" x2="50" y2="102" />
    {/* Top face X pattern */}
    <line x1="29" y1="20" x2="71" y2="44" />
    <line x1="71" y1="20" x2="29" y2="44" />
    {/* Side detail */}
    <line x1="8" y1="55" x2="50" y2="79" />
    <line x1="92" y1="55" x2="50" y2="79" />
  </svg>
);

const ArrowIcon = ({ className = '' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

export default function WhyChooseUs() {
  const t = useTranslations('whyUs');

  const cards = [
    {
      title: t('card1Title'),
      bg: 'bg-white',
      text: 'text-navy',
      stroke: 'text-navy/80',
      arrowBg: '',
      arrowColor: 'text-primary',
    },
    {
      title: t('card2Title'),
      bg: 'bg-navy',
      text: 'text-white',
      stroke: 'text-white/60',
      arrowBg: '',
      arrowColor: 'text-white/70',
      showReadMore: true,
    },
    {
      title: t('card3Title'),
      bg: 'bg-primary',
      text: 'text-white',
      stroke: 'text-white/70',
      arrowBg: '',
      arrowColor: 'text-white',
    },
  ];

  return (
    <section id="services" className="bg-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[11px] tracking-[0.25em] text-navy/60 uppercase font-medium">
                {t('subtitle')}
              </span>
              <span className="block w-8 h-[2px] bg-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-light leading-[1.15]">
              {t('title')}
            </h2>
          </div>
          <p className="text-navy/50 text-base leading-relaxed max-w-sm lg:pt-12">
            {t('description')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-xl overflow-hidden">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`${card.bg} ${card.text} p-10 lg:p-12 flex flex-col justify-between min-h-[420px] group cursor-pointer transition-all duration-300 hover:scale-[1.02]`}
            >
              <CubeIcon
                className={`w-24 h-24 lg:w-28 lg:h-28 ${card.stroke} mb-auto`}
              />

              <div className="mt-12">
                <h3 className="text-xl lg:text-[1.35rem] font-medium leading-snug mb-6">
                  {card.title}
                </h3>

                {card.showReadMore ? (
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {t('readMore')}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                ) : (
                  <ArrowIcon
                    className={`w-5 h-5 ${card.arrowColor} transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
