import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scale, Shield, Gavel, AlertTriangle, Clock, FileText, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';
import CookieBanner from '@/components/CookieBanner';
import SEOHead from '@/components/SEOHead';

const PenalPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const specialties = [
    'Violences',
    'Violences intrafamiliales',
    'Non représentation d\'enfant',
    'Infractions sexuelles',
    'Crimes intrafamiliaux',
  ];

  const services = [
    {
      icon: AlertTriangle,
      title: 'Garde à vue',
      description: 'Assistance immédiate dès votre placement en garde à vue. Je vous accompagne durant tous les interrogatoires et veille au respect de vos droits.',
    },
    {
      icon: Clock,
      title: 'Enquêtes / Instructions',
      description: 'Assistance lors des auditions, confrontations, reconstitutions...',
    },
    {
      icon: Gavel,
      title: 'Tribunal correctionnel',
      description: 'Défense devant le tribunal correctionnel pour les délits. Plaidoirie et argumentation juridique pour votre défense.',
    },
    {
      icon: Gavel,
      title: 'Cour d\'assises',
      description: 'Défense devant la Cour d\'assises pour les crimes. Expérience des procès d\'assises et préparation minutieuse.',
    },
    {
      icon: FileText,
      title: 'Aménagement de peine',
      description: 'Demandes de libération conditionnelle, placement sous surveillance électronique, semi-liberté et autres aménagements.',
    },
  ];

  const stats = [
    { label: 'Garde à vue', value: '+50', suffix: 'réalisées' },
    { label: 'Tribunal correctionnel', value: '+50', suffix: 'dossiers plaidés' },
    { label: 'Cour d\'assises', value: '3', suffix: 'dossiers plaidés' },
  ];

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <>
      <SEOHead
        title="Avocat Droit Pénal Marseille | Maître Cécile Prost"
        description="Avocate pénaliste à Marseille. Défense en garde à vue, comparution immédiate, tribunal correctionnel, cour d'assises. Assistance 24h/24 pour urgences."
        canonical="https://cecile-prost-avocat.fr/avocat-penal-marseille"
        keywords="avocat pénal Marseille, avocate pénaliste Marseille, avocat garde à vue Marseille, avocat comparution immédiate Marseille, défense pénale Marseille"
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
                Avocat en Droit Pénal
                <span className="block text-gold">à Marseille</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                Défense pénale rigoureuse et accompagnement humain. 
                Disponibilité 24h/24 pour les urgences (garde à vue, comparution immédiate).
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+33662525687" className="btn-gold flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  Urgence : 06 62 52 56 87
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
              <h2 className="section-title mt-2">Mes domaines d'intervention en droit pénal</h2>
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

            <div className="grid md:grid-cols-3 gap-8">
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

        {/* CTA */}
        <section className="py-20 bg-gold">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6">
              Besoin d'une défense pénale à Marseille ?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Que vous soyez en garde à vue ou confronté à une procédure pénale, 
              je suis à vos côtés pour défendre vos droits.
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

export default PenalPage;
