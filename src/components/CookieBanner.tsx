import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay display for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem('cookie-consent', 'refused');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-primary border-t border-gold/20 shadow-lg animate-fade-in">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-8">
            <p className="text-primary-foreground text-sm leading-relaxed">
              Ce site utilise des cookies pour mesurer l'audience et améliorer votre expérience. 
              En poursuivant votre navigation, vous acceptez leur utilisation. 
              <Link 
                to="/politique-confidentialite" 
                className="text-gold hover:underline ml-1"
              >
                En savoir plus
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefuse}
              className="border-foreground/30 bg-background text-foreground hover:bg-muted"
            >
              Refuser
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="bg-gold hover:bg-gold-dark text-primary"
            >
              Accepter
            </Button>
          </div>
          <button
            onClick={handleRefuse}
            className="absolute top-4 right-4 md:hidden text-primary-foreground/60 hover:text-primary-foreground"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
