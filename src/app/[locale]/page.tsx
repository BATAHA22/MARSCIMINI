import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesSection from '@/components/ServicesSection';
import FAQ from '@/components/FAQ';
import Blog from '@/components/Blog';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <ServicesSection />
      <FAQ />
      <Blog />
      <CTA />
    </main>
  );
}
