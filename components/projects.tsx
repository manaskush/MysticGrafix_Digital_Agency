import React from "react";
import { Instagram } from "lucide-react";
import Image from "next/image";

// Define the types for the project data
interface Creator {
  name: string;
  image: string;
  instagramHandle: string;
}

interface Project {
  title: string;
  tags: string[];
  description: string;
  projectImage: string;
  creator: Creator;
}

// Sample data array
const projectData: Project[] = [
  {
    title: "Surya K.Star",
    tags: ["Logo Design", "Brand Identity","Video Production"],
    description:
      "A one-stop solution for creators and celebrities to create and empower best-in-class brands of the future. They are on a mission to build a house of brands that cater to the future generation, i.e., GenZ.",
    projectImage: "/images/plate.jpg",
    creator: {
      name: "Surya K.Star",
      image: "/images/platestar.png",
      instagramHandle: "@rajshamani",
    },
  },
  {
    title: "The Pahadi Bro",
    tags: ["UI/UX", "App Design"],
    description:
      "Creating next-generation user experiences through innovative app designs for startups and enterprises. Specializing in mobile-first designs for a seamless user experience.",
    projectImage: "/images/shilajit3.jpg",
    creator: {
      name: "Anisha Mehta",
      image: "/images/PAHADIBRO.png",
      instagramHandle: "@anishamehta",
    },
  },
  {
    title: "Ventes",
    tags: ["E-Commerce", "Web Development"],
    description:
      "Developing eco-friendly solutions for the digital age. EcoVision is dedicated to creating sustainable websites that contribute to environmental conservation.",
    projectImage: "/images/ventess.png",
    creator: {
      name: "Ventes InfoTech",
      image: "/images/venteslogo.png",
      instagramHandle: "@kabirjoshi",
    },
  },
];

// Define props for the ProjectCard component
interface ProjectCardProps {
  data: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <div className="max-w-4xl bg-black text-white p-6 rounded-xl mb-8">
      {/* Header Section */}
      <div className="space-y-4 mb-6">
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <div className="flex gap-2">
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-zinc-800 text-white rounded-full text-sm hover:bg-zinc-700 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-lg text-gray-300">{data.description}</p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Image */}
        <div className="relative rounded-lg overflow-hidden bg-gradient-to-b from-green-500/20 to-transparent">
          <Image
            src={data.projectImage}
            alt="Project visualization"
            className="w-full  object-cover"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Creator Profile */}
        <div className="flex items-end justify-end">
          <div className="text-right space-y-4">
            <Image
              src={data.creator.image}
              alt={`${data.creator.name}'s profile`}
              className="ml-auto  object-cover rounded-lg"
              width={300}
              height={300}
            />
            <div className="flex items-center justify-end gap-2">
              <Instagram className="w-5 h-5" />
              <span className="text-xl font-semibold">{data.creator.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-6 flex justify-end">
        <button className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors">
          More about the project
        </button>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="space-y-8">
      {projectData.map((project, index) => (
        <ProjectCard key={index} data={project} />
      ))}
    </div>
  );
};

export default Projects;
