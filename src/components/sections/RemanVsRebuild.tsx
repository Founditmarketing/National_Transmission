import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { ShieldCheck, AlertTriangle, Settings2 } from 'lucide-react';

export const RemanVsRebuild = () => {
  return (
    <section className="py-24 bg-steel-black relative overflow-hidden industrial-grid">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="REMANUFACTURED VS. REBUILT" 
          subtitle="Know the difference. At National Tire & Auto, we don't just patch things up — we restore them to factory standards."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          {/* VS Divider */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-industrial-red rounded-full hidden lg:flex items-center justify-center z-10 border-4 border-steel-black">
            <span className="font-display text-2xl italic">VS</span>
          </div>

          {/* Rebuilt Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-10 bevel-cut border border-white/10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-steel-gunmetal flex items-center justify-center bevel-cut">
                <AlertTriangle className="text-yellow-500" size={24} />
              </div>
              <h3 className="text-3xl">REBUILT COMPONENTS</h3>
            </div>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-2 h-2 bg-yellow-500 mt-2 shrink-0" />
                <p className="text-steel-aluminum">Only the failed parts are replaced, leaving other worn components at risk.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 bg-yellow-500 mt-2 shrink-0" />
                <p className="text-steel-aluminum">Component may not perform to original manufacturer specifications.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 bg-yellow-500 mt-2 shrink-0" />
                <p className="text-steel-aluminum">Lower initial cost, but significantly higher risk of repeat failure.</p>
              </li>
            </ul>
          </motion.div>

          {/* Remanufactured Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-industrial-red/10 p-10 bevel-cut border border-industrial-red/30"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-industrial-red flex items-center justify-center bevel-cut">
                <ShieldCheck className="text-white" size={24} />
              </div>
              <h3 className="text-3xl">REMANUFACTURED</h3>
            </div>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-2 h-2 bg-industrial-red mt-2 shrink-0" />
                <p className="text-steel-white">Every part with potential wear is replaced, regardless of current condition.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 bg-industrial-red mt-2 shrink-0" />
                <p className="text-steel-white">Restores the component to original factory specifications and tolerances.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 bg-industrial-red mt-2 shrink-0" />
                <p className="text-steel-white">Designed for maximum reliability, longevity, and peace of mind.</p>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-precision-blue p-8 bevel-cut flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <Settings2 className="text-white w-12 h-12 shrink-0" />
            <div>
              <h4 className="text-2xl mb-1">OUR PROMISE</h4>
              <p className="text-steel-aluminum font-light">At National Tire & Auto, we REMANUFACTURE — not just rebuild. Every component is brought to the highest standards.</p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="font-mono text-xs uppercase tracking-[0.3em] bg-white/10 px-4 py-2">NATIONWIDE WARRANTY INCLUDED</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
