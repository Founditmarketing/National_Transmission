import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CheckCircle2, Disc } from 'lucide-react';

export const Brakes = () => {
  const services = [
    "Brake System Diagnosis & Repair",
    "Brake Pads Replacement",
    "Brake Lines Service",
    "Disc Brakes Service",
    "Complete Brake System Maintenance"
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeading 
        title="BRAKES" 
        subtitle="Stopping Power You Can Trust"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-video bg-steel-gunmetal bevel-cut overflow-hidden border border-white/10">
            <img 
              src="/images/brakes.png" 
              alt="Brake Service" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-8 -right-8 bg-precision-blue p-8 bevel-cut hidden md:block">
            <Disc size={48} className="text-white mb-4" />
            <p className="font-display text-2xl">SAFETY FIRST</p>
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-70">PRECISION DIAGNOSTICS & REPAIR</p>
          </div>
        </div>

        <div className="space-y-6 text-steel-aluminum font-light leading-relaxed order-1 lg:order-2">
          <p className="text-xl text-steel-white font-medium">
            National Tire and Auto is your go-to destination for comprehensive brake services in Central Louisiana.
          </p>
          <p>
            Our skilled technicians are experts in brake repair and maintenance, ensuring your vehicle's safety and performance on the road. We recognize that the reliability of your vehicle's brakes is of paramount importance, and that's why we prioritize customer service just as much as we do automotive expertise.
          </p>
          <p>
            At National Tire and Auto, you're more than a customer; you're a valued member of our community. We take the time to listen to your concerns, provide honest recommendations, and ensure your vehicle's brakes are in optimal condition.
          </p>
          
          <div className="pt-6">
            <Button size="lg" variant="secondary">Schedule Brake Inspection</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2">
          <h3 className="text-3xl mb-8">BRAKE SERVICES</h3>
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
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-industrial-red" /> Brake System Diagnosis & Repair</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-industrial-red" /> Pads, Lines, Disc Brakes</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-industrial-red" /> Excellent Customer Service</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-industrial-red" /> Over 20 Years of Experience</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-industrial-red" /> Certified and Licensed</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};
