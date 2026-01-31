import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">CP</span>
              </div>
              <div>
                <p className="font-serif text-lg font-medium">Maître Cécile Prost</p>
                <p className="text-xs text-primary-foreground/60">Avocate au Barreau de Marseille</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md">
              Avocate spécialisée en droit pénal et droit de la famille à Marseille. 
              Accompagnement personnalisé et défense rigoureuse de vos droits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/#about" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/avocat-penal-marseille" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  Droit Pénal
                </Link>
              </li>
              <li>
                <Link to="/avocat-droit-famille-marseille" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  Droit de la Famille
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:+33662525687" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  06 62 52 56 87
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:avocat.prost@gmail.com" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  avocat.prost@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  20 Cours Pierre Puget<br />
                  13006 Marseille
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} Cabinet Cécile Prost. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/mentions-legales" className="text-primary-foreground/50 hover:text-gold transition-colors text-sm">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-primary-foreground/50 hover:text-gold transition-colors text-sm">
                RGPD
              </Link>
              <a 
                href="https://www.barreau-marseille.avocat.fr/fr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/50 hover:text-gold transition-colors text-sm"
              >
                Barreau de Marseille
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
