"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const animationVariants = {
  left: {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  right: {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  bottom: {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
};

const transition = { duration: 0.6, ease: "easeOut" };

export default function BusinessSection() {
  return (
    <section className="py-16 px-4 text-center">
      <p className="text-2xl text-blue-500 font-semibold uppercase">Our Business</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-12">Stand Out From The Rest</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <motion.div
            variants={animationVariants.left}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={transition}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <Image src="/images/bs1.png" alt="Graph" width={250} height={250} className="mx-auto mb-4" />
          </motion.div>

          <motion.div
            variants={animationVariants.left}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-3">
              🎯
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Our Mission</h3>
            <p className="text-sm text-gray-600 mt-2">
              To empower businesses with innovative digital solutions that drive growth, boost online presence, and
              create meaningful connections between brands and their audiences.
            </p>
          </motion.div>
        </div>

        {/* Center */}
        <motion.div
          variants={animationVariants.bottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={transition}
          className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-center"
        >
          <div className="bg-orange-100 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-3">
            🧠
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Our Core Value</h3>
          <p className="text-sm text-gray-600 mt-2 mb-4">
            Core values are the fundamental beliefs or guiding principles that shape how a company behaves, makes
            decisions, and interacts with clients, employees, and partners.
          </p>
          <ul className="text-left text-sm text-gray-800 font-medium space-y-2 pl-4">
            <li className="text-blue-500">✔ Innovation</li>
            <li className="text-blue-500">✔ Integrity</li>
            <li className="text-blue-500">✔ Excellence</li>
            <li className="text-blue-500">✔ Collaboration</li>
            <li className="text-blue-500">✔ Customer Success</li>
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-600 transition">
            Explore More →
          </button>
        </motion.div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <motion.div
            variants={animationVariants.right}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={transition}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-3">
              🔭
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Our Vision</h3>
            <p className="text-sm text-gray-600 mt-2">
              To become a leading global digital partner, transforming businesses of all sizes through cutting-edge
              marketing strategies, technology, and creativity.
            </p>
          </motion.div>

          <motion.div
            variants={animationVariants.right}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <Image src="/images/bs.png" alt="Gears" width={250} height={250} className="mx-auto mb-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
