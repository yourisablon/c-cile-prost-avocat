import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Headphones, Clock, Shield, Eye } from 'lucide-react';

const TrustCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const trustPoints = [
    {
      icon: Headphones,
      title: 'Écoute réelle',
      description: 'Je prends le temps de comprendre votre situation en profondeur, sans jugement, avec empathie.',
    },
    {
      icon: Clock,
      title: 'Disponibilité rapide',
      description: 'Réponse rapide à vos appels et messages. Rendez-vous en urgence possible selon les situations.',
    },
    {
      icon: Shield,
      title: 'Défense engagée',
      description: 'Je me bats avec détermination pour vos droits, à chaque étape de la procédure.',
    },
    {
      icon: Eye,
      title: 'Transparence totale',
      description: 'Honoraires clairs dès le départ, suivi régulier de votre dossier, communication directe.',
    },
  ];

  return (
    <section className="section-padding bg-primary text-primary-foreground" ref={ref}>
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium uppercase tracking-wider">Engagement</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mt-2">
            Pourquoi me faire confiance
          </h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:border-gold/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">{point.title}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustCards;
