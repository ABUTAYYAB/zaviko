'use client';

import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  classes?: string;
  offset?: any;
}

const SectionOpacity: FC<Props> = ({ children, classes }) => {
  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0.85, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default SectionOpacity;
