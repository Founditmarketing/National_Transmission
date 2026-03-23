import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CheckCircle2, CircleDot } from 'lucide-react';

export const Tires = () => {
  const services = [
    "Tire Sales (all major brands)",
    "Tire Repair",
    "Tire Balancing",
    "Tire Rotation",
    "Tire Alignment",
    "Help choosing the right tires for your needs"
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeading 
        title="TIRES" 
        subtitle="The Foundation of Your Performance"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="space-y-6 text-steel-aluminum font-light leading-relaxed">
          <p className="text-xl text-steel-white font-medium">
            National Tire and Auto, nestled in the heart of Central Louisiana, is your premier destination for all your tire needs.
          </p>
          <p>
            We offer a wide selection of high-quality tires to suit any vehicle and budget, ensuring you find the perfect fit for your needs. Our knowledgeable staff is here to assist you in selecting the right set of tires, taking into consideration factors like vehicle type, driving habits, and local road conditions.
          </p>
          <p>
            Beyond tire sales, we provide top-notch tire services, including mounting, balancing, rotations, and alignments to ensure your tires perform at their best. At National Tire and Auto, we take pride in offering not just tires, but also peace of mind, safety, and long-lasting value.
          </p>
          
          <div className="pt-6">
            <Button size="lg">Get a Tire Quote</Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-video bg-steel-gunmetal bevel-cut overflow-hidden border border-white/10">
            <img 
              src="https://picsum.photos/seed/tires/800/600" 
              alt="Tire Service" 
              className="w-full h-full object-cover opacity-50"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-precision-blue p-8 bevel-cut hidden md:block">
            <CircleDot size={48} className="text-white mb-4" />
            <p className="font-display text-2xl">PREMIUM BRANDS</p>
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-70">MICHELIN • GOODYEAR • BRIDGESTONE</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2">
          <h3 className="text-3xl mb-8">SERVICES OFFERED</h3>
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
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-industrial-red" /> Repair, Balance, Alignment or Replace</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-industrial-red" /> We help you choose the right tires</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-industrial-red" /> Excellent Customer Service</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-industrial-red" /> Over 20 Years of Experience</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-industrial-red" /> Certified and Licensed</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};
