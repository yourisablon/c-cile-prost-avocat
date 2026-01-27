import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scale, Shield, Gavel, AlertTriangle, Clock, FileText, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';
import SEOHead from '@/components/SEOHead';

const PenalPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: AlertTriangle,
      title: 'Garde à vue',
      description: 'Assistance immédiate dès votre placement en garde à vue. Je vous accompagne durant tous les interrogatoires et veille au respect de vos droits.',
    },
    {
      icon: Clock,
      title: 'Comparution immédiate',
      description: 'Défense urgente lors des procédures accélérées. Préparation rapide et efficace de votre dossier pour la meilleure défense possible.',
    },
    {
      icon: Shield,
      title: 'Défense prévenu',
      description: 'Représentation et défense de vos intérêts si vous êtes mis en cause dans une procédure pénale, à tous les stades de la procédure.',
    },
    {
      icon: Scale,
      title: 'Défense victime',
      description: 'Accompagnement et constitution de partie civile pour faire valoir vos droits et obtenir réparation du préjudice subi.',
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
                <a href="tel:+33491000000" className="btn-gold flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  Urgence : 04 91 00 00 00
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
              href="tel:+33491000000"
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
    </>
  );
};

export default PenalPage;
