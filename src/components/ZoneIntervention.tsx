import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const ZoneIntervention = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="zone" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Zone d'intervention */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-background rounded-2xl p-8 lg:p-10 shadow-soft"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-medium text-foreground">Zone d'intervention</h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>Cabinet basé à Marseille</strong> – interventions dans les départements <span className="text-accent font-medium">13</span>, <span className="text-accent font-medium">83</span> et <span className="text-accent font-medium">04</span>.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Bouches-du-Rhône • Var • Alpes-de-Haute-Provence
            </p>
          </motion.div>

          {/* Délais */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background rounded-2xl p-8 lg:p-10 shadow-soft"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-medium text-foreground">Prise de rendez-vous</h3>
            </div>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Rendez-vous sous 1 semaine</strong> – plus rapidement en cas d'urgence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="tel:+33662525687"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-gold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Appeler maintenant
              </motion.a>
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-gold-outline"
              >
                Prendre rendez-vous
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ZoneIntervention;
