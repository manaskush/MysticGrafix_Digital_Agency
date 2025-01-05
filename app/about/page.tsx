"use client";

import Navbar from "@/components/navbar";
import Footer from "../footer";
import { useRef } from "react";
import Image from "next/image";
import InteractiveCircles from "@/components/interactive-circles";
import ServicesSection from "@/components/service-section";
import Services from "../services";
import TestimonialCarousel from "@/components/Testimonials";
import Link from "next/link";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Team Member 1",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Team Member 2",
      role: "Designer",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Team Member 3",
      role: "Developer",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Team Member 4",
      role: "Marketing",
      image: "/placeholder.svg?height=400&width=400",
    },
  ];

  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToShopifyStores = () => {
    shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to Services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className=" w-full px-4 py-6 z-100 bg-black/[0.96]">
        <nav className="flex items-center justify-center gap-8 text-sm font-medium">
          <Link href="/projects" className="text-white hover:text-gray-300">
            Projects
          </Link>
          <Link href="/testimonials" className="text-white hover:text-gray-300">
            Testimonials
          </Link>
          <Link href="/" className="text-3xl font-bold text-white">
            MysticGrafix
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-4xl mb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-neutral-50">
          The face behind <br /> MysticGrafix
        </div>

        <div className="bg-zinc-900 rounded-lg p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="aspect-square relative">
              <Image
                src="/images/founder.JPG"
                alt="Featured team member"
                className="rounded-lg bg-contain"
                width={600}
                height={600}
              />
            </div>
            <div className="space-y-6">
              <p className="text-blue-500 text-5xl">
                Hello, I am Harsh Jain  
              </p>
              <p className="text-blue-300 text-3xl">
                Software Engineer & Graphic Designer
              </p>
              <p className="text-gray-300 text-2xl">
              As a highly motivated self-starter, I
                bring a steadfast commitment to excellence and a belief that
                with proper focus and planning, anything is attainable.My
                relentless drive for success is evident in my ability to
                consistently deliver outstanding results, even in tasks that
                require me to expand my skill set.</p>
              
              <p className="text-gray-300 text-2xl">
              I excel in challenging
                environments and continuously seek opportunities to push my
                limits, drive personal growth, and achieve new levels of
                success.
              </p>
              <p className="text-gray-300 text-2xl">
                My Vision is to provide my clients a memory they can live with.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-slate-950 p-8 mb-16">
          <div className="">
            <h1 className="text-blue-500 text-5xl ">About the Company</h1>
            <p className="text-blue-300 text-xl mt-8">
              MysticGrafix is a creative powerhouse dedicated to transforming
              imagination into stunning visual experiences. Specializing in
              cutting-edge graphic design, animation, and digital artistry, we
              bring bold ideas to life with precision and innovation. Our
              mission is to empower brands, businesses, and individuals to
              communicate their stories through captivating visuals that leave a
              lasting impression. Whether it is branding, motion graphics, or
              custom artwork, MysticGrafix combines artistic creativity with the
              latest technology to deliver designs that inspire and engage. Let
              us bring your vision to life and make your ideas truly
              unforgettable.
            </p>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="space-y-4">
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="rounded-lg grayscale w-full h-full object-cover"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="text-lg font-semibold">{member.name}</div>
                <div className="text-gray-400">{member.role}</div>
              </div>
            ))}
          </div> */}
        <InteractiveCircles />
        <ServicesSection />
        {/* <TestimonialCarousel /> */}
        <div className="min-h-[50vh] flex flex-col items-center justify-center bg-black text-white px-4 py-16">
          <h1 className="text-3xl md:text-5xl text-center font-bold mb-6 max-w-3xl mx-auto leading-tight">
            Want to build a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-neutral-300">
              credible and relatable
            </span>{" "}
            project for yourself ?
          </h1>
          <Link href="/contact">
            {" "}
            <button
              className="bg-[#2a2ef7] hover:bg-[#4e68df] text-white font-semibold px-8 py-3 rounded-full 
        transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Let's connect to make it a reality!
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
