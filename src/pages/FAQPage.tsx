import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';
import CookieBanner from '@/components/CookieBanner';
import SEOHead from '@/components/SEOHead';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const faqItems = [
    // Droit pénal
    {
      question: "Comment se passe une garde à vue à Marseille ?",
      answer: "La garde à vue est une mesure de rétention permettant aux enquêteurs d'interroger une personne suspectée d'avoir commis une infraction. Dès le début de la garde à vue, vous avez le droit de demander l'assistance d'un avocat. Je peux intervenir à tout moment, 24h/24, pour vous assister lors des interrogatoires et veiller au respect de vos droits.",
      category: "penal"
    },
    {
      question: "Qu'est-ce qu'une comparution immédiate ?",
      answer: "La comparution immédiate est une procédure rapide où vous êtes jugé dans les heures suivant votre garde à vue. C'est une situation d'urgence qui nécessite une défense réactive. En tant qu'avocate pénaliste à Marseille, j'interviens en urgence pour préparer votre défense et vous représenter devant le tribunal.",
      category: "penal"
    },
    {
      question: "Quelles sont les peines pour violences conjugales ?",
      answer: "Les violences conjugales sont sévèrement punies par la loi. Les peines varient selon la gravité des faits : de 3 ans d'emprisonnement pour des violences sans ITT à 10 ans en cas de violences habituelles ou ayant entraîné une incapacité de travail. Je défends aussi bien les victimes que les personnes mises en cause, en veillant toujours au respect des droits de chacun.",
      category: "penal"
    },
    {
      question: "Comment porter plainte pour violences à Marseille ?",
      answer: "Vous pouvez porter plainte au commissariat, à la gendarmerie, ou directement auprès du procureur de la République. Je vous accompagne dans cette démarche en vous aidant à constituer un dossier solide, à obtenir un certificat médical, et à vous constituer partie civile pour demander réparation.",
      category: "penal"
    },
    // Droit de la famille
    {
      question: "Comment divorcer à Marseille ?",
      answer: "Il existe plusieurs types de divorce : par consentement mutuel (le plus rapide), pour acceptation du principe de rupture, pour altération définitive du lien conjugal, ou pour faute. Selon votre situation, je vous conseille la procédure la plus adaptée et vous accompagne jusqu'à la prononciation du divorce par le juge aux affaires familiales de Marseille.",
      category: "famille"
    },
    {
      question: "Comment obtenir la garde de mes enfants ?",
      answer: "La garde des enfants est fixée selon leur intérêt supérieur. Le juge aux affaires familiales examine plusieurs critères : les capacités éducatives des parents, les conditions de vie, les liens affectifs, la disponibilité, et surtout l'avis des enfants s'ils sont assez grands. Je vous aide à préparer votre dossier pour démontrer vos qualités parentales.",
      category: "famille"
    },
    {
      question: "Que faire si je ne vois plus mes enfants ?",
      answer: "La non-représentation d'enfant est un délit pénal. Si l'autre parent refuse de vous présenter vos enfants, plusieurs recours existent : saisir le juge aux affaires familiales en urgence, déposer plainte pour non-représentation d'enfant. J'agis avec réactivité pour rétablir vos droits parentaux le plus rapidement possible.",
      category: "famille"
    },
    {
      question: "Comment obtenir une ordonnance de protection ?",
      answer: "L'ordonnance de protection est une mesure d'urgence en cas de violences conjugales. Elle permet d'éloigner l'auteur des violences, d'attribuer le logement à la victime et de statuer sur les enfants. Le juge aux affaires familiales de Marseille doit statuer sous 6 jours. Je vous accompagne pour constituer le dossier et vous représenter à l'audience.",
      category: "famille"
    },
    {
      question: "Comment fonctionne la pension alimentaire ?",
      answer: "La pension alimentaire est calculée selon les besoins des enfants et les ressources de chaque parent. Elle couvre l'entretien et l'éducation des enfants. En cas de non-paiement, plusieurs recours existent : procédure de paiement direct, saisie sur salaire, plainte pour abandon de famille. Je vous aide à faire respecter vos droits.",
      category: "famille"
    },
    // Questions pratiques
    {
      question: "Comment se déroule un premier rendez-vous avec un avocat ?",
      answer: "Lors du premier rendez-vous, j'écoute attentivement votre situation et analyse votre dossier. Je vous explique vos droits, les différentes options qui s'offrent à vous, et je vous propose une stratégie adaptée. Les honoraires sont fixés de manière transparente dès cette première consultation.",
      category: "pratique"
    },
    {
      question: "Acceptez-vous l'aide juridictionnelle ?",
      answer: "Oui, le cabinet accepte l'aide juridictionnelle. Cette aide permet aux personnes aux revenus modestes de bénéficier d'une prise en charge totale ou partielle des frais d'avocat. Je peux vous aider à vérifier votre éligibilité et à constituer votre dossier de demande.",
      category: "pratique"
    },
    {
      question: "Dans quel délai puis-je obtenir un rendez-vous ?",
      answer: "En situation normale, je vous propose un rendez-vous sous une semaine. En cas d'urgence (garde à vue, comparution immédiate, violences, enfant en danger), j'interviens immédiatement, y compris en dehors des heures de bureau. N'hésitez pas à m'appeler directement au 06 62 52 56 87.",
      category: "pratique"
    },
    {
      question: "Intervenez-vous en dehors de Marseille ?",
      answer: "Mon cabinet est situé à Marseille (20 cours Pierre Puget, 13006), mais j'interviens dans toute la région PACA, notamment dans les départements des Bouches-du-Rhône (13), du Var (83) et des Alpes-de-Haute-Provence (04).",
      category: "pratique"
    },
  ];

  const faqForSchema = faqItems.map(item => ({
    question: item.question,
    answer: item.answer,
  }));

  const navigate = useNavigate();
  
  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const penalFAQ = faqItems.filter(item => item.category === 'penal');
  const familleFAQ = faqItems.filter(item => item.category === 'famille');
  const pratiqueFAQ = faqItems.filter(item => item.category === 'pratique');

  return (
    <>
      <SEOHead
        title="FAQ Avocat Marseille | Questions Fréquentes Droit Pénal & Famille"
        description="Réponses aux questions fréquentes sur le droit pénal et le droit de la famille à Marseille. Garde à vue, divorce, garde d'enfants, violences conjugales. Maître Cécile Prost."
        canonical="https://cecile-prost-avocat.fr/faq-avocat-marseille"
        keywords="FAQ avocat Marseille, questions avocat pénal, questions droit famille, aide juridictionnelle Marseille"
        faqItems={faqForSchema}
      />
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-primary text-primary-foreground">
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
              <h1 className="text-4xl md:text-5xl font-serif font-medium mt-6 mb-6">
                Questions fréquentes
                <span className="block text-gold">Avocat à Marseille</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Retrouvez les réponses aux questions les plus courantes sur le droit pénal 
                et le droit de la famille.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="section-padding bg-background" ref={ref}>
          <div className="container-narrow">
            {/* Droit Pénal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-6">
                Droit Pénal à Marseille
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {penalFAQ.map((item, index) => (
                  <AccordionItem key={index} value={`penal-${index}`} className="border border-border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-medium text-foreground hover:text-gold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-6">
                <Link to="/avocat-penal-marseille" className="text-gold hover:underline inline-flex items-center gap-2">
                  En savoir plus sur le droit pénal <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Droit de la Famille */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-6">
                Droit de la Famille à Marseille
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {familleFAQ.map((item, index) => (
                  <AccordionItem key={index} value={`famille-${index}`} className="border border-border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-medium text-foreground hover:text-gold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-6">
                <Link to="/avocat-droit-famille-marseille" className="text-gold hover:underline inline-flex items-center gap-2">
                  En savoir plus sur le droit de la famille <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Questions Pratiques */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-6">
                Questions pratiques
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {pratiqueFAQ.map((item, index) => (
                  <AccordionItem key={index} value={`pratique-${index}`} className="border border-border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-medium text-foreground hover:text-gold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gold">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6">
              Une question spécifique ?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Chaque situation est unique. Contactez-moi pour un conseil personnalisé adapté à votre cas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33662525687"
                className="inline-flex items-center justify-center gap-3 bg-white text-foreground font-medium px-8 py-4 rounded-full hover:shadow-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                06 62 52 56 87
              </a>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-3 border-2 border-white text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all"
              >
                Prendre rendez-vous
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCallButton />
      <CookieBanner />
    </>
  );
};

export default FAQPage;
