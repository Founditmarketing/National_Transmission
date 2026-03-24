import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MapPin, ChevronDown, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../../constants';
import { ALL_SERVICES, SERVICE_CATEGORIES } from '../../data/serviceData';
import { cn } from '../../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeMobileCat, setActiveMobileCat] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setActiveMobileCat(null);
  }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const staticLinks = [
    { name: 'Home', path: '/' },
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
            <img src="/favicon-transparent.svg" alt="NTA Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl leading-none tracking-tighter">NATIONAL</span>
            <span className="font-mono text-[10px] text-industrial-red tracking-widest leading-none">TIRE & AUTO</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className={cn(
              'font-display uppercase text-sm tracking-widest hover:text-industrial-red transition-colors relative group',
              location.pathname === '/' ? 'text-industrial-red' : 'text-steel-white'
            )}
          >
            Home
            <span className={cn(
              'absolute -bottom-1 left-0 h-[2px] bg-industrial-red transition-all duration-300',
              location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
            )} />
          </Link>

          {/* Services Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={cn(
                'font-display uppercase text-sm tracking-widest hover:text-industrial-red transition-colors flex items-center gap-1',
                servicesOpen ? 'text-industrial-red' : 'text-steel-white'
              )}
            >
              Services <ChevronDown size={14} className={cn('transition-transform', servicesOpen && 'rotate-180')} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-steel-black/98 backdrop-blur-xl border border-white/10 shadow-2xl w-[800px] p-8"
                >
                  <div className="grid grid-cols-3 gap-6">
                    {SERVICE_CATEGORIES.map((cat) => {
                      const catServices = ALL_SERVICES.filter(s => s.category === cat.label || (cat.id === 'general' && s.category === 'General'));
                      return (
                        <div key={cat.id}>
                          <h4 className="font-display text-sm uppercase tracking-widest text-industrial-red mb-3 pb-2 border-b border-white/10">
                            {cat.label}
                          </h4>
                          <ul className="space-y-2">
                            {catServices.map((service) => (
                              <li key={service.slug}>
                                <Link
                                  to={`/${service.slug}`}
                                  className="text-sm text-steel-aluminum hover:text-precision-blue transition-colors block py-0.5"
                                >
                                  {service.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/contact"
            className={cn(
              'font-display uppercase text-sm tracking-widest hover:text-industrial-red transition-colors relative group',
              location.pathname === '/contact' ? 'text-industrial-red' : 'text-steel-white'
            )}
          >
            Contact
            <span className={cn(
              'absolute -bottom-1 left-0 h-[2px] bg-industrial-red transition-all duration-300',
              location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
            )} />
          </Link>

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
            className="fixed inset-0 top-[72px] bg-steel-black z-40 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col p-8 gap-4">
              <Link to="/" className="text-3xl font-display uppercase tracking-tighter text-steel-white">Home</Link>

              {/* Mobile Services Accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="text-3xl font-display uppercase tracking-tighter text-steel-white flex items-center gap-2"
              >
                Services <ChevronDown size={20} className={cn('transition-transform', mobileServicesOpen && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-4 space-y-2 overflow-hidden"
                  >
                    {SERVICE_CATEGORIES.map((cat) => {
                      const catServices = ALL_SERVICES.filter(s => s.category === cat.label || (cat.id === 'general' && s.category === 'General'));
                      const isActive = activeMobileCat === cat.id;
                      return (
                        <div key={cat.id}>
                          <button
                            onClick={() => setActiveMobileCat(isActive ? null : cat.id)}
                            className="flex items-center gap-2 text-lg font-display uppercase tracking-wider text-industrial-red py-2 w-full text-left"
                          >
                            <ChevronRight size={14} className={cn('transition-transform', isActive && 'rotate-90')} />
                            {cat.label}
                          </button>
                          {isActive && (
                            <div className="pl-6 space-y-2 pb-2">
                              {catServices.map((service) => (
                                <Link
                                  key={service.slug}
                                  to={`/${service.slug}`}
                                  className="block text-steel-aluminum text-sm py-1 hover:text-precision-blue"
                                >
                                  {service.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link to="/contact" className="text-3xl font-display uppercase tracking-tighter text-steel-white">Contact</Link>

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
