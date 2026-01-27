import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scale, Users, Shield, Gavel, Heart, Home, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PracticeAreas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const penalServices = [
    { icon: Shield, label: 'Garde à vue' },
    { icon: Gavel, label: 'Comparution immédiate' },
    { icon: Scale, label: 'Défense prévenu / victime' },
    { icon: Gavel, label: 'Tribunal correctionnel' },
    { icon: Scale, label: 'Cour d\'assises' },
    { icon: Shield, label: 'Aménagement de peine' },
  ];

  const familyServices = [
    { icon: Heart, label: 'Divorce' },
    { icon: Users, label: 'Séparation' },
    { icon: Users, label: 'Garde d\'enfants' },
    { icon: Home, label: 'Pension alimentaire' },
    { icon: Shield, label: 'Violences conjugales' },
    { icon: Users, label: 'Protection des mineurs' },
  ];

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="domaines" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium uppercase tracking-wider">Expertise</span>
          <h2 className="section-title mt-2">Domaines d'intervention</h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Droit Pénal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background rounded-2xl p-8 lg:p-10 shadow-soft card-hover"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center">
                <Scale className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-medium text-foreground">Droit Pénal</h3>
                <p className="text-muted-foreground text-sm">Défense et accompagnement</p>
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-4 mb-8">
              {penalServices.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <service.icon className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{service.label}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={scrollToContact}
                className="btn-gold flex items-center justify-center gap-2"
              >
                Me contacter
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/avocat-penal-marseille"
                className="btn-gold-outline flex items-center justify-center gap-2"
              >
                En savoir plus
              </Link>
            </div>
          </motion.div>

          {/* Droit de la Famille */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-background rounded-2xl p-8 lg:p-10 shadow-soft card-hover"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-medium text-foreground">Droit de la Famille</h3>
                <p className="text-muted-foreground text-sm">Protection et médiation</p>
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-4 mb-8">
              {familyServices.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <service.icon className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{service.label}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={scrollToContact}
                className="btn-gold flex items-center justify-center gap-2"
              >
                Me contacter
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/avocat-droit-famille-marseille"
                className="btn-gold-outline flex items-center justify-center gap-2"
              >
                En savoir plus
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
