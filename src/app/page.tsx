import { ThemeToggle } from '@/components/ThemeToggle';
import Hero from '@/components/cyber/Hero';
import Services from '@/components/cyber/Services';
import TechViz from '@/components/cyber/TechViz';
import WhyChooseUs from '@/components/cyber/WhyChooseUs';
import CaseStudies from '@/components/cyber/CaseStudies';
import Team from '@/components/cyber/Team';
import IntelFeed from '@/components/cyber/IntelFeed';
import dynamic from 'next/dynamic';

const Contact = dynamic(() => import('@/components/cyber/Contact'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="sticky top-0 z-40 backdrop-blur-xs bg-background/60 border-b">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#" className="font-display font-semibold tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
            SentinelSec
          </a>
          <ThemeToggle />
        </div>
      </nav>

      <Hero />
      <Services />
      <TechViz />
      <WhyChooseUs />
      <CaseStudies />
      <Team />
      <IntelFeed />
      <Contact />

      <footer className="py-12 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} SentinelSec. All rights reserved.</footer>
    </main>
  );
}
