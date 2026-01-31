import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, AlertTriangle, Phone, Clock, FileText, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';
import CookieBanner from '@/components/CookieBanner';
import SEOHead from '@/components/SEOHead';

const UrgenceEnfantsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const situations = [
    {
      icon: AlertTriangle,
      title: "Je ne vois plus mes enfants",
      description: "L'autre parent refuse de vous présenter vos enfants ou ne respecte pas le droit de visite fixé par le juge. C'est un délit pénal de non-représentation d'enfant.",
      actions: ["Saisine en urgence du juge aux affaires familiales", "Dépôt de plainte pour non-représentation d'enfant", "Demande de modification du droit de visite"]
    },
    {
      icon: Shield,
      title: "Mes enfants sont en danger",
      description: "Vous suspectez des violences, négligences ou maltraitances sur vos enfants. La protection des enfants est une priorité absolue du droit français.",
      actions: ["Signalement au procureur de la République", "Saisine du juge des enfants", "Demande de mesure de protection en urgence"]
    },
    {
      icon: FileText,
      title: "Ordonnance de protection",
      description: "En cas de violences au sein du couple, l'ordonnance de protection permet de protéger rapidement la victime et les enfants.",
      actions: ["Constitution du dossier (certificats médicaux, témoignages)", "Saisine du JAF en urgence", "Mesures d'éloignement et attribution du domicile"]
    },
  ];

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  const faqItems = [
    {
      question: "Que faire si je ne vois plus mes enfants à Marseille ?",
      answer: "Contactez immédiatement un avocat pour saisir le juge aux affaires familiales en urgence. La non-représentation d'enfant est un délit pénal passible de sanctions."
    },
    {
      question: "Comment signaler un enfant en danger ?",
      answer: "Vous pouvez signaler au 119 (numéro national), déposer un signalement auprès du procureur, ou saisir directement le juge des enfants avec l'aide d'un avocat."
    },
    {
      question: "Combien de temps pour obtenir une ordonnance de protection ?",
      answer: "Le juge aux affaires familiales doit statuer dans un délai de 6 jours à compter de la fixation de la date d'audience."
    }
  ];

  return (
    <>
      <SEOHead
        title="Avocat Urgence Enfants Marseille | Non-représentation, Enfant en danger"
        description="Avocat urgence enfants à Marseille. Non-représentation d'enfant, enfant en danger, ordonnance de protection. Intervention rapide de Maître Cécile Prost. Appel 24h/24."
        canonical="https://cecile-prost-avocat.fr/avocat-urgence-enfants-marseille"
        keywords="avocat urgence enfants Marseille, non représentation enfant Marseille, enfant en danger avocat, ordonnance de protection Marseille"
        faqItems={faqItems}
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
              
              {/* Badge Urgence */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/30 mt-6 mb-4">
                <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                <span className="text-sm font-medium text-destructive">Urgence</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6">
                Urgence : Vos Enfants
                <span className="block text-gold">Avocat à Marseille</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                Vous ne voyez plus vos enfants ? Ils sont en danger ? 
                <strong className="text-primary-foreground"> J'agis avec réactivité et rigueur</strong> pour faire évoluer la situation en urgence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+33662525687" className="btn-gold flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  Appeler maintenant : 06 62 52 56 87
                </a>
                <button onClick={scrollToContact} className="btn-gold-outline flex items-center justify-center gap-3">
                  Demander un rappel urgent
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Situations */}
        <section className="section-padding bg-background" ref={ref}>
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-gold text-sm font-medium uppercase tracking-wider">Situations d'urgence</span>
              <h2 className="section-title mt-2">J'interviens immédiatement</h2>
              <div className="w-16 h-1 bg-gold rounded-full mx-auto mt-4" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {situations.map((situation, index) => (
                <motion.div
                  key={situation.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-secondary/30 rounded-2xl p-8 border border-border"
                >
                  <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-6">
                    <situation.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-medium text-foreground mb-3">{situation.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{situation.description}</p>
                  <ul className="space-y-2">
                    {situation.actions.map((action, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{action}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-secondary/30">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground">
                Mon engagement en urgence
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-medium text-foreground mb-2">Réponse immédiate</h3>
                <p className="text-sm text-muted-foreground">Je vous rappelle dans l'heure en situation d'urgence</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-medium text-foreground mb-2">Procédure rapide</h3>
                <p className="text-sm text-muted-foreground">Saisine du tribunal en référé sous 24-48h</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-medium text-foreground mb-2">Accompagnement total</h3>
                <p className="text-sm text-muted-foreground">Je vous guide à chaque étape de la procédure</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gold">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6">
              Situation urgente concernant vos enfants ?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              N'attendez pas. Chaque jour compte pour protéger vos droits et ceux de vos enfants.
            </p>
            <a
              href="tel:+33662525687"
              className="inline-flex items-center gap-3 bg-white text-foreground font-medium px-8 py-4 rounded-full hover:shadow-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant : 06 62 52 56 87
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

export default UrgenceEnfantsPage;
