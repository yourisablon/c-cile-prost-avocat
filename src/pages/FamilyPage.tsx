import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Heart, Shield, Baby, FileText, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';
import CookieBanner from '@/components/CookieBanner';
import SEOHead from '@/components/SEOHead';

const FamilyPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const specialties = [
    'Urgences familiales',
    'Je ne vois plus mes enfants',
    'Mes enfants sont en danger',
    'Ordonnance de protection',
    'Divorce et garde d\'enfants',
    'Reconnaissance de paternité',
    'Adoption',
  ];

  const services = [
    {
      icon: Heart,
      title: 'Divorce',
      description: 'Accompagnement dans toutes les procédures de divorce : consentement mutuel, divorce contentieux, divorce pour faute. Négociation et médiation.',
    },
    {
      icon: Users,
      title: 'Séparation',
      description: 'Gestion juridique des séparations de couples non mariés (PACS, concubinage). Organisation du patrimoine et des responsabilités parentales.',
    },
    {
      icon: Baby,
      title: 'Garde d\'enfants',
      description: 'Défense de vos droits parentaux. Résidence des enfants, droit de visite et d\'hébergement, autorité parentale.',
    },
    {
      icon: FileText,
      title: 'Pension alimentaire',
      description: 'Fixation, révision ou recouvrement des pensions alimentaires. Calcul selon les besoins des enfants et les ressources des parents.',
    },
    {
      icon: Shield,
      title: 'Violences conjugales',
      description: 'Protection et accompagnement des victimes de violences. Ordonnance de protection, mesures d\'éloignement, procédures pénales.',
    },
    {
      icon: Baby,
      title: 'Protection des mineurs',
      description: 'Assistance éducative, placement, adoption, tutelle. Défense des intérêts de l\'enfant dans toutes les procédures.',
    },
  ];

  const stats = [
    { label: 'Dates en urgence', value: '+30', suffix: 'obtenues devant le juge' },
    { label: 'Dossiers plaidés', value: '+100', suffix: 'devant le JAF' },
  ];

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <>
      <SEOHead
        title="Avocat Droit de la Famille Marseille | Maître Cécile Prost"
        description="Avocate en droit de la famille à Marseille. Divorce, garde d'enfants, pension alimentaire, violences conjugales. Accompagnement humain et défense de vos droits."
        canonical="https://cecile-prost-avocat.fr/avocat-droit-famille-marseille"
        keywords="avocat droit famille Marseille, avocat divorce Marseille, avocat garde enfants Marseille, pension alimentaire Marseille, avocat violences conjugales Marseille"
      />
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary text-primary-foreground">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <Link to="/" className="text-gold text-sm font-medium uppercase tracking-wider hover:text-gold-light transition-colors">
                ← Retour à l'accueil
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mt-6 mb-6">
                Avocat en Droit de la Famille
                <span className="block text-gold">à Marseille</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                Accompagnement bienveillant dans vos démarches familiales. 
                Divorce, séparation, garde d'enfants : je vous guide avec humanité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+33662525687" className="btn-gold flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  Appeler : 06 62 52 56 87
                </a>
                <button onClick={scrollToContact} className="btn-gold-outline flex items-center justify-center gap-3">
                  Prendre rendez-vous
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-background" ref={ref}>
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-gold text-sm font-medium uppercase tracking-wider">Expertises</span>
              <h2 className="section-title mt-2">Mes domaines d'intervention en droit de la famille</h2>
              <div className="w-16 h-1 bg-gold rounded-full mx-auto mt-4" />
              
              {/* Specialties list */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gold/10 text-gold border border-gold/20 rounded-full text-sm font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-secondary/30 rounded-2xl p-8 card-hover"
                >
                  <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-medium text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground">Les chiffres du cabinet</h2>
              <div className="w-16 h-1 bg-gold rounded-full mx-auto mt-4" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-background rounded-2xl p-8 text-center shadow-soft"
                >
                  <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">{stat.value}</div>
                  <div className="text-lg font-medium text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.suffix}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Emotional Section */}
        <section className="py-20 bg-background">
          <div className="container-narrow text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6">
              Une approche humaine du droit de la famille
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Les procédures familiales sont souvent des moments difficiles. 
              Au-delà de l'expertise juridique, je vous apporte une écoute attentive 
              et un accompagnement personnalisé pour traverser cette étape avec sérénité.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mon objectif : trouver des solutions équilibrées qui préservent 
              l'intérêt de tous, et particulièrement celui des enfants.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gold">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6">
              Besoin d'un avocat en droit de la famille à Marseille ?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Divorce, séparation, garde d'enfants... Je vous accompagne 
              avec bienveillance et professionnalisme.
            </p>
            <a
              href="tel:+33662525687"
              className="inline-flex items-center gap-3 bg-white text-foreground font-medium px-8 py-4 rounded-full hover:shadow-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCallButton />
      <CookieBanner />
    </>
  );
};

export default FamilyPage;
