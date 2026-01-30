import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scale, Users, Shield, AlertTriangle, Heart, Baby, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PracticeAreas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const penalServices = [
    { icon: AlertTriangle, label: 'Violences' },
    { icon: Shield, label: 'Violences intrafamiliales' },
    { icon: Users, label: 'Non représentation d\'enfant' },
    { icon: AlertTriangle, label: 'Infractions sexuelles' },
    { icon: Scale, label: 'Crimes intrafamiliaux' },
  ];

  const familyUrgencies = [
    { icon: AlertTriangle, label: 'Je ne vois plus mes enfants', urgent: true },
    { icon: Shield, label: 'Mes enfants sont en danger', urgent: true },
    { icon: Shield, label: 'Ordonnance de protection', urgent: true },
  ];

  const familyServices = [
    { icon: Heart, label: 'Divorce et garde d\'enfants' },
    { icon: Baby, label: 'Reconnaissance de paternité' },
    { icon: Users, label: 'Adoption' },
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
          <span className="text-accent text-sm font-medium uppercase tracking-wider">Expertise</span>
          <h2 className="section-title mt-2">Domaines d'intervention</h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
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
                <p className="text-muted-foreground text-sm">Avocat droit pénal Marseille</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {penalServices.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <service.icon className="w-4 h-4 text-accent flex-shrink-0" />
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
                <p className="text-muted-foreground text-sm">Avocat droit de la famille Marseille</p>
              </div>
            </div>

            {/* Urgences familiales */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-accent" />
                Urgences familiales
              </h4>
              <ul className="space-y-2 mb-4">
                {familyUrgencies.map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <service.icon className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground/80 font-medium">{service.label}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground italic pl-7">
                J'agis avec réactivité et rigueur pour faire évoluer la situation en urgence.
              </p>
            </div>

            {/* Autres services famille */}
            <ul className="space-y-2 mb-8">
              {familyServices.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <service.icon className="w-4 h-4 text-accent flex-shrink-0" />
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
