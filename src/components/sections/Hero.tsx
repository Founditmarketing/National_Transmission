import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { COMPANY_INFO } from '../../constants';
import { ArrowRight, Zap } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] pb-32 flex items-center overflow-hidden industrial-grid">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-precision-blue-dark/50 skew-x-[-15deg] translate-x-1/4 z-0" />
      
      {/* Animated Tire/Wheel Placeholder */}
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] hidden lg:block z-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-full h-full relative"
        >
          {/* Outer Tire */}
          <div className="absolute inset-0 rounded-full border-[40px] border-steel-gunmetal shadow-[0_0_50px_rgba(0,0,0,0.5)]" />
          {/* Inner Rim */}
          <div className="absolute inset-[60px] rounded-full border-[15px] border-steel-aluminum/20 flex items-center justify-center">
            <div className="w-full h-2 bg-steel-aluminum/10 absolute rotate-0" />
            <div className="w-full h-2 bg-steel-aluminum/10 absolute rotate-45" />
            <div className="w-full h-2 bg-steel-aluminum/10 absolute rotate-90" />
            <div className="w-full h-2 bg-steel-aluminum/10 absolute rotate-135" />
          </div>
          {/* Center Hub */}
          <div className="absolute inset-[180px] rounded-full bg-precision-blue/20 border-4 border-precision-blue flex items-center justify-center">
            <Zap className="text-precision-blue w-12 h-12" />
          </div>
        </motion.div>
        
        {/* Particle Sparks Simulation */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 300],
              y: [0, (Math.random() - 0.5) * 300]
            }}
            transition={{ 
              duration: 1 + Math.random(), 
              repeat: Infinity, 
              delay: Math.random() * 2 
            }}
            className={cn(
              "absolute top-1/2 left-1/2 w-1 h-1 rounded-full",
              i % 2 === 0 ? "bg-industrial-red" : "bg-precision-blue-light"
            )}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-precision-blue" />
              <span className="font-mono text-sm uppercase tracking-[0.4em] text-precision-blue font-bold">
                ESTABLISHED 2004
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-6 leading-[0.85] tracking-tighter">
              TRANSMISSION<br />
              <span className="text-industrial-red">REPAIR</span> &<br />
              AUTO SERVICE
            </h1>
            
            <p className="text-xl md:text-2xl text-steel-aluminum mb-10 max-w-xl font-light leading-relaxed">
              Pineville & Alexandria, Louisiana's trusted shop for transmission repair, brake service, tire sales, and complete auto care — serving Central Louisiana for over 20 years.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex items-center gap-2" onClick={() => navigate('/contact')}>
                View Services <ArrowRight size={20} />
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/contact')}>
                Get Free Estimate
              </Button>
            </div>
            
          </motion.div>
        </div>
      </div>

      {/* Stats Strip — pinned to bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10 border-t border-b border-white/15 bg-steel-black/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <p className="font-mono text-precision-blue text-2xl font-bold">20+</p>
            <p className="text-xs uppercase tracking-widest text-steel-aluminum">Years Experience</p>
          </div>
          <div>
            <p className="font-mono text-precision-blue text-2xl font-bold">2</p>
            <p className="text-xs uppercase tracking-widest text-steel-aluminum">Convenient Locations</p>
          </div>
          <div className="hidden md:block">
            <p className="font-mono text-precision-blue text-2xl font-bold">100%</p>
            <p className="text-xs uppercase tracking-widest text-steel-aluminum">Certified Technicians</p>
          </div>
        </div>
      </div>
    </section>
  );
};
