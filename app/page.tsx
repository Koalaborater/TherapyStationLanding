import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyUs from '@/components/sections/WhyUs';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';
import CTABanner from '@/components/sections/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyUs />
      <Stats />
      <Testimonials />
      <CTABanner />
    </>
  );
}
