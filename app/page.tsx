"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";
import motion from "framer-motion"
import WebsiteDesign from "./design";
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
import Hero from "./hero";
import AnimatedBackground from "./herobox";
import { MarqueeDemo } from "@/components/demos/marquee-demo";
import ProjectCard from "@/components/projects";
import { AnimatedTestimonialsDemo } from "@/components/demos/animated-testimonials-demo";
import Project from "./website-design";
import { VortexDemo } from "@/components/demos/vortex-demo";
import ServicesDropdown from "@/components/dropdown";
import TestimonialSlider from "@/components/testimonialSlider";
import ReviewsMarquee from "@/components/reviewsMarquee";
import Header from "@/components/header";



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
  

  

  return (<div>
    {/* <header className=" w-full px-4 py-6 z-[100] bg-black/[0.96]">
        <nav className="flex items-center justify-center gap-8 text-sm font-medium">
          <Link href="/projects" className="text-white hover:text-gray-300">
            Projects 
          </Link>
          <ServicesDropdown />
          <Link href="/" className="text-3xl font-bold text-white">
            <Image priority
              src="/logo/Mysticlogo.png"
              alt="Logo"
              width={50000}
              height={50000}
              className="w-60 h-30 md:w-45 md:h-25"/>
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </nav>
      </header> */}
      <Header />
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
     
       <div className="relative w-full">
        {/* Hero Section */}
        
        
        <section className="heroabout  ">
                     {/* Animated Background Container */}
                     <div className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0">
            <AnimatedBackground />
          </div>
        </div>
        </section>


        <MarqueeDemo/>

        <div id="services">
          <Services />
        </div>





        <div ref={websiteDesignRef} className="mt-20 text-white">
          <Project/>
          {/* <WebsiteDesign /> */}
          {/* <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
            <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-neutral-50 bg-opacity-50">
              Website Design <br /> that works
            </div>
            <p className="mt-4 mb-8 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
              Creating, designing and developing websites that work for your
              business.
            </p>
            <div>
          <ProjectCard/>
          </div>
          </div>
          
           */}
        </div>
        
        <div>
          <AnimatedTestimonialsDemo/>
          <ReviewsMarquee />
        </div>
        {/* <div ref={graphicDesignRef}>
          <GraphicDesign />
          <WebsiteDesign />
        </div> */}

        {/* <div className="w-full pt-20">
          <TestimonialSlider />
           <SliderOne /> 
           </div>
          */}
        
        {/* <div ref={shopifyStoresRef}>
          <VideoProd />
        </div> */}
        {/* <div className="flex justify-center items-center ">
            <HeroVideoDialogDemoTopInBottomOut  videoSrc="http://www.youtube.com/watch?v=NQL5P82lm80"
            />
        </div> */}
        <br />
        <br />
        {/* <div ref={brandsRef}>
          <Brands />
        </div> */}
        
        <FAQS />
        <Footer />
      </div>
    </div>
    </div>
  );
}
