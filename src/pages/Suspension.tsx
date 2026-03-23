import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { CheckCircle2, Activity } from 'lucide-react';

export const Suspension = () => {
  const services = [
    "Suspension System Diagnosis",
    "Shock Absorber Service",
    "Strut Replacement",
    "Complete Suspension Repair"
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeading 
        title="FRONT END SUSPENSION" 
        subtitle="Smooth Rides Start Here"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-video bg-steel-gunmetal bevel-cut overflow-hidden border border-white/10">
            <img 
              src="/images/suspension.png" 
              alt="Suspension Service" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-8 -left-8 bg-precision-blue p-8 bevel-cut hidden md:block">
            <Activity size={48} className="text-white mb-4" />
            <p className="font-display text-2xl">MAXIMUM COMFORT</p>
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-70">SHOCKS, STRUTS & CHASSIS CARE</p>
          </div>
        </div>

        <div className="space-y-6 text-steel-aluminum font-light leading-relaxed order-1 lg:order-2">
          <p className="text-xl text-steel-white font-medium">
            National Tire and Auto is your trusted destination for top-tier front-end suspension services in Central Louisiana.
          </p>
          <p>
            Our skilled technicians are dedicated to ensuring your vehicle's suspension system operates flawlessly, providing a smooth and safe ride on the region's diverse roads. We understand that vehicle maintenance can be a hassle, which is why we prioritize customer service just as much as we do automotive expertise.
          </p>
          <p>
            At National Tire and Auto, you're not just a customer; you're a valued part of our community. We're here to address your concerns, answer your questions, and tailor our services to your specific needs.
          </p>
          
          <div className="pt-6">
            <Link to="/contact">
              <Button size="lg">Inspect My Suspension</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2">
          <h3 className="text-3xl mb-8">SUSPENSION SERVICES</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service} className="flex items-center gap-3">
                <CheckCircle2 className="text-precision-blue shrink-0" size={20} />
                <span className="text-steel-white uppercase tracking-wide text-sm">{service}</span>
              </div>
            ))}
          </div>
        </Card>
        
        <Card className="bg-industrial-red/10 border-industrial-red/30">
          <h3 className="text-2xl mb-6">TRUST POINTS</h3>
          <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-steel-aluminum">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-industrial-red" /> Suspension System Diagnosis & Repair</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-industrial-red" /> Expert Technicians</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-industrial-red" /> Over 20 Years of Experience</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-industrial-red" /> Certified and Licensed</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};
