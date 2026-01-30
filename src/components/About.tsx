import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scale, Users, Clock, Award, CheckCircle } from 'lucide-react';
import avocatPortrait from '@/assets/avocat-portrait.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Scale, label: 'Années d\'expérience', value: '5' },
    { icon: Users, label: 'Clients accompagnés', value: '+100' },
    { icon: Clock, label: 'Disponibilité', value: 'Grande' },
    { icon: Award, label: 'Taux de satisfaction', value: '98%' },
  ];

  const results = [
    'Obtention régulière d\'audiences en urgence',
    'Des pères ont pu revoir leurs enfants après une longue séparation',
    'Des femmes et familles ont été mises sous protection',
  ];

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
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
                alt="Maître Cécile Prost, Avocate à Marseille spécialisée en droit pénal et droit de la famille"
                className="w-full max-w-md mx-auto rounded-2xl shadow-soft-lg"
              />
              {/* Gold accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl gradient-gold -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl border-2 border-accent/30 -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-accent text-sm font-medium uppercase tracking-wider">À propos</span>
            <h2 className="section-title mt-2">
              Maître Cécile Prost
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mb-6" />
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Maître Cécile Prost</strong>, avocate au <strong className="text-foreground">Barreau de Marseille</strong>, 
                intervient en <span className="text-accent font-medium">droit pénal</span> et en <span className="text-accent font-medium">droit de la famille</span>.
              </p>
              <p>
                À l'écoute et disponible, elle défend chaque dossier avec <strong className="text-foreground">rigueur</strong> et <strong className="text-foreground">combativité</strong>.
              </p>
              <p>
                Elle ne vous impose jamais un contentieux inutile, mais s'engage pleinement à vos côtés 
                lorsque la défense de vos intérêts l'exige.
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
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-2xl font-serif font-medium text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Results Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10 p-6 bg-secondary/50 rounded-xl border border-border"
            >
              <h3 className="font-serif text-lg font-medium text-foreground mb-4">Résultats concrets</h3>
              <ul className="space-y-3">
                {results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
