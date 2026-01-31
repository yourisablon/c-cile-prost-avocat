import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Phone, FileText, Home, Users, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';
import CookieBanner from '@/components/CookieBanner';
import SEOHead from '@/components/SEOHead';

const ViolencesConjugalesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const protections = [
    {
      icon: Shield,
      title: "Ordonnance de protection",
      description: "Mesure d'urgence délivrée par le juge aux affaires familiales sous 6 jours. Elle permet d'éloigner l'auteur des violences, d'attribuer le logement à la victime et de statuer provisoirement sur les enfants.",
    },
    {
      icon: Home,
      title: "Attribution du domicile",
      description: "La victime peut obtenir l'attribution exclusive du domicile conjugal, même si elle n'en est pas propriétaire. L'auteur des violences devra quitter les lieux.",
    },
    {
      icon: Users,
      title: "Protection des enfants",
      description: "Le juge peut statuer sur l'exercice de l'autorité parentale, la résidence des enfants et les droits de visite, en veillant à leur sécurité.",
    },
    {
      icon: FileText,
      title: "Procédure pénale",
      description: "Dépôt de plainte, constitution de partie civile pour obtenir réparation du préjudice. Je vous accompagne à chaque étape de la procédure pénale.",
    },
  ];

  const steps = [
    { number: "1", title: "Mise en sécurité", description: "Quitter le domicile si nécessaire, appeler le 17 en cas de danger immédiat" },
    { number: "2", title: "Preuves médicales", description: "Consulter un médecin pour établir un certificat médical constatant les blessures" },
    { number: "3", title: "Dépôt de plainte", description: "Porter plainte au commissariat ou à la gendarmerie" },
    { number: "4", title: "Avocat", description: "Me contacter pour engager les procédures civiles et pénales" },
  ];

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  const faqItems = [
    {
      question: "Comment obtenir une ordonnance de protection à Marseille ?",
      answer: "L'ordonnance de protection est demandée au juge aux affaires familiales. Il faut constituer un dossier avec les preuves des violences (certificats médicaux, témoignages, plaintes). Le juge statue dans un délai de 6 jours."
    },
    {
      question: "Quelles sont les sanctions pour violences conjugales ?",
      answer: "Les violences conjugales sont punies de 3 à 10 ans d'emprisonnement selon leur gravité. Le caractère conjugal constitue une circonstance aggravante."
    },
    {
      question: "Puis-je rester au domicile après des violences conjugales ?",
      answer: "Oui, l'ordonnance de protection peut vous attribuer le domicile conjugal même si vous n'êtes pas propriétaire. L'auteur des violences devra partir."
    }
  ];

  return (
    <>
      <SEOHead
        title="Avocat Violences Conjugales Marseille | Ordonnance de Protection"
        description="Avocat violences conjugales à Marseille. Ordonnance de protection, dépôt de plainte, accompagnement des victimes. Maître Cécile Prost intervient en urgence."
        canonical="https://cecile-prost-avocat.fr/avocat-violences-conjugales-marseille"
        keywords="avocat violences conjugales Marseille, ordonnance de protection Marseille, avocat victime violence Marseille, aide victime violence conjugale"
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
                <span className="text-sm font-medium text-destructive">Protection urgente</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6">
                Violences Conjugales
                <span className="block text-gold">Avocat à Marseille</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                Victime de violences au sein de votre couple ? 
                Vous n'êtes pas seule. Je vous accompagne pour vous protéger et faire valoir vos droits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+33662525687" className="btn-gold flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  Appeler maintenant : 06 62 52 56 87
                </a>
                <button onClick={scrollToContact} className="btn-gold-outline flex items-center justify-center gap-3">
                  Demander un rappel confidentiel
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              {/* Numéros d'urgence */}
              <div className="mt-8 p-4 bg-primary-foreground/10 rounded-xl">
                <p className="text-sm text-primary-foreground/70 mb-2">Numéros d'urgence :</p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:17" className="text-gold font-medium hover:underline">17 - Police/Gendarmerie</a>
                  <a href="tel:3919" className="text-gold font-medium hover:underline">3919 - Violences Femmes Info</a>
                  <a href="tel:114" className="text-gold font-medium hover:underline">114 - SMS d'urgence</a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Protections */}
        <section className="section-padding bg-background" ref={ref}>
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-gold text-sm font-medium uppercase tracking-wider">Protections</span>
              <h2 className="section-title mt-2">Les mesures de protection disponibles</h2>
              <div className="w-16 h-1 bg-gold rounded-full mx-auto mt-4" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {protections.map((protection, index) => (
                <motion.div
                  key={protection.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-secondary/30 rounded-2xl p-8 card-hover"
                >
                  <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-4">
                    <protection.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-medium text-foreground mb-3">{protection.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{protection.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Étapes */}
        <section className="py-20 bg-secondary/30">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground">
                Que faire en cas de violences conjugales ?
              </h2>
            </motion.div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start gap-4 bg-background rounded-xl p-6"
                >
                  <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Accompagnement */}
        <section className="py-20 bg-background">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 text-center">
                Mon accompagnement
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Écoute bienveillante et sans jugement</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Confidentialité absolue</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Intervention en urgence possible</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Aide juridictionnelle acceptée</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Accompagnement civil et pénal</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Suivi personnalisé du dossier</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gold">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6">
              Vous avez besoin d'aide ?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Ne restez pas seule face aux violences. Je suis là pour vous écouter et vous accompagner vers une sortie de crise.
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

export default ViolencesConjugalesPage;
