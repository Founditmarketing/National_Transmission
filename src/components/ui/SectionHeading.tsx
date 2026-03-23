import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeading = ({ title, subtitle, className, align = 'left' }: SectionHeadingProps) => {
  return (
    <div className={cn('mb-12', align === 'center' ? 'text-center' : 'text-left', className)}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-2"
        style={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}
      >
        <div className="h-[2px] w-12 bg-industrial-red" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-industrial-red font-bold">
          National Tire & Auto
        </span>
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl mb-4 relative inline-block"
      >
        {title}
        <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-industrial-red/30 skew-x-[-45deg]" />
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-steel-aluminum max-w-2xl text-lg font-light leading-relaxed"
          style={{ margin: align === 'center' ? '0 auto' : '0' }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
