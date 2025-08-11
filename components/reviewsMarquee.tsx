"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const reviews = [
  {
    name: "Anupam Jauhari",
    initials: "A",
    rating: 5,
    comment:
      "I had Frozen Shoulder. Could not lift my hand or do usual things. After a month of sessions I am now much better with my mobility and range of motion.",
  },
  {
    name: "Jawed Hussain",
    initials: "J",
    rating: 5,
    comment:
      "Dr. Mansi is extremely talented. She treated my vertigo and neck shoulder stiffness problems with advanced scientific methods.",
  },
  {
    name: "Harishankar Saxena",
    initials: "H",
    rating: 5,
    comment:
      "She helped me get back on my feet. Very thankful for her professional, helping nature.",
  },
  {
    name: "Sakshi Mehra",
    initials: "S",
    rating: 5,
    comment:
      "Very good experience with the clinic. The physiotherapy was effective and the doctor was caring and understanding.",
  },
  {
    name: "Rakesh Gupta",
    initials: "R",
    rating: 5,
    comment:
      "I had chronic back pain and I am almost pain-free now. Highly recommend her clinic!",
  },
  {
    name: "Divya Kapoor",
    initials: "D",
    rating: 5,
    comment:
      "Dr. Mansi has magic in her hands! Amazing results after my sessions with her.",
  },
  {
    name: "Mohit Sharma",
    initials: "M",
    rating: 5,
    comment:
      "Clean clinic, helpful staff, and very knowledgeable doctor. Got great results from the treatment.",
  },
];

export default function ReviewsMarquee() {
  return (
    <section className="relative py-16 overflow-hidden ">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl text-center font-bold mb-6 max-w-3xl mx-auto leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-neutral-300">
              Our Reviews
            </span>{" "}
            
          </h1>
      </div>

      {/* Google Review Card */}
      <div className="flex justify-center mb-12">
        <div className="w-full max-w-sm bg-gray-600 shadow-lg rounded-xl border border-gray-950 p-6 text-center">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Excellent</h3>
          <div className="flex justify-center text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-xl" />
            ))}
          </div>
          <p className="text-sm text-gray-600 mb-4">4.9 Stars Rating</p>
          <Image
            src="/google-logo.png" // Replace with actual image path
            alt="Google"
            width={80}
            height={30}
            className="mx-auto"
          />
        </div>
      </div>

      {/* Blur Effect Overlays */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-950 to-transparent z-20 pointer-events-none" />

      {/* Marquee */}
      <motion.div
        className="flex gap-6 animate-marquee px-4"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {[...reviews, ...reviews].map((review, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[370px] min-h-[280px] bg-gray-600 border border-gray-950 rounded-xl p-6 shadow-md"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-full bg-yellow-400 text-white flex items-center justify-center font-bold text-lg">
                {review.initials}
              </div>
              <h3 className="font-semibold text-gray-900">{review.name}</h3>
            </div>

            <div className="flex items-center text-yellow-400 mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} className="mr-1" />
              ))}
            </div>

            <p className="text-sm text-gray-950 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
