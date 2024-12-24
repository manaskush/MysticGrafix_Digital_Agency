"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WebsiteDesign = () => {
  return (
    <div className="text-white">
      {/* Heading Section */}
      <motion.div
        className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Website Design <br /> that works
        </motion.div>
        <motion.p
          className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Creating, designing and developing websites that work for your
          business.
        </motion.p>
      </motion.div>

      {/* Grid Section */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, delayChildren: 0.3, staggerChildren: 0.2 },
          },
        }}
      >
        {[...Array(4)].map((_, colIndex) => (
          <motion.div
            key={colIndex}
            className="grid gap-4"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {[...Array(3)].map((_, rowIndex) => (
              <motion.div key={rowIndex}>
                <Image
                  width={500}
                  height={500}
                  priority
                  className="h-auto max-w-full rounded-lg"
                  src={`https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-${
                    colIndex * 3 + rowIndex + 1
                  }.jpg`}
                  alt=""
                />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WebsiteDesign;
