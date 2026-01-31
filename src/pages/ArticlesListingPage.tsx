import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import ArticleCard from '@/components/ArticleCard';
import StickyCallButton from '@/components/StickyCallButton';
import CookieBanner from '@/components/CookieBanner';
import { articles, categoryLabels, ArticleCategory } from '@/data/articles';
import { cn } from '@/lib/utils';

const categories: (ArticleCategory | 'all')[] = [
  'all',
  'urgences-familiales',
  'droit-penal',
  'droit-famille',
  'violences-conjugales',
  'questions-frequentes',
];

const ArticlesListingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | 'all'>('all');

  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter((article) => article.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="Articles & conseils juridiques – Avocate à Marseille | Cécile Prost"
        description="Articles et conseils juridiques rédigés par Maître Cécile Prost, avocate à Marseille. Droit pénal, droit de la famille, violences conjugales, urgences familiales."
        canonical="https://cecile-prost-avocat.fr/articles-juridiques-marseille"
        keywords="articles juridiques Marseille, conseils avocat Marseille, droit pénal Marseille, droit famille Marseille, violences conjugales avocat"
      />
      
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/30 to-background py-16 md:py-20">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Articles & conseils juridiques – Avocate à Marseille
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cette page regroupe des articles rédigés par Maître Cécile Prost afin d'aider 
                les justiciables à mieux comprendre leurs droits, notamment en droit pénal et 
                en droit de la famille, avec un focus sur les situations urgentes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border">
          <div className="container-wide">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                    selectedCategory === category
                      ? 'bg-gold text-white shadow-md'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  )}
                >
                  {category === 'all' ? 'Tous les articles' : categoryLabels[category]}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12 md:py-16">
          <div className="container-wide">
            {filteredArticles.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {filteredArticles.map((article, index) => (
                  <motion.div
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ArticleCard article={article} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <p className="text-center text-muted-foreground py-12">
                Aucun article dans cette catégorie pour le moment.
              </p>
            )}
          </div>
        </section>

        {/* SEO Footer Text */}
        <section className="py-8 bg-secondary/20">
          <div className="container-wide">
            <p className="text-sm text-muted-foreground text-center">
              Cabinet d'avocat à Marseille – Maître Cécile Prost accompagne ses clients dans 
              les Bouches-du-Rhône (13), le Var (83) et les Alpes-de-Haute-Provence (04).
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCallButton />
      <CookieBanner />
    </>
  );
};

export default ArticlesListingPage;
