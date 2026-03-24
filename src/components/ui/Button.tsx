import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-industrial-red hover:bg-industrial-red-bright text-white border-b-4 border-industrial-red-dark active:border-b-0 active:translate-y-[2px]',
    secondary: 'bg-precision-blue hover:bg-precision-blue-light text-white border-b-4 border-precision-blue-dark active:border-b-0 active:translate-y-[2px]',
    outline: 'bg-transparent border-2 border-steel-aluminum hover:bg-steel-aluminum/10 text-steel-white active:translate-y-[1px]'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'relative font-display uppercase tracking-widest transition-all duration-200 overflow-hidden group',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
    </motion.button>
  );
};
