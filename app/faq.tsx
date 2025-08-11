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
          className="font-semibold text-3xl md:text-6xl bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent"
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
              <AccordionTrigger>What services does MysticGrafix offer for business growth?</AccordionTrigger>
              <AccordionContent>
               At MysticGrafix, we provide a complete suite of PR and digital marketing solutions — including social media management, influencer marketing, creative designs, META ads, website development, product photography, video ad production, logo and packaging design, 3D design, and brand presence strategy — to help your business stand out online and offline.

              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How can MysticGrafix help improve my brand visibility?</AccordionTrigger>
              <AccordionContent>
                We combine creative storytelling with strategic marketing. From engaging social media campaigns to professional product shoots and influencer collaborations, our team ensures your brand reaches the right audience and builds lasting recognition.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I start working with MysticGrafix?</AccordionTrigger>
              <AccordionContent>
                Getting started is simple — contact us via our website or call our team. We&apos;ll schedule a free consultation to understand your goals, recommend the right mix of services, and create a tailored strategy to grow your brand.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What is the cost of your PR and digital marketing services?</AccordionTrigger>
              <AccordionContent>
                Our pricing depends on your specific needs and scope of work. Whether you need a one-time project like a website or a full-scale marketing campaign, we provide transparent, customized quotes to ensure maximum value for your investment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Does MysticGrafix offer ongoing support and campaign management?</AccordionTrigger>
              <AccordionContent>
                Yes! We offer continuous monitoring, reporting, and optimization for all campaigns. Our team ensures your brand stays relevant, creative, and ahead of competitors with consistent updates and fresh strategies.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FAQS;
