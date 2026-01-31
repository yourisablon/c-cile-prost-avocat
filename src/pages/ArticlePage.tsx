import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MapPin, ArrowLeft, Clock, Scale } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import StickyCallButton from '@/components/StickyCallButton';
import CookieBanner from '@/components/CookieBanner';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getArticleBySlug, categoryLabels } from '@/data/articles';

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/articles-juridiques-marseille" replace />;
  }

  const faqItems = article.content.faq.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <SEOHead
        title={article.metaTitle}
        description={article.metaDescription}
        canonical={`https://cecile-prost-avocat.fr/articles/${article.slug}`}
        type="article"
        keywords={`${categoryLabels[article.category]} Marseille, avocat ${article.category} Marseille, ${article.title.toLowerCase()}`}
        faqItems={faqItems}
      />

      <Header />

      <main className="pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 py-4">
          <div className="container-wide">
            <Link
              to="/articles-juridiques-marseille"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux articles
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <article className="py-12 md:py-16">
          <div className="container-wide max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className="mb-4 border-gold/30 text-gold bg-gold/5"
              >
                {categoryLabels[article.category]}
              </Badge>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {article.title}
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {article.content.introduction}
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 mb-12 pb-8 border-b border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-gold" />
                  <span>RDV sous 1 semaine</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Scale className="w-4 h-4 text-gold" />
                  <span>Aide juridictionnelle acceptée</span>
                </div>
              </div>
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {/* Comprendre la situation */}
              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm font-bold">1</span>
                  {article.content.comprendreSituation.title}
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  {article.content.comprendreSituation.content}
                </p>
              </section>

              {/* Que faire immédiatement */}
              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm font-bold">2</span>
                  {article.content.queFaireImmediatement.title}
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  {article.content.queFaireImmediatement.content}
                </p>
              </section>

              {/* Rôle de l'avocate */}
              <section className="mb-10 bg-secondary/30 p-6 md:p-8 rounded-xl">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm font-bold">3</span>
                  {article.content.roleAvocate.title}
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  {article.content.roleAvocate.content}
                </p>
              </section>

              {/* Procédures */}
              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm font-bold">4</span>
                  {article.content.procedures.title}
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  {article.content.procedures.content}
                </p>
              </section>

              {/* Délais et honoraires */}
              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm font-bold">5</span>
                  {article.content.delaisHonoraires.title}
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  {article.content.delaisHonoraires.content}
                </p>
              </section>

              {/* FAQ */}
              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Questions fréquentes
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {article.content.faq.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium text-foreground">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Conclusion */}
              <section className="mb-10 border-l-4 border-gold pl-6">
                <p className="text-foreground/90 leading-relaxed font-medium italic">
                  {article.content.conclusion}
                </p>
              </section>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 bg-gradient-to-br from-secondary/50 to-secondary/30 rounded-2xl p-8 md:p-10"
            >
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Besoin d'un accompagnement juridique ?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold" />
                  <a href="tel:+33662525687" className="text-foreground font-medium hover:text-gold transition-colors">
                    06 62 52 56 87
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span className="text-foreground">20 cours Pierre Puget, 13006 Marseille</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-gold">
                  <a href="/#contact">Prendre rendez-vous</a>
                </Button>
                <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                  <a href="tel:+33662525687">
                    <Phone className="w-4 h-4 mr-2" />
                    Urgence – appeler
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Related Links */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to={article.relatedServiceLink}
                className="text-gold hover:text-gold-dark font-medium text-sm underline underline-offset-4 transition-colors"
              >
                → Voir la page {article.category === 'droit-penal' ? 'Droit Pénal' : 'Droit de la Famille'}
              </Link>
              {article.relatedUrgenceLink && (
                <Link
                  to={article.relatedUrgenceLink}
                  className="text-gold hover:text-gold-dark font-medium text-sm underline underline-offset-4 transition-colors"
                >
                  → Urgences enfants
                </Link>
              )}
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <StickyCallButton />
      <CookieBanner />
    </>
  );
};

export default ArticlePage;
