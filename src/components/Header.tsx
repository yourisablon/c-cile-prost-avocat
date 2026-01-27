import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#about', label: 'À propos' },
    { href: '/#domaines', label: 'Domaines' },
    { href: '/avocat-penal-marseille', label: 'Droit Pénal' },
    { href: '/avocat-droit-famille-marseille', label: 'Droit de la Famille' },
    { href: '/#contact', label: 'Contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        const element = document.querySelector(href.replace('/', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">CP</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-serif text-lg font-medium text-foreground">Cécile Prost</p>
                <p className="text-xs text-muted-foreground">Avocate au Barreau de Marseille</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                link.href.startsWith('/') && !link.href.includes('#') ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+33491000000" className="btn-gold flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>04 91 00 00 00</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-20 lg:hidden"
          >
            <nav className="container-wide py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                link.href.startsWith('/') && !link.href.includes('#') ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-serif font-medium text-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-xl font-serif font-medium text-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <div className="pt-6 border-t border-border">
                <a href="tel:+33491000000" className="btn-gold w-full flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>Appeler le cabinet</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
