import Image from "next/image"
import Link from "next/link"
import Footer from "../footer"
import ProjectCard from "@/components/projects";
import ServicesDropdown from "@/components/dropdown";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Ventess Infotech",
      image: "/images/venteslogo.png",
      href: "#",
    },
    {
      id: 2,
      title: "Wollek Club",
      image: "/images/clubloo.png",
      href: "#",
    },
    {
      id: 3,
      title: "The Pahadi Bro",
      image: "/images/PAHADIBRO.png",
      href: "#",
    },
    {
      id: 4,
      title: "Meerut Mahaotsav",
      image: "/images/MM.png",
      href: "#",
    },
    {
      id: 5,
      title: "K Star",
      image: "/images/inv1.jpg",
      href: "#",
    },
    {
      id: 6,
      title: "Fassad ",
      image: "/images/fassad.png",
      href: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <header className=" w-full px-4 py-6 z-[100] bg-black/[0.96]">
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
      </header>

      <main className="container mx-auto px-6 py-16">
        <h1 className="text-center text-5xl font-bold mb-16">
          Explore{" "}
          <span className="relative">
            the projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500"></span>
          </span>
        </h1>

        <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
      
      {/* <div className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-neutral-50 bg-opacity-50">
        Our Projects
      </div> */}

      {/* <p className="mt-4 mb-8 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
        Creating, designing and developing websites that work for your business.
      </p> */}

      <div className="flex flex-col items-center">
        <ProjectCard />
      </div>
    </div>

        
      </main>
      <Footer/>
    </div>
  )
}

