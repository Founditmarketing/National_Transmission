import { Link } from 'react-router-dom';
import { SERVICES } from '../../constants';
import { Card } from '../ui/Card';
import { SectionHeading } from '../ui/SectionHeading';
import { Disc, CircleDot, Settings, Activity, ArrowRight } from 'lucide-react';

const icons = {
  Tire: CircleDot,
  Brake: Disc,
  Alignment: Settings,
  Suspension: Activity
};

export const Services = () => {
  return (
    <section className="py-24 bg-steel-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="ENGINEERED SERVICES" 
          subtitle="We don't just fix cars; we restore performance. Our specialized services are designed to keep you safe and your vehicle running at peak efficiency."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <Card key={service.id} delay={index * 0.1} className="flex flex-col h-full">
                <div className="mb-6 w-14 h-14 bg-precision-blue/20 flex items-center justify-center bevel-cut group-hover:bg-industrial-red/20 transition-colors duration-300">
                  <Icon className="text-precision-blue group-hover:text-industrial-red transition-colors duration-300" size={32} />
                </div>
                
                <h3 className="text-2xl mb-4 group-hover:text-industrial-red transition-colors">{service.title}</h3>
                <p className="text-steel-aluminum font-light mb-8 flex-grow">
                  {service.description}
                </p>
                
                <Link 
                  to={service.path}
                  className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-industrial-red hover:text-industrial-red-bright transition-colors"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
      
      {/* Decorative side text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right pointer-events-none opacity-5 hidden xl:block">
        <span className="text-9xl font-display uppercase tracking-widest">PRECISION</span>
      </div>
    </section>
  );
};
