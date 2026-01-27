import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const EmotionalCopy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gold/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/5 translate-x-1/2 translate-y-1/2" />

      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Quote className="w-12 h-12 text-gold/30 mx-auto mb-8" />
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Quand vous traversez une épreuve judiciaire, vous avez besoin de plus qu'un avocat.
            </p>
            <p className="text-foreground font-medium">
              Vous avez besoin d'une personne qui vous <span className="text-gold">écoute</span>, 
              vous <span className="text-gold">explique</span>, 
              vous <span className="text-gold">défend</span> et reste 
              <span className="text-gold"> présente à chaque étape</span>.
            </p>
            <p>
              Ma mission est simple : vous accompagner avec humanité, vous défendre avec détermination, 
              et vous apporter des réponses claires dans des moments souvent difficiles.
            </p>
            <p>
              <strong className="text-foreground">Chaque dossier est unique. Chaque situation mérite une attention totale.</strong>
            </p>
            <p>
              Que vous soyez confronté à une procédure pénale ou à une situation familiale délicate, 
              je mets mon expertise juridique au service de votre sérénité.
            </p>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10"
          >
            <div className="w-16 h-1 bg-gold rounded-full mx-auto" />
            <p className="mt-6 font-serif text-xl text-foreground">Maître Cécile Prost</p>
            <p className="text-sm text-muted-foreground">Avocate au Barreau de Marseille</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalCopy;
