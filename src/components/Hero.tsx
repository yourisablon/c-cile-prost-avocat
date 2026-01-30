import { motion } from 'framer-motion';
import { Phone, Calendar, ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-cabinet.jpg';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cabinet d'avocat Marseille - Maître Cécile Prost"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Main Title & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Barreau de Marseille</span>
            </div>

            {/* Title - SEO Optimized */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground leading-tight mb-10">
              Avocate à Marseille
              <span className="block text-accent">Droit pénal & Droit de la famille</span>
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="tel:+33662525687"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-gold flex items-center justify-center gap-3 text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                <span>Appeler maintenant</span>
              </motion.a>
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-gold-outline flex items-center justify-center gap-3 text-lg px-8 py-4"
              >
                <Calendar className="w-5 h-5" />
                <span>Prendre rendez-vous</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Quote Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-border shadow-soft-lg">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
                <span className="text-white text-2xl font-serif">"</span>
              </div>

              <div className="space-y-4 text-lg md:text-xl text-foreground leading-relaxed italic">
                <p>Chaque dossier est une histoire humaine.</p>
                <p>Je l'aborde avec <span className="text-accent font-medium not-italic">écoute</span>, <span className="text-accent font-medium not-italic">exigence</span> et <span className="text-accent font-medium not-italic">détermination</span>.</p>
                <p className="font-medium">À vos côtés, sans compromis.</p>
              </div>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-serif text-xl text-foreground">Maître Cécile Prost</p>
                <p className="text-sm text-muted-foreground">Avocate au Barreau de Marseille</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm">Découvrir</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
