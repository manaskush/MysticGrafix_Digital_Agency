'use client';

import { motion } from 'framer-motion';
import { CardHoverEffectDemo } from './snippets/card-hover-effect-snippet';

const Services = () => {
  return (
     <motion.div
      className="max-w-5xl mx-auto py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Heading */}
      <motion.div
        className="text-4xl pb-5 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Streamline your business with our services
      </motion.div>

      {/* Animated Paragraph */}
      <motion.p
        className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        From website design to social media management, We offer a wide range
        of services to help you grow your business.
      </motion.p>

      {/* Card Section Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <CardHoverEffectDemo />
      </motion.div>
    </motion.div>
  );
};

export default Services;
