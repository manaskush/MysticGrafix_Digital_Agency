import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimatedBackground = () => {
  const cols = 30;
  const rows = 30;
  const numberOfColorBoxes = cols * rows;

  return (
    <div className="bg-[#111] text-white z-0 font-['Poppins'] relative">
      {/* Background Grid */}
      <div
        className={`absolute inset-0 w-full h-full top-0 bg-black/[0.96]  left-0 grid`}
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: numberOfColorBoxes }).map((_, index) => (
          <div key={index} className="colorBox" />
        ))}
        {/* Top Blur Bar */}
        <div className="absolute top-0 left-0 w-full h-10 bg-[#00bfff] blur-[60px] animate-backgroundAnim" />
      </div>

      {/* Foreground Section */}
      <div className="relative w-full h-screen backdrop-blur-[1px] z-50">
        <section className="flex flex-col md:flex-row justify-center items-center h-full text-center md:text-left">
          {/* Left Section - Image */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
            <Image
              src="/logo/Nav_logo.png"
              alt="About Us Image"
              className="rotate-image-3d object-cover"
              width={700}
              height={700}
            />
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-start ml-40">
            <h1 className="text-6xl mb-4 text-[#00bfff] font-semibold">
              WE TURN IDEAS INTO IMPACT
            </h1>
            <p className="text-l mb-1 max-w-lg">
              Creative Branding & Digital Design !
            </p>
            <h1 className="text-4xl mb-4 text-[#00bfff] font-semibold">
              Welcome to MysticGrafix
            </h1>
            <p className="text-xl mb-1 max-w-lg">
              Your Creative Partner for Business Growth
            </p>
            <p className="text-xl mb-6 max-w-lg">
              We&apos;re a full-service design and branding agency dedicated to
              turning your vision into stunning visuals that inspire, engage,
              and sell. From brand identity to social media creatives — we make
              your business unforgettable.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <Link href="/about">
                <button className="font-['Poppins'] px-[18px] py-2 mb-4 text-xl bg-[#00bfff] text-white rounded hover:bg-white hover:text-[#00bfff] border-2 border-[#00bfff] transition duration-300 font-semibold">
                  Explore More
                </button>
              </Link>

              <Link href="/contact">
                <button className="font-['Poppins'] px-[18px] py-2 mb-4 text-xl bg-white text-[#00bfff] rounded hover:bg-[#00bfff] hover:text-white border-2 border-[#00bfff] transition duration-300 font-semibold">
                  Book a Session
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AnimatedBackground;
