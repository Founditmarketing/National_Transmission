import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { ALL_SERVICES, SERVICE_CATEGORIES } from '../../data/serviceData';
import { Settings2, Cog, Disc, CircleDot, Activity, Wrench, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Settings2, Cog, Disc, CircleDot, Activity, Wrench,
};

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-steel-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="ENGINEERED SERVICES"
          subtitle="We don't just fix cars; we restore performance. From transmission rebuilds to tire sales, each service has its own dedicated team of specialists."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CATEGORIES.map((cat, index) => {
            const Icon = iconMap[cat.icon] || Wrench;
            const catServices = ALL_SERVICES.filter(
              (s) => s.category === cat.label || (cat.id === 'general' && s.category === 'General')
            );
            const primaryService = catServices[0];

            return (
              <Card key={cat.id} delay={index * 0.08} className="flex flex-col h-full">
                <div className="mb-6 w-14 h-14 bg-precision-blue/20 flex items-center justify-center bevel-cut group-hover:bg-industrial-red/20 transition-colors duration-300">
                  <Icon className="text-precision-blue group-hover:text-industrial-red transition-colors duration-300" size={28} />
                </div>

                <h3 className="text-2xl mb-3 group-hover:text-industrial-red transition-colors">
                  {cat.label}
                </h3>

                <ul className="space-y-2 mb-6 flex-grow">
                  {catServices.map((service) => (
                    <li key={service.slug}>
                      <Link
                        to={`/${service.slug}`}
                        className="text-sm text-steel-aluminum hover:text-precision-blue transition-colors flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-industrial-red shrink-0" />
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                {primaryService && (
                  <Link
                    to={`/${primaryService.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-industrial-red hover:text-industrial-red-bright transition-colors"
                  >
                    View {cat.label} Services <ArrowRight size={16} />
                  </Link>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
