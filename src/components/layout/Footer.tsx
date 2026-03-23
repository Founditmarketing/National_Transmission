import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../../constants';

export const Footer = () => {
  return (
    <footer className="bg-precision-blue-dark pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-precision-blue/5 skew-x-[-20deg] translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-precision-blue flex items-center justify-center bevel-cut">
                <span className="text-white font-display text-xl">N</span>
              </div>
              <span className="font-display text-2xl tracking-tighter">NATIONAL TIRE & AUTO</span>
            </Link>
            <p className="text-steel-aluminum leading-relaxed font-light">
              Central Louisiana's premier destination for precision automotive care. Over 20 years of excellence in tires, brakes, and suspension.
            </p>
            <div className="flex gap-4">
              <a 
                href={COMPANY_INFO.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-precision-blue transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-precision-blue transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-precision-blue" />
              OUR SERVICES
            </h3>
            <ul className="space-y-4">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={service.path}
                    className="text-steel-aluminum hover:text-precision-blue transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-precision-blue" />
              GET IN TOUCH
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Phone size={18} className="text-precision-blue mt-1" />
                <div>
                  <p className="text-xs text-steel-aluminum font-mono uppercase tracking-widest mb-1">Call Us</p>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="text-lg font-mono hover:text-precision-blue transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-precision-blue mt-1" />
                <div>
                  <p className="text-xs text-steel-aluminum font-mono uppercase tracking-widest mb-1">Visit Us</p>
                  <p className="text-steel-white">{COMPANY_INFO.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-precision-blue mt-1" />
                <div>
                  <p className="text-xs text-steel-aluminum font-mono uppercase tracking-widest mb-1">Hours</p>
                  <p className="text-steel-white">{COMPANY_INFO.hours}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="text-xl mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-precision-blue" />
              LOCATIONS
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 border-l-2 border-precision-blue">
                <p className="font-display text-lg">TIOGA</p>
                <p className="text-sm text-steel-aluminum">Main Service Center</p>
              </div>
              <div className="p-4 bg-white/5 border-l-2 border-precision-blue">
                <p className="font-display text-lg">ALEXANDRIA</p>
                <p className="text-sm text-steel-aluminum">Convenient Downtown Access</p>
              </div>
              <p className="text-xs text-steel-aluminum italic mt-4">
                Proudly serving Central Louisiana for over two decades.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-steel-aluminum text-sm font-light">
            © {new Date().getFullYear()} National Tire & Auto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
