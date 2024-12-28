'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = () => {
  return (
    <motion.div
     className="bg-white/20 backdrop-blur-custom backdrop-brightness-120 border mt-10 md:py-10  w-full rounded-3xl border-white/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="p-10 md:p-4 md:px-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <motion.div
          className="text-3xl md:text-7xl font-bold text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Have questions ?
        </motion.div>

        {/* Subheading */}
        <motion.div
          className="font-semibold text-3xl md:text-6xl bg-gradient-to-r from-purple-600 to-blue-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get answers.
        </motion.div>

        {/* Accordion Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is MysticGrafix?</AccordionTrigger>
              <AccordionContent>
                MysticGrafix is a full-fledged marketing agency that specializes
                in branding, web design, and digital marketing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How to start?</AccordionTrigger>
              <AccordionContent>
                You can start by contacting us. We will get back to you within
                24 hours.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Pricing?</AccordionTrigger>
              <AccordionContent>
                We offer custom tailored solutions for your business. Contact us
                to get a quote.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Support?</AccordionTrigger>
              <AccordionContent>
                We offer Monday-Friday support for all our clients.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FAQS;
