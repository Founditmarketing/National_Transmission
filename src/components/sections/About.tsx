import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  const trustPoints = [
    "Excellent Customer Service",
    "Certified and Licensed",
    "Over 20 Years of Experience",
    "2 Locations: Tioga & Alexandria",
    "Nationwide Warranty",
    "Free Estimates"
  ];

  return (
    <section className="py-24 bg-steel-gunmetal/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-steel-gunmetal bevel-cut overflow-hidden relative group">
              <img 
                src="/images/about.png" 
                alt="Professional Mechanic" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-black via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-8 left-8 bg-industrial-red p-6 bevel-cut shadow-2xl">
                <p className="font-display text-4xl leading-none">20+</p>
                <p className="font-mono text-[10px] uppercase tracking-widest">Years of Excellence</p>
              </div>
            </div>
            
            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-industrial-red" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-precision-blue" />
          </motion.div>

          {/* Content Side */}
          <div>
            <SectionHeading 
              title="WHERE STEEL MEETS SKILL" 
              subtitle="Central Louisiana's trusted partner for automotive reliability."
            />
            
            <div className="space-y-6 text-steel-aluminum font-light leading-relaxed mb-10">
              <p>
                Welcome to our premier tire and auto shop, nestled in the center of Louisiana. Our commitment to quality, safety, and exceptional customer service sets us apart. When you choose us for your tire needs, you're not just buying a product; you're investing in peace of mind.
              </p>
              <p>
                We understand that tires are the foundation of your vehicle's performance and safety, which is why we stock a wide range of top-tier brands to suit every need and budget. What truly sets us apart is our unwavering dedication to your satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {trustPoints.map((point, i) => (
                <motion.div 
                  key={point}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-industrial-red" size={20} />
                  <span className="text-sm font-medium tracking-wide uppercase">{point}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/contact">
              <Button variant="primary">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
