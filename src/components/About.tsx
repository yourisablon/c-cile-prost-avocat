import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scale, Users, Clock, Award } from 'lucide-react';
import avocatPortrait from '@/assets/avocat-portrait.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Scale, label: 'Années d\'expérience', value: '15+' },
    { icon: Users, label: 'Clients accompagnés', value: '500+' },
    { icon: Clock, label: 'Disponibilité', value: '24/7' },
    { icon: Award, label: 'Taux de satisfaction', value: '98%' },
  ];

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={avocatPortrait}
                alt="Maître Cécile Prost, Avocate à Marseille"
                className="w-full max-w-md mx-auto rounded-2xl shadow-soft-lg"
              />
              {/* Gold accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl gradient-gold -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl border-2 border-gold/30 -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold text-sm font-medium uppercase tracking-wider">À propos</span>
            <h2 className="section-title mt-2">
              Maître Cécile Prost
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mb-6" />
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Avocate inscrite au <strong className="text-foreground">Barreau de Marseille</strong>, je suis spécialisée 
                en <strong className="text-foreground">droit pénal</strong> et en <strong className="text-foreground">droit de la famille</strong>.
              </p>
              <p>
                Mon approche repose sur quatre piliers essentiels : l'<span className="text-gold font-medium">écoute active</span>, 
                la <span className="text-gold font-medium">disponibilité totale</span>, la <span className="text-gold font-medium">rigueur juridique</span> 
                et l'<span className="text-gold font-medium">accompagnement humain</span>.
              </p>
              <p>
                Chaque situation est unique et mérite une attention particulière. Je m'engage à vous accompagner 
                avec professionnalisme et humanité, quelle que soit la complexité de votre dossier.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="text-2xl font-serif font-medium text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
