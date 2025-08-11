import Image from 'next/image';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import StartTracking from '../../components/StartTracking';
import Footer from '../../components/Footer';
import OurProgress from '../../components/OurProgress';

export default function Home() {
  return (
    <div className="w-full min-h-min">
      <Hero />
      <Features />
      <StartTracking />
      <OurProgress />
      <Footer />
    </div>
  );
}
