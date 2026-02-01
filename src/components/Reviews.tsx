import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Static reviews as fallback (in production, these would come from Google Reviews API)
  const reviews = [
    {
      name: 'Marie L.',
      date: 'Janvier 2026',
      rating: 5,
      text: 'Maître Prost m\'a accompagnée durant une période très difficile de divorce. Son écoute et sa disponibilité m\'ont beaucoup rassurée. Je recommande vivement.',
    },
    {
      name: 'Thomas D.',
      date: 'Décembre 2025',
      rating: 5,
      text: 'Excellente avocate pénaliste. Elle a su me défendre avec détermination lors d\'une comparution immédiate. Professionnelle et humaine.',
    },
    {
      name: 'Sophie M.',
      date: 'Novembre 2025',
      rating: 5,
      text: 'Très satisfaite de l\'accompagnement pour la garde de mes enfants. Maître Prost explique clairement les procédures et reste toujours disponible.',
    },
  ];

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium uppercase tracking-wider">Témoignages</span>
          <h2 className="section-title mt-2">Ce que disent mes clients</h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto mt-4" />
          
          {/* Google Rating */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-lg font-medium text-foreground">5.0</span>
            <span className="text-muted-foreground">sur Google</span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-background rounded-2xl p-8 shadow-soft relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/20" />
              
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  alt="Google"
                  className="h-5 opacity-50"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/search?client=ms-android-samsung-ss&hs=4Hw9&sca_esv=a4272fd1b67d5ab0&sxsrf=ANbL-n4krh5QgjAB_U4s0qMdYU_zou8FyA:1769960170982&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qObp73uL7l7FLfRYkHxRMg8SRayXqSYDW3F_Fp2jaM2jdFQg2Gbiyhp1dMwbNLuSAEE5ZZ_eF9aDOEp1OEe3yUk28NbrHI_GcXJZtIVZ89OBYui-G41z3-uz-cQsn5E_3aTniBWI%3D&q=CECILE+PROST+-+AVOCAT+PENAL+ET+FAMILLE+Reviews&sa=X&ved=2ahUKEwjX4Ie6z7iSAxVA9LsIHThqEwkQ0bkNegQIVRAH&biw=980&bih=1910&dpr=3&aic=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-dark transition-colors inline-flex items-center gap-2"
          >
            Voir tous les avis sur Google
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
