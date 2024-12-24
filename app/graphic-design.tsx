"use client";

import { motion } from "framer-motion";
import { ThreeDCardExample } from "./snippets/3d-card-snippet";
import { EvervaultCardSnippet } from "./snippets/evervault-card-snippet";

const GraphicDesign = () => {
  return (
    <div>
      {/* Section Wrapper */}
      <motion.div
        className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        {/* Heading */}
        <motion.div
          className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          Graphic Design <br />
        </motion.div>

        {/* Paragraph */}
        <motion.p
          className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We create stunning visuals for your brand. From logos to social media
          posts, we&apos;ve got you covered.
        </motion.p>

        {/* Cards Section */}
        <motion.div
          className="items-center md:flex justify-center md:mx-auto md:space-x-10 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 1, delayChildren: 0.3, staggerChildren: 0.3 },
            },
          }}
        >
          {/* Card 1 */}
          <motion.div
            className="px-10 md:px-0"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ThreeDCardExample />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="px-10 md:px-0"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <EvervaultCardSnippet />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GraphicDesign;
