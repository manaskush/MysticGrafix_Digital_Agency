import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Maninder Buttar",
      image: "",
      href: "#",
    },
    {
      id: 2,
      title: "House Of X",
      image: "",
      href: "#",
    },
    {
      id: 3,
      title: "Highcha Bubble Tea",
      image: "",
      href: "#",
    },
    {
      id: 4,
      title: "Indian",
      image: "",
      href: "#",
    },
    {
      id: 5,
      title: "Head Light",
      image: "",
      href: "#",
    },
    {
      id: 6,
      title: "Cultural",
      image: "",
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
          <Link href="/merch" className="text-white hover:text-gray-300">
            Merch
          </Link>
          <Link href="/" className="text-2xl font-bold">
            DZINR
          </Link>
          <Link href="/team" className="text-white hover:text-gray-300">
            Team
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
          {/* Maninder Buttar - Large left */}
          <Link
            href={projects[0].href}
            className="col-span-12 md:col-span-5 group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-900 transition-transform hover:scale-105"
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

          {/* House of X - Top right */}
          <Link
            href={projects[1].href}
            className="col-span-12 md:col-span-7 group relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-900 transition-transform hover:scale-105"
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

          {/* Headlight - Middle right */}
          <Link
            href={projects[4].href}
            className="col-span-12 md:col-span-7 group relative aspect-square overflow-hidden rounded-lg bg-gray-900 transition-transform hover:scale-105"
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

          {/* Highcha - Right */}
          <Link
            href={projects[2].href}
            className="col-span-12 md:col-span-5 group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-900 transition-transform hover:scale-105"
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

          {/* Indian - Bottom left */}
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

          {/* Cultural - Bottom right */}
          <Link
            href={projects[5].href}
            className="col-span-12 md:col-span-6 group relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-900 transition-transform hover:scale-105"
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
    </div>
  )
}

