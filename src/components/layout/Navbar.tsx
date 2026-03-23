import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../../constants';
import { cn } from '../../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tires', path: '/tires' },
    { name: 'Brakes', path: '/brakes' },
    { name: 'Alignment', path: '/alignment' },
    { name: 'Suspension', path: '/suspension' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b',
        scrolled 
          ? 'bg-steel-black/95 backdrop-blur-md py-3 border-white/10' 
          : 'bg-transparent py-6 border-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <img src="/favicon.png" alt="NTA Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl leading-none tracking-tighter">NATIONAL</span>
            <span className="font-mono text-[10px] text-industrial-red tracking-widest leading-none">TIRE & AUTO</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'font-display uppercase text-sm tracking-widest hover:text-industrial-red transition-colors relative group',
                location.pathname === link.path ? 'text-industrial-red' : 'text-steel-white'
              )}
            >
              {link.name}
              <span className={cn(
                'absolute -bottom-1 left-0 h-[2px] bg-industrial-red transition-all duration-300',
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              )} />
            </Link>
          ))}
          <a 
            href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-2 bg-industrial-red/10 border border-industrial-red/30 px-4 py-2 rounded-sm hover:bg-industrial-red/20 transition-all group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-industrial-red/20 animate-pulse" />
            <Phone size={16} className="text-industrial-red group-hover:animate-pulse relative z-10" />
            <span className="font-mono text-sm font-bold text-industrial-red relative z-10">{COMPANY_INFO.phone}</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-steel-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[72px] bg-steel-black z-40 lg:hidden industrial-grid"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      'text-4xl font-display uppercase tracking-tighter',
                      location.pathname === link.path ? 'text-industrial-red' : 'text-steel-white'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-steel-aluminum">
                  <Phone size={20} className="text-industrial-red" />
                  <span className="font-mono">{COMPANY_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-steel-aluminum">
                  <MapPin size={20} className="text-industrial-red" />
                  <span className="text-sm">{COMPANY_INFO.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
