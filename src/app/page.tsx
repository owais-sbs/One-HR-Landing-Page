import { Navbar } from '@/components/Navbar';
import { Hero, AboutSection, Services, WaveSection, Features, OracleIntegration, Resources, Contact, Footer } from '@/components/Landingpage';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <WaveSection />
      <Features />
      <OracleIntegration />
      <Resources />
      <Contact />
      <Footer />
    </main>
  );
}
