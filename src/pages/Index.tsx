import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PracticeAreas from '@/components/PracticeAreas';
import EmotionalCopy from '@/components/EmotionalCopy';
import TrustCards from '@/components/TrustCards';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';
import SEOHead from '@/components/SEOHead';

const Index = () => {
  return (
    <>
      <SEOHead />
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <EmotionalCopy />
        <TrustCards />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <StickyCallButton />
    </>
  );
};

export default Index;
