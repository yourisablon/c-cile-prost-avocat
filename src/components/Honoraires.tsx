import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, CheckCircle } from 'lucide-react';

const Honoraires = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="honoraires" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-accent text-sm font-medium uppercase tracking-wider">Tarifs</span>
          <h2 className="section-title mt-2">Honoraires</h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4 mb-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-secondary/30 rounded-2xl p-8 lg:p-10 border border-border"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-medium text-foreground mb-2">Transparence et accessibilité</h3>
              <p className="text-muted-foreground">Des honoraires clairs et adaptés à votre situation</p>
            </div>
          </div>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-foreground font-medium">Aide Juridictionnelle acceptée</p>
                <p className="text-sm text-muted-foreground">Le cabinet accepte l'Aide Juridictionnelle pour les personnes éligibles.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-foreground font-medium">Honoraires forfaitaires et transparents</p>
                <p className="text-sm text-muted-foreground">Hors aide juridictionnelle, les honoraires sont fixés de manière forfaitaire et transparente.</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Honoraires;
