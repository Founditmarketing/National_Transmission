import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CheckCircle2, Settings } from 'lucide-react';

export const Alignment = () => {
  const benefits = [
    "Enhanced tire longevity",
    "Improved fuel efficiency",
    "Safer driving experience",
    "Smoother ride quality"
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeading 
        title="FRONT END ALIGNMENT" 
        subtitle="Precision That Keeps You Straight"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="space-y-6 text-steel-aluminum font-light leading-relaxed">
          <p className="text-xl text-steel-white font-medium">
            At National Tire and Auto, we understand the importance of a properly aligned front end for your vehicle's overall performance and safety.
          </p>
          <p>
            A correct alignment enhances tire longevity, fuel efficiency, and most importantly, it promotes a safe driving experience. From diagnosing alignment issues to making precise adjustments, we prioritize accuracy and quality in every service we provide.
          </p>
          <p>
            Trust us to bring your vehicle back on the straight path, delivering a smoother ride and peace of mind on the road. Our state-of-the-art alignment equipment ensures factory-spec precision for every vehicle.
          </p>
          
          <div className="pt-6">
            <Button size="lg">Schedule Alignment</Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-video bg-steel-gunmetal bevel-cut overflow-hidden border border-white/10">
            <img 
              src="https://picsum.photos/seed/alignment/800/600" 
              alt="Alignment Service" 
              className="w-full h-full object-cover opacity-50"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-precision-blue p-8 bevel-cut hidden md:block">
            <Settings size={48} className="text-white mb-4" />
            <p className="font-display text-2xl">LASER PRECISION</p>
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-70">COMPUTERIZED 4-WHEEL ALIGNMENT</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2">
          <h3 className="text-3xl mb-8">BENEFITS OF PROPER ALIGNMENT</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckCircle2 className="text-precision-blue shrink-0" size={20} />
                <span className="text-steel-white uppercase tracking-wide text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </Card>
        
        <Card className="bg-industrial-red/10 border-industrial-red/30">
          <h3 className="text-2xl mb-6">TRUST POINTS</h3>
          <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-steel-aluminum">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-industrial-red" /> Front End Alignment Specialists</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-industrial-red" /> Excellent Customer Service</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-industrial-red" /> Over 20 Years of Experience</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-industrial-red" /> Certified and Licensed</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};
