import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { SEOHead } from './seo/SEOHead';
import {
  SchemaMarkup,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from './seo/SchemaMarkup';
import { COMPANY_INFO } from '../constants';
import { ServiceData, getServiceBySlug } from '../data/serviceData';
import {
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Phone,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { useState } from 'react';

// ─── FAQ Accordion ──────────────────────────────────────────────

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 bg-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-6 text-left gap-4"
        aria-expanded={open}
      >
        <span className="text-lg font-display uppercase tracking-wide">{question}</span>
        {open ? (
          <ChevronUp className="text-industrial-red shrink-0" size={20} />
        ) : (
          <ChevronDown className="text-precision-blue shrink-0" size={20} />
        )}
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="px-6 pb-6"
        >
          <p className="text-steel-aluminum font-light leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

// ─── Service Page Template ──────────────────────────────────────

interface ServicePageTemplateProps {
  service: ServiceData;
}

export const ServicePageTemplate = ({ service }: ServicePageTemplateProps) => {
  const relatedServices = service.relatedSlugs
    .map(getServiceBySlug)
    .filter(Boolean) as ServiceData[];

  const schemas = [
    generateServiceSchema({
      name: service.title,
      description: service.metaDescription,
      slug: service.slug,
      priceRange: service.priceRange,
    }),
    generateFAQSchema(service.faqs),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/#services' },
      { name: service.title, url: `/${service.slug}` },
    ]),
  ];

  return (
    <>
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalPath={`/${service.slug}`}
      />
      <SchemaMarkup data={schemas} />

      {/* Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden industrial-grid">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-precision-blue-dark/40 skew-x-[-15deg] translate-x-1/4 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-steel-aluminum">
                <li><Link to="/" className="hover:text-precision-blue transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-industrial-red">{service.title}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-industrial-red" />
              <span className="font-mono text-sm uppercase tracking-[0.3em] text-industrial-red font-bold">
                {service.category} Service
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 font-display uppercase tracking-tighter leading-[0.9]">
              {service.title}
            </h1>

            <p className="text-xl md:text-2xl text-steel-aluminum max-w-2xl font-light leading-relaxed mb-8">
              {service.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}>
                <Button size="lg" className="flex items-center gap-2">
                  <Phone size={20} /> Call for Free Estimate
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Request Online Quote
                </Button>
              </Link>
            </div>

            {service.priceRange && (
              <p className="mt-6 font-mono text-sm text-steel-aluminum">
                <span className="text-precision-blue font-bold">Typical Cost:</span>{' '}
                {service.priceRange}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-steel-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-6 text-steel-aluminum font-light leading-relaxed text-lg">
              {service.content.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Warning Signs */}
              <Card>
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="text-industrial-red" size={24} />
                  <h3 className="text-xl">SIGNS YOU NEED THIS SERVICE</h3>
                </div>
                <ul className="space-y-4">
                  {service.signs.map((sign) => (
                    <li key={sign} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-industrial-red mt-2 shrink-0" />
                      <span className="text-steel-aluminum text-sm">{sign}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Contact Card */}
              <Card className="bg-precision-blue/10 border-precision-blue/30">
                <h3 className="text-xl mb-4">GET A FREE ESTIMATE</h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                    className="flex items-center gap-3 text-precision-blue hover:text-precision-blue-light transition-colors"
                  >
                    <Phone size={18} />
                    <span className="font-mono text-lg font-bold">{COMPANY_INFO.phone}</span>
                  </a>
                  <div className="flex items-start gap-3 text-steel-aluminum">
                    <MapPin size={18} className="mt-1 shrink-0" />
                    <span className="text-sm">{COMPANY_INFO.address}</span>
                  </div>
                  <p className="text-xs text-steel-aluminum font-mono uppercase tracking-widest">
                    {COMPANY_INFO.hours}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-steel-gunmetal/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={`${service.title} FAQ`}
            subtitle="Answers to the most common questions our customers ask."
          />
          <div className="max-w-3xl space-y-4">
            {service.faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-steel-black">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="RELATED SERVICES"
              subtitle="You may also need these services."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((related, i) => (
                <Card key={related.slug} delay={i * 0.1}>
                  <h3 className="text-xl mb-3 group-hover:text-industrial-red transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-steel-aluminum text-sm font-light mb-4 line-clamp-3">
                    {related.content[0].slice(0, 150)}...
                  </p>
                  <Link
                    to={`/${related.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-industrial-red hover:text-industrial-red-bright transition-colors"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-industrial-red relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-30" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tighter mb-4">
            READY TO GET STARTED?
          </h2>
          <p className="text-xl font-light mb-8 max-w-2xl mx-auto">
            Contact National Tire & Auto today for a free estimate on {service.title.toLowerCase()}.
            Over 20 years of trusted service in Central Louisiana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 flex items-center gap-2">
                <Phone size={20} /> {COMPANY_INFO.phone}
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" className="bg-steel-black hover:bg-steel-gunmetal text-white">
                Request Free Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
