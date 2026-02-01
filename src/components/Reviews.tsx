import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  // Real reviews from Google (5.0 - 40 avis)
  const reviews = [
    {
      name: 'Célia P.',
      date: 'Novembre 2025',
      rating: 5,
      text: 'Merci à Maître Prost, elle m\'a accompagnée du début à la fin de la procédure avec un grand professionnalisme et une grande gentillesse. Elle a su répondre à mes questions de façon très humaine et rassurante. Je recommande à toute personne qui cherche une avocate dévouée et disponible.',
      badge: 'Local Guide',
    },
    {
      name: 'Driss E.',
      date: 'Janvier 2026',
      rating: 5,
      text: 'Une avocate très à l\'écoute, rassurante et compétente. Elle a su me mettre en confiance et ses conseils précis m\'ont permis d\'obtenir un résultat très satisfaisant. Une professionnelle rare et humaine.',
    },
    {
      name: 'Paula',
      date: 'Juillet 2025',
      rating: 5,
      text: 'Maître Prost m\'a accompagnée avec une efficacité remarquable et une grande humanité dans mes démarches pour faire respecter mes droits de mère. Grâce à son professionnalisme, son écoute et son engagement, j\'ai pu faire valoir mes droits.',
    },
    {
      name: 'Rachid Steven',
      date: 'Juillet 2025',
      rating: 5,
      text: 'Je recommande maître Prost à 100 % ! C\'est une avocate très professionnelle, humaine et à l\'écoute. Dès le premier rendez-vous, elle prend le temps de comprendre votre situation avec beaucoup d\'empathie. La communication est rapide, fluide et toujours très claire. Son accompagnement est d\'une grande qualité, à la fois sur le plan juridique et humain. Une vraie référence dans son domaine !',
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
          className="text-center mb-12"
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
            <span className="text-muted-foreground">sur Google (40 avis)</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-8 md:px-12"
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-background rounded-2xl p-6 md:p-8 shadow-soft relative h-full">
                    <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/20" />
                    
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                      "{review.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <p className="font-medium text-foreground">{review.name}</p>
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                          {review.badge && (
                            <span className="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded-full">
                              {review.badge}
                            </span>
                          )}
                        </div>
                      </div>
                      <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                        alt="Google"
                        className="h-4 md:h-5 opacity-50"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-6" />
            <CarouselNext className="-right-4 md:-right-6" />
          </Carousel>
        </motion.div>

      </div>
    </section>
  );
};

export default Reviews;
