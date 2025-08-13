import Image from 'next/image';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import StartTracking from '../../components/StartTracking';
import Footer from '../../components/Footer';
import OurProgress from '../../components/OurProgress';
import Pricing from '../../components/Pricing';
import GrowingSteps from '../../components/GrowingSteps';
import Partners from '../../components/Partners';
import Testimonials from '../../components/Testimonials';

export default function Home() {
  return (
    <div className="w-full min-h-min">
      <Hero />
      <Features />
      <StartTracking />
      <OurProgress />
      <Pricing />
      <GrowingSteps />
      <Testimonials />
      <Partners />
      <Footer />
    </div>
  );
}
