import React from "react";
import { Instagram } from "lucide-react";

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
    title: "House of X",
    tags: ["Logo Design", "Brand Identity"],
    description:
      "A one-stop solution for creators and celebrities to create and empower best-in-class brands of the future. They are on a mission to build a house of brands that cater to the future generation, i.e., GenZ.",
    projectImage: "/api/placeholder/600/300",
    creator: {
      name: "Raj Shamani",
      image: "/api/placeholder/400/400",
      instagramHandle: "@rajshamani",
    },
  },
  {
    title: "NextGen Design Studio",
    tags: ["UI/UX", "App Design"],
    description:
      "Creating next-generation user experiences through innovative app designs for startups and enterprises. Specializing in mobile-first designs for a seamless user experience.",
    projectImage: "/api/placeholder/600/300",
    creator: {
      name: "Anisha Mehta",
      image: "/api/placeholder/400/400",
      instagramHandle: "@anishamehta",
    },
  },
  {
    title: "EcoVision",
    tags: ["Sustainability", "Web Development"],
    description:
      "Developing eco-friendly solutions for the digital age. EcoVision is dedicated to creating sustainable websites that contribute to environmental conservation.",
    projectImage: "/api/placeholder/600/300",
    creator: {
      name: "Kabir Joshi",
      image: "/api/placeholder/400/400",
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
          <img
            src={data.projectImage}
            alt="Project visualization"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Creator Profile */}
        <div className="flex items-end justify-end">
          <div className="text-right space-y-4">
            <img
              src={data.creator.image}
              alt={`${data.creator.name}'s profile`}
              className="ml-auto w-48 h-48 object-cover rounded-lg"
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
