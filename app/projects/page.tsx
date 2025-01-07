import Image from "next/image"
import Link from "next/link"
import Footer from "../footer"

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
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-center gap-8 text-sm font-medium">
          <Link href="/projects" className="text-white hover:text-gray-300">
            Projects 
          </Link>
          <Link href="/testimonials" className="text-white hover:text-gray-300">
            Testimonials
          </Link>
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

        <div className="grid grid-cols-12 gap-6">
  {/* First Project (Top-Left) */}
  <Link
    href={projects[0].href}
    className="col-span-12 md:col-span-4 group relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-900 transition-transform hover:scale-105"
  >
    <Image
      src={projects[0].image}
      alt={projects[0].title}
      fill
      className="object-cover transition-opacity group-hover:opacity-75"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity group-hover:bg-opacity-50">
      <h2 className="text-2xl font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
        {projects[0].title}
      </h2>
    </div>
  </Link>

  {/* Second Project (Top-Center) */}
  <Link
    href={projects[1].href}
    className="col-span-12 md:col-span-4 group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-900 transition-transform hover:scale-105"
  >
    <Image
      src={projects[1].image}
      alt={projects[1].title}
      fill
      className="object-cover transition-opacity group-hover:opacity-75"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity group-hover:bg-opacity-50">
      <h2 className="text-2xl font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
        {projects[1].title}
      </h2>
    </div>
  </Link>

  {/* Third Project (Top-Right) */}
  <Link
    href={projects[2].href}
    className="col-span-12 md:col-span-4 group relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-900 transition-transform hover:scale-105"
  >
    <Image
      src={projects[2].image}
      alt={projects[2].title}
      fill
      className="object-cover transition-opacity group-hover:opacity-75"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity group-hover:bg-opacity-50">
      <h2 className="text-2xl font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
        {projects[2].title}
      </h2>
    </div>
  </Link>

  {/* Fourth Project (Bottom-Left) */}
  <Link
    href={projects[3].href}
    className="col-span-12 md:col-span-6 group relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-900 transition-transform hover:scale-105"
  >
    <Image
      src={projects[3].image}
      alt={projects[3].title}
      fill
      className="object-cover transition-opacity group-hover:opacity-75"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity group-hover:bg-opacity-50">
      <h2 className="text-2xl font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
        {projects[3].title}
      </h2>
    </div>
  </Link>

  {/* Fifth Project (Bottom-Center) */}
  <Link
    href={projects[4].href}
    className="col-span-12 md:col-span-3 group relative aspect-[1/1] overflow-hidden rounded-lg bg-gray-900 transition-transform hover:scale-105"
  >
    <Image
      src={projects[4].image}
      alt={projects[4].title}
      fill
      className="object-cover transition-opacity group-hover:opacity-75"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity group-hover:bg-opacity-50">
      <h2 className="text-2xl font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
        {projects[4].title}
      </h2>
    </div>
  </Link>

  {/* Sixth Project (Bottom-Right) */}
  <Link
    href={projects[5].href}
    className="col-span-12 md:col-span-3 group relative aspect-[1/1] overflow-hidden rounded-lg bg-gray-900 transition-transform hover:scale-105"
  >
    <Image
      src={projects[5].image}
      alt={projects[5].title}
      fill
      className="object-cover transition-opacity group-hover:opacity-75"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity group-hover:bg-opacity-50">
      <h2 className="text-2xl font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
        {projects[5].title}
      </h2>
    </div>
  </Link>
</div>


      </main>
      <Footer/>
    </div>
  )
}

