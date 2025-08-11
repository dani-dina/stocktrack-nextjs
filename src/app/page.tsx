import Image from 'next/image';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import StartTracking from '../../components/StartTracking';

export default function Home() {
  return (
    <div className="w-full min-h-min">
      <Hero />
      <Features />
      <StartTracking />
    </div>
  );
}
