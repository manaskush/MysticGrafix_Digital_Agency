// Types.ts
interface Testimonial {
    id: number;
    imgSrc: string;
    text: string;
    author: string;
    title: string;
  }
  
  // TestimonialCarousel.tsx
  import React, { useState } from 'react';
  import { ChevronUp, ChevronDown } from 'lucide-react';
  const testimonials: Testimonial[] = [
    {
      id:1,
      text:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      author: "Dharmesh Yelande",
      title: "Product Manager at TechFlow",
      imgSrc: "/images/D.jpg",
    },
    {
      id:2,
      text:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      author: "Bharti",
      title: "CTO at InnovateSphere",
      imgSrc: "/images/bharti.webp",
    },
    {
      id:3,
      text:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      author: "Ejaz Khan",
      title: "Operations Director at CloudScale",
      imgSrc: "/images/ejazkhan.webp",
    },
    {
      id:4,
      text:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      author: "Kapil Sharma",
      title: "Engineering Lead at DataPro",
      imgSrc: "/images/kapil.jpg",
    },
    {
      id:5,
      text:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      author: "Kishwer",
      title: "VP of Technology at FutureNet",
      imgSrc: "/images/Kishwer.jpg",
    },
    {
      id:6,
        text:
          "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
        author: "Megha",
        title: "VP of Technology at FutureNet",
        imgSrc: "/images/megha.jpg",
      },
      {
        id:7,
        text:
          "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
        author: "Prince Narula ",
        title: "VP of Technology at FutureNet",
        imgSrc: "/images/prince.webp",
      },
      {
        id:8,
        text:
          "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
        author: "Sahil",
        title: "VP of Technology at FutureNet",
        imgSrc: "/images/sahil.jpg",
      },
  ];
  // const testimonial: Testimonial[] = [
  //   {
  //     id: 1,
  //     imgSrc: "/api/placeholder/80/80",
  //     text: "This is the first testimonial text that will appear on the right side when this image is selected.",
  //     author: "Author One",
  //     title: "Title One"
  //   },
  //   {
  //     id: 2,
  //     imgSrc: "/api/placeholder/80/80",
  //     text: "Second testimonial text that appears when the second image is selected.",
  //     author: "Author Two",
  //     title: "Title Two"
  //   },
  //   {
  //     id: 3,
  //     imgSrc: "/api/placeholder/80/80",
  //     text: "Third testimonial text shown when selecting the third image.",
  //     author: "Author Three",
  //     title: "Title Three"
  //   },
  //   {
  //     id: 4,
  //     imgSrc: "/api/placeholder/80/80",
  //     text: "Fourth testimonial text displayed upon selecting the fourth image.",
  //     author: "Author Four",
  //     title: "Title Four"
  //   },
  //   {
  //     id: 5,
  //     imgSrc: "/api/placeholder/80/80",
  //     text: "Fifth testimonial text appears when the fifth image is selected.",
  //     author: "Author Five",
  //     title: "Title Five"
  //   },
  //   {
  //       id: 6,
  //       imgSrc: "/api/placeholder/80/80",
  //       text: "Fifth testimonial text appears when the fifth image is selected.",
  //       author: "Author Five",
  //       title: "Title Five"
  //     },
  //     {
  //       id: 7,
  //       imgSrc: "/api/placeholder/80/80",
  //       text: "Fifth testimonial text appears when the fifth image is selected.",
  //       author: "Author Five",
  //       title: "Title Five"
  //     },
  //     {
  //       id: 8,
  //       imgSrc: "/api/placeholder/80/80",
  //       text: "Fifth testimonial text appears when the fifth image is selected.",
  //       author: "Author Five",
  //       title: "Title Five"
  //     },
  //     {
  //       id: 9,
  //       imgSrc: "/api/placeholder/80/80",
  //       text: "Fifth testimonial text appears when the fifth image is selected.",
  //       author: "Author Five",
  //       title: "Title Five"
  //     }
  // ];
  
  interface ImagePositionStyles {
    transform: string;
    opacity: number;
  }
  
  const TestimonialCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
  
    const moveUp = (): void => {
      setActiveIndex((prev) => 
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    };
  
    const moveDown = (): void => {
      setActiveIndex((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    };
  
    const getImagePosition = (index: number): ImagePositionStyles => {
      const totalImages = testimonials.length;
      const arcLength = 360; // Half circle
      const angleStep = arcLength / (totalImages - 1);
      const currentAngle = (index - activeIndex) * angleStep;
      
      // Convert angle to radians and calculate position
      const radius = 240; // Radius of the circle
      const angleRad = (currentAngle - 90) * (Math.PI / 180);
      
      return {
        transform: `translate(${Math.cos(angleRad) * radius}px, ${Math.sin(angleRad) * radius}px)`,
        opacity: Math.abs(index - activeIndex) <= 2 ? 1 : 0.3,
      };
    };
  
    const handleImageClick = (index: number): void => {
      setActiveIndex(index);
    };
  
    return (
      <div className="flex items-center justify-center gap-16 p-8  text-white min-h-screen">
        {/* Left side - Circle with images */}
        <div className="relative w-full h-96">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className="absolute left-1/20 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 cursor-pointer"
              style={getImagePosition(index)}
              onClick={() => handleImageClick(index)}
            >
              <img
                src={item.imgSrc}
                alt={`Testimonial ${index + 1}`}
                className={`w-24 h-24 rounded-full border-2 ${
                  index === activeIndex ? 'border-blue-500 scale-125' : 'border-gray-600'
                } transition-all duration-300`}
              />
            </div>
          ))}
          
         {/* Navigation buttons */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <button
              onClick={moveUp}
              className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
              aria-label="Move Up"
            >
              <ChevronUp size={24} />
            </button>
            <button
              onClick={moveDown}
              className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
              aria-label="Move Down"
            >
              <ChevronDown size={24} />
            </button>
          </div>
          
        </div>
  
        {/* Right side - Content */}
        <div className="max-w-lg">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              {testimonials[activeIndex].text}
            </p>
            <div className="mt-4">
              <h3 className="font-bold text-xl">
                {testimonials[activeIndex].author}
              </h3>
              <p className="text-gray-400">
                {testimonials[activeIndex].title}
              </p>
            </div>
          </div>
        </div>
         
      </div>
    );
  };
  
  export default TestimonialCarousel;