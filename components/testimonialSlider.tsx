"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import Image from "next/image";

type Testimonial = {
  name: string;
  text: string;
  image: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Lisa Redfern",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.",
    image: "/testimonials/user1.jpg",
    rating: 5,
  },
  {
    name: "John Smith",
    text: "This service transformed our online presence. Great team and excellent communication throughout!",
    image: "/testimonials/user2.jpg",
    rating: 5,
  },
  {
    name: "Sophia Lee",
    text: "We saw a clear boost in engagement and brand visibility after working with them.",
    image: "/testimonials/user3.jpg",
    rating: 4,
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="text-center py-12 bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">What Clients Say</h2>
      <div className="flex justify-center mb-6">
        <div className="w-24 h-1 bg-orange-400 rounded-full" />
      </div>

      <div className="relative max-w-xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow">
          <Image src={current.image} alt={current.name} width={64} height={64} />
        </div>
        <h3 className="text-lg font-semibold">{current.name}</h3>
        <p className="text-gray-600 mt-2 text-sm">{current.text}</p>

        {/* Arrows */}
        <div className="flex justify-center mt-6 gap-6 text-orange-500">
          <button onClick={prevSlide} aria-label="Previous">
            <FaArrowLeft />
          </button>
          <button onClick={nextSlide} aria-label="Next">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center mt-8 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            onClick={() => goToIndex(index)}
            className={`relative cursor-pointer rounded-full overflow-hidden border-4 transition duration-200 ${
              index === currentIndex ? "border-orange-500 scale-105" : "border-transparent"
            }`}
          >
            <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} />
            {/* Rating bubble */}
            <div className="absolute -top-1 -right-1 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow text-xs font-semibold text-orange-500">
              {testimonial.rating}
              <FaStar className="ml-0.5 text-[10px]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
