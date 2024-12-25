"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";
import motion from "framer-motion"
import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import ShopifyStores from "./video_production";
import Brands from "./brands";
import Services from "./services";
import FAQS from "./faq";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";
import VideoProd from "./video_production";
import { Github } from "lucide-react";
import prosperas from "../public/images/prosperas.png";
import { HeroVideoDialogDemoTopInBottomOut } from "@/components/demos/hero-video-dialog-box-demo";
import Footer from "./footer";

const projects = [
  {
    title: "E-Commerce",
    description:
      "E-Commerce a fully responsive, high-performance, scalable platform using modern web technologies, provides a seamless shopping experience for users to browse, book, and manage categories of products effortlessly. Focused highly on efficient e-commerce platform that increased the clients online sales and enhanced user engagement.",
    link: "https://ventesinfotech-wqb5.vercel.app/",
    techUsed:
      "Next JS, React Redux, Tailwind CSS, Node.js, Express.js, Multer, MongoDB, Mongoose",
    github: "https://github.com/Sakshamgargj/ventesinfotech",
    date: "2024",
    video: "/video/eCommerce.mp4",
    image: "/images/ventess.png", // Corrected path
  },
  {
    title: "Hotel/Resort Application",
    description:
      "A comprehensive digital platform designed to revolutionize the Hotel/Resort booking experience. This application enables users to browse, search, and book accommodations seamlessly, providing an intuitive interface and smooth user experience.  The platform is built with scalability in mind, making it ideal for both small and large hospitality businesses. It also features a responsive design, ensuring accessibility across all devices, including desktops, tablets, and smartphones.",
    link: "",
    techUsed: "Next Js, Redux, Tailwind CSS, Javascript",
    github: "https://github.com/Sakshamgargj/hotel_mangement",
    date: "2024",
    video: "/video/hotelSystem.mp4",
    image: "/images/hotel.png", // Corrected path
  },
  {
    title: "Prospera",
    description:
    "Prospera is a Career counselling website with AI Chatbot Integrated used for proper counselling of students in the class 10 and 12 who are at the point of deciding the right career for them, It also has the feature of booking meeting appointments.",  
    link: "https://prospera-psi.vercel.app/",
    techUsed:
      "React, React Redux, HTML5, CSS, JavaScript, Bootstrap, Next.js, Scroll-Trigger, Framer-Motion",
    github: "https://github.com/Sakshamgargj/CarRental",
    date: "2024",
    video: "/video/carRental.mp4",
    image: "/images/prosperas.png", // Corrected path
  },
  {
    title: "Car Rental Platform",
    description:
      "Car Rental a fully responsive, user-friendly website using modern web technologies, enabling users to browse, book, and manage car rentals effortlessly. Focused on intuitive design and fast load times to enhance user satisfaction and retention.",
    link: "https://car-rental-frontend-swart.vercel.app/",
    techUsed:
      "React, React Redux, HTML5, CSS, JavaScript, Bootstrap, Node.js, Express.js, MongoDB, Mongoose",
    github: "https://github.com/Sakshamgargj/CarRental",
    date: "2024",
    video: "/video/carRental.mp4",
    image: "/images/car.png", // Corrected path
  },
];

export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };

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
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />

      <Spotlight className="hidden md:flex md:-top-80 left-80  " fill="blue" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2 ">
        <div className="py-36"><div className="text-5xl  pb-5 md:text-8xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          Create, grow, and <br /> scale your vision
        </div>
        <p className="mt-4 text-xl font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
          Custom Image and Video Designs based on your Interests. We are a team
          of creatives who are excited to provide you with best design and web
          solutions.
        </p>
        <p
  style={{
    '--font-selector': 'Q1VTVE9NO09mZkJpdCBUcmlhbCBEb3QgQm9sZA==',
    '--framer-font-family': `"OffBit Trial Dot Bold", "OffBit Trial Dot Bold Placeholder", sans-serif`,
    '--framer-font-size': '181.41016390094788px',
    '--framer-line-height': '0.9em',
    '--framer-text-color': 'var(--token-279f93c0-5840-4158-9a93-81a80c7c1cf0, rgb(3, 3, 9))',
  } as React.CSSProperties}
  className="framer-text"
>
  Creative
</p>



        <Link
          href={"/book"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-64 p-2  mx-auto my-10 text-white "
        >
          Book a call
        </Link>
        </div>
        <div ref={websiteDesignRef} className="mt-20 text-white">
          {/* <WebsiteDesign /> */}
          <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
            <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
              Website Design <br /> that works
            </div>
            <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
              Creating, designing and developing websites that work for your
              business.
            </p>
          </div>
          <div className=" rounded-xl p-8 md:px-6 lg:px-8">
            {/* <h2 className="text-3xl pt-4 text-green-100 font-sans font-bold relative inline-block">
              <span className="text-green-100">A Collection of </span>
              <span style={{ color: "#9D00FF" }}>recent Projects</span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-sky-200" />
            </h2> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group border border-gray-800 hover:border-gray-700 rounded-lg p-4 bg-gray-900 transition-all duration-300"
                >
                  {/* Image Section
                  <div className="relative mb-4">
                    <video
                      src={project.video}
                      loop
                      autoPlay
                      muted
                      playsInline
                      className="w-full h-48 rounded-md object-cover group-hover:ring-2 hover:scale-105 ring-purple-500/30 transition-all"
                    />
                  </div> */}
                  <div className="relative mb-4">
                    <Image
                      src={project.image}
                      alt="Project Image"
                      className="w-full h-full rounded-md object-cover group-hover:ring-2 hover:scale-105 ring-purple-500/30 transition-all"
                      height={500}
                      width={500}
                    />
                  </div>

                  {/* Project Details */}
                  <div className="flex justify-between">
                    <h3 className="text-2xl font-semibold text-gray-100 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 mt-1 p-2 text-xs">
                      {project.date}
                    </p>
                  </div>

                  <p className="text-gray-400 mt-2 font-sans font-extralight text-sm">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.techUsed.split(",").map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-800 text-gray-400 hover:scale-110 transition-all px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-end gap-6 mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-purple-400 hover:scale-110 transition-all"
                    >
                      🌐 Website
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex  text-purple-400 hover:scale-110 transition-all"
                    >
                      <Github className="w-4 h-8 text-white" />
                      <p className="px-1 py-2"> GitHub</p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div ref={graphicDesignRef}>
          <GraphicDesign />
          <WebsiteDesign/>
        </div>
        <div className="w-full pt-20">
           
          <SliderOne />
        </div>
        <div ref={shopifyStoresRef}>
          <VideoProd />
        </div>
        {/* <div className="flex justify-center items-center ">
            <HeroVideoDialogDemoTopInBottomOut  videoSrc="http://www.youtube.com/watch?v=NQL5P82lm80"
            />
        </div> */}
            <br /><br />
        <div ref={brandsRef}>
          <Brands />
        </div>
        <div id="services">
          <Services />
        </div>

        <FAQS />
        <Footer/>
      </div>
    </div>
  );
}
