import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  key?: string | number;
}

export const Card = ({ children, className, delay = 0 }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className={cn(
        'relative bg-steel-gunmetal/50 border border-white/10 p-6 bevel-cut group overflow-hidden',
        'hover:border-industrial-red/50 transition-colors duration-300',
        className
      )}
    >
      {/* Metallic shine effect on hover */}
      <div className="absolute inset-0 metallic-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-industrial-red/0 group-hover:border-industrial-red/50 transition-all duration-300" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
