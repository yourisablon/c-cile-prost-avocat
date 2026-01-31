import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PracticeAreas from '@/components/PracticeAreas';
import Honoraires from '@/components/Honoraires';
import ZoneIntervention from '@/components/ZoneIntervention';
import TrustCards from '@/components/TrustCards';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';
import SEOHead from '@/components/SEOHead';
import CookieBanner from '@/components/CookieBanner';

const Index = () => {
  return (
    <>
      <SEOHead />
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Honoraires />
        <ZoneIntervention />
        <TrustCards />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <StickyCallButton />
      <CookieBanner />
    </>
  );
};

export default Index;
