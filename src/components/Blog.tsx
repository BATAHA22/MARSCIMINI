'use client';

import { useTranslations } from 'next-intl';
import { useRef } from 'react';

const blogImages = [
  '/images/blog-1.jpg',
  '/images/blog-2.jpg',
  '/images/blog-3.jpg',
  '/images/blog-4.jpg',
];

export default function Blog() {
  const t = useTranslations('blog');
  const scrollRef = useRef<HTMLDivElement>(null);

  const posts = [
    {
      title: t('post1Title'),
      date: t('post1Date'),
      category: t('category1'),
      bg: blogImages[0],
    },
    {
      title: t('post2Title'),
      date: t('post2Date'),
      category: t('category2'),
      bg: blogImages[1],
    },
    {
      title: t('post3Title'),
      date: t('post3Date'),
      category: t('category3'),
      bg: blogImages[2],
    },
    {
      title: t('post4Title'),
      date: t('post4Date'),
      category: t('category4'),
      bg: blogImages[3],
    },
  ];

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 380;
    scrollRef.current.scrollBy({
      left: dir === 'right' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="blog" className="bg-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <div>
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

          {/* Navigation arrows */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-navy/40 hover:text-navy hover:border-navy transition-colors"
              aria-label="Previous"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-navy bg-white flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
              aria-label="Next"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 -mx-6 px-6"
        >
          {posts.map((post, i) => (
            <article
              key={i}
              className="flex-shrink-0 w-[320px] sm:w-[350px] snap-start group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 rounded-xl overflow-hidden mb-5">
                <img
                  src={post.bg}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Category badge */}
                <span className="absolute top-4 start-4 bg-primary text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded">
                  {post.category}
                </span>
              </div>

              {/* Meta */}
              <p className="text-navy/40 text-sm mb-2">{post.date}</p>
              <h3 className="text-lg font-medium leading-snug text-navy/90 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
