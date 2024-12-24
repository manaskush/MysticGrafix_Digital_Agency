"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stores = [
  {
    image: "/images/video1.png",
    quote: "MysticGrafix showed us to get started, what to do, and how to do it.",
    name: "Shakib",
  },
  {
    image: "/images/video3.jpg",
    quote:
      "We had no idea how to get started, but MysticGrafix showed us the way. And we were able to create something amazing.",
    name: "Manish Kunwar",
  },
  {
    image: "/images/video2.png",
    quote:
      "The team at MysticGrafix is amazing. They helped us create stunning videos for our game that we are proud of.",
    name: "Fahad Hussain",
  },
];

const VideoProd = () => {
  return (
    <motion.section
      className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="p-4 mx-auto relative z-10 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        {/* Heading Animation */}
        <motion.div
          className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Video Production <br />
        </motion.div>

        {/* Paragraph Animation */}
        <motion.p
          className="mt-4 text-lg font-normal text-neutral-800 max-w-lg text-center mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We create stunning Videos for Youtube, Ads, or Personal Preferences.
        </motion.p>

        {/* Animated Cards */}
        <motion.div
          className="md:flex items-center justify-center px-10 mt-10"
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
          {stores.map((store, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={store.image}
                  alt="shopify store"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center">
                  &quot;{store.quote}&quot;
                </p>
                <p className="text-neutral-800 font-bold text-lg mt-4">
                  {" "}
                  - {store.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default VideoProd;
