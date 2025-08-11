import Image from 'next/image';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import StartTracking from '../../components/StartTracking';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div className="w-full min-h-min">
      <Hero />
      <Features />
      <StartTracking />
      <Footer />
    </div>
  );
}
