import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const StickyCallButton = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      className="sticky-call-btn"
    >
      <a
        href="tel:+33662525687"
        className="btn-gold w-full flex items-center justify-center gap-3 py-4 shadow-gold-lg"
      >
        <Phone className="w-5 h-5" />
        <span className="font-medium">Appeler le cabinet</span>
      </a>
    </motion.div>
  );
};

export default StickyCallButton;
