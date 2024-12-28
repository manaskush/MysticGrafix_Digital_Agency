import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Dharmesh Yelande",
      designation: "Product Manager at TechFlow",
      src: "/images/D.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Bharti",
      designation: "CTO at InnovateSphere",
      src: "/images/bharti.webp",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Ejaz Khan",
      designation: "Operations Director at CloudScale",
      src: "/images/ejazkhan.webp",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Kapil Sharma",
      designation: "Engineering Lead at DataPro",
      src: "/images/kapil.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Kishwer",
      designation: "VP of Technology at FutureNet",
      src: "/images/Kishwer.jpg",
    },
    {
        quote:
          "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
        name: "Megha",
        designation: "VP of Technology at FutureNet",
        src: "/images/megha.jpg",
      },
      {
        quote:
          "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
        name: "Prince Narula ",
        designation: "VP of Technology at FutureNet",
        src: "/images/prince.webp",
      },
      {
        quote:
          "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
        name: "Sahil",
        designation: "VP of Technology at FutureNet",
        src: "/images/sahil.jpg",
      },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
