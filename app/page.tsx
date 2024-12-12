'use client'

import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";

import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import ShopifyStores from "./video_production";
import Brands from "./brands";
import Services from "./services";
import FAQS from "./faq";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";
import VideoProd from "./video_production";

const projects = [
  {
    title: "E-Commerce",
    description: "E-Commerce a fully responsive, high-performance, scalable platform using modern web technologies, provides a seamless shopping experience for users to browse, book, and manage categories of products effortlessly. Focused highly on efficient e-commerce platform that increased the clients online sales and enhanced user engagement.",
    link: "https://ventesinfotech-wqb5.vercel.app/",
    techUsed: "Next JS, React Redux, Tailwind CSS, Node.js, Express.js,Multer, MongoDB, Mongoose",
    github: "https://github.com/Sakshamgargj/ventesinfotech",
    date: "2024",
    video: "/video/eCommerce.mp4",
  },
  {
    title: "Hotel/Resort Application",
    description: "A comprehensive digital platform designed to revolutionize the Hotel/Resort booking experience. This application enables users to browse, search, and book accommodations seamlessly, providing an intuitive interface and smooth user experience.  The platform is built with scalability in mind, making it ideal for both small and large hospitality businesses. It also features a responsive design, ensuring accessibility across all devices, including desktops, tablets, and smartphones.",
    link: "",
    techUsed: "Next Js, Redux,Tailwind CSS, Javascript",
    github: "https://github.com/Sakshamgargj/hotel_mangement",
    date: "2024",
    video: "/video/hotelSystem.mp4",
  },
  {
    title: "Car Rental",
    description: "Car Rental a fully responsive, user-friendly website using modern web technologies, enabling users to browse, book, and manage car rentals effortlessly. Focused on intuitive design and fast load times to enhance user satisfaction and retention.",
    link: "https://car-rental-frontend-swart.vercel.app/",
    techUsed: "React, React Redux,HTML5, CSS, JavaScript, Bootstrap,Node.js, Express.js,MongoDB,Mongoose",
    github: "https://github.com/Sakshamgargj/CarRental",
    date: "2024",
    video: "/video/carRental.mp4",
  }
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
       
           <div className="text-4xl  pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Create, grow, and <br /> scale your vision 
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
          Custom Image and Video Designs based on your Interests. We are a team of creatives who are excited to provide you with best design and web solutions.
        </p>

        <Link
          href={"/book"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
        >
          Book a call
        </Link>
        

        
        <div ref={websiteDesignRef} className="mt-20">
          <WebsiteDesign />
          
        </div>
        <div ref={graphicDesignRef}>
          <GraphicDesign />
        </div>
        <div className="w-full pt-20">
          <SliderOne />
        </div>
        <div ref={shopifyStoresRef}>
          <VideoProd />
        </div>
        <div ref={brandsRef}>
          <Brands />
        </div>
        <div id ='services'>
        <Services />
        </div>
        
        <FAQS />
      </div>
    </div>
  );
}
