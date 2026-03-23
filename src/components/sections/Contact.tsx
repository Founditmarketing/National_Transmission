import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { COMPANY_INFO } from '../../constants';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-24 bg-steel-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <SectionHeading 
              title="GET IN TOUCH" 
              subtitle="Have a question or need an estimate? Our team is ready to help you get back on the road safely."
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-white/5 border-l-2 border-industrial-red bevel-cut">
                <Phone className="text-industrial-red mb-4" size={24} />
                <p className="font-mono text-xs uppercase tracking-widest text-steel-aluminum mb-1">Call Us</p>
                <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="text-xl font-mono hover:text-industrial-red transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              
              <div className="p-6 bg-white/5 border-l-2 border-precision-blue bevel-cut">
                <Mail className="text-precision-blue mb-4" size={24} />
                <p className="font-mono text-xs uppercase tracking-widest text-steel-aluminum mb-1">Email Us</p>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-lg font-mono hover:text-precision-blue transition-colors break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>
              
              <div className="p-6 bg-white/5 border-l-2 border-industrial-red bevel-cut">
                <MapPin className="text-industrial-red mb-4" size={24} />
                <p className="font-mono text-xs uppercase tracking-widest text-steel-aluminum mb-1">Visit Us</p>
                <p className="text-steel-white">{COMPANY_INFO.address}</p>
              </div>
              
              <div className="p-6 bg-white/5 border-l-2 border-precision-blue bevel-cut">
                <Clock className="text-precision-blue mb-4" size={24} />
                <p className="font-mono text-xs uppercase tracking-widest text-steel-aluminum mb-1">Hours</p>
                <p className="text-steel-white">{COMPANY_INFO.hours}</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-steel-gunmetal bevel-cut overflow-hidden border border-white/10 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.333333333333!2d-92.4!3d31.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI0JzAwLjAiTiA5MsKwMjQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(1.2)' }} 
                allowFullScreen 
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
              <div className="absolute inset-0 bg-precision-blue/10 pointer-events-none" />
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-10 bevel-cut border border-white/10 industrial-grid"
          >
            <h3 className="text-3xl mb-8 flex items-center gap-3">
              <Send className="text-industrial-red" size={24} />
              FREE ESTIMATE REQUEST
            </h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-steel-aluminum">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-steel-black border border-white/10 p-4 focus:border-industrial-red outline-none transition-colors font-mono"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-steel-aluminum">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-steel-black border border-white/10 p-4 focus:border-industrial-red outline-none transition-colors font-mono"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-steel-aluminum">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-steel-black border border-white/10 p-4 focus:border-industrial-red outline-none transition-colors font-mono"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-steel-aluminum">Service Needed</label>
                <select className="w-full bg-steel-black border border-white/10 p-4 focus:border-industrial-red outline-none transition-colors font-mono appearance-none">
                  <option>Select a Service</option>
                  <option>Tire Service</option>
                  <option>Brake Service</option>
                  <option>Front End Alignment</option>
                  <option>Front End Suspension</option>
                  <option>Other / General Maintenance</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-steel-aluminum">Message / Details</label>
                <textarea 
                  rows={4}
                  className="w-full bg-steel-black border border-white/10 p-4 focus:border-industrial-red outline-none transition-colors font-mono resize-none"
                  placeholder="Tell us about your vehicle needs..."
                />
              </div>
              
              <Button size="lg" className="w-full">Send Request</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
