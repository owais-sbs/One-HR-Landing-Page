import { Navbar } from '@/components/Navbar';
import { Hero, AboutSection, Services, WaveSection, Features, Resources, Contact, Footer } from '@/components/Landingpage';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <WaveSection />
      <Features />
      <Resources />
      <Contact />
      <Footer />
    </main>
  );
}
