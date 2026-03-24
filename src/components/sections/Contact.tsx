import { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { COMPANY_INFO } from '../../constants';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send');
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please call us instead.');
    }
  };

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

            {/* Map */}
            <div className="aspect-video bg-steel-gunmetal bevel-cut overflow-hidden border border-white/10 relative group">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1xHqTFQwnapsi7LWVdT2_cvNRMtZmi_Q&ehbc=2E312F&noprof=1"
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

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <CheckCircle2 className="text-green-500" size={64} />
                <h4 className="text-2xl font-display uppercase">MESSAGE SENT!</h4>
                <p className="text-steel-aluminum font-light">
                  Thank you for contacting National Tire & Auto. We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-precision-blue font-mono text-sm uppercase tracking-widest hover:text-precision-blue-light transition-colors mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-widest text-steel-aluminum">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-steel-black border border-white/10 p-4 focus:border-industrial-red outline-none transition-colors font-mono"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-widest text-steel-aluminum">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-steel-black border border-white/10 p-4 focus:border-industrial-red outline-none transition-colors font-mono"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-steel-aluminum">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-steel-black border border-white/10 p-4 focus:border-industrial-red outline-none transition-colors font-mono"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-steel-aluminum">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-steel-black border border-white/10 p-4 focus:border-industrial-red outline-none transition-colors font-mono appearance-none"
                  >
                    <option value="">Select a Service</option>
                    <option>Transmission Repair</option>
                    <option>Transmission Rebuild</option>
                    <option>Transmission Flush</option>
                    <option>CV Joint / Drivetrain Repair</option>
                    <option>Brake Service</option>
                    <option>Tire Service</option>
                    <option>Wheel Alignment</option>
                    <option>Suspension / Shocks & Struts</option>
                    <option>Check Engine Light Diagnostics</option>
                    <option>Oil Change</option>
                    <option>Other / General Maintenance</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-steel-aluminum">Message / Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-steel-black border border-white/10 p-4 focus:border-industrial-red outline-none transition-colors font-mono resize-none"
                    placeholder="Tell us about your vehicle needs..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-3 bg-industrial-red/10 border border-industrial-red/30 p-4">
                    <AlertTriangle className="text-industrial-red shrink-0" size={20} />
                    <p className="text-sm text-steel-aluminum">{errorMsg}</p>
                  </div>
                )}

                <Button size="lg" className="w-full flex items-center justify-center gap-2" disabled={status === 'loading'}>
                  {status === 'loading' ? (
                    <><Loader2 size={20} className="animate-spin" /> Sending...</>
                  ) : (
                    'Send Request'
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
