import React from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="min-h-screen pt-20"
    >
      {children}
    </motion.div>
  );
};
