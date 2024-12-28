import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

interface NavItem {
  label: string;
}

const navItems: NavItem[] = [
  { label: 'Home' },
  { label: 'Services' },
  { label: 'Our Team' },
  { label: 'Collaborate' },
  { label: 'Contact' }
];

const AnimatedBackground = () => {
  const bgAnimationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bgAnimation = bgAnimationRef.current;
    if (!bgAnimation) return;

    // Create color boxes
    const numberOfColorBoxes = 480;
    for (let i = 0; i < numberOfColorBoxes; i++) {
      const colorBox = document.createElement('div');
      colorBox.className = 'colorBox';
      bgAnimation.appendChild(colorBox);
    }
  }, []);

  return (
    <div className=" bg-[#111] text-white font-['Poppins']">
      <div 
        className="absolute inset-0 w-full h-full top-0 left-0  grid grid-cols-[repeat(30,1fr)] grid-rows-[repeat(30,1fr)] bg-[#1d1d1d] overflow-hidden"
        ref={bgAnimationRef}
      >
        <div className="absolute top-0 left-0 w-full h-10 bg-[#00bfff] blur-[60px] animate-backgroundAnim" />
      </div>
      
      <div className="relative w-full h-screen backdrop-blur-[1px] z-50">
  <section className="flex flex-col md:flex-row justify-center items-center h-full text-center md:text-left">
    {/* Left Section - Image */}
    <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
      <Image
        src="/logo/Nav_logo.png"
        alt="About Us Image"
        className="rotate-image-3d object-cover "
        width={700}
        height={700}
      />
    </div>

    {/* Right Section */}
    <div className="flex flex-col items-center md:items-start ml-40">
      <h1 className="text-8xl mb-4 text-[#00bfff] font-semibold">ABOUT US</h1>
      <p className="text-xl mb-6 max-w-lg">
        Fast Track Your Web Development Career with Our Team! Learn Web
        Development from the beginning with live coding sessions on your
        laptop!
      </p>
      <p className="text-xl mb-6 max-w-lg">
        Fast Track Your Web Development Career with Our Team! Learn Web
        Development from the beginning with live coding sessions on your
        laptop!
      </p>
      <div className="flex flex-col md:flex-row gap-4">
  {/* Button 1 */}
  <button className="font-['Poppins'] px-[18px] py-2 mb-4 text-xl bg-[#00bfff] text-white rounded hover:bg-white hover:text-[#00bfff] border-2 border-[#00bfff] transition duration-300 font-semibold">
    Learn More
  </button>

  {/* Button 2 */}
  <button className="font-['Poppins'] px-[18px] py-2 mb-4 text-xl bg-white text-[#00bfff] rounded hover:bg-[#00bfff] hover:text-white border-2 border-[#00bfff] transition duration-300 font-semibold">
    Book a Session
  </button>
</div>

    </div>
  </section>
</div>

    </div>
  );
};

export default AnimatedBackground;