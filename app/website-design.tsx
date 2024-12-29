import ProjectCard from "@/components/projects";

const Project = () => {
  return (
    <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
      
      <div className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-neutral-50 bg-opacity-50">
        Website Design <br /> that works
      </div>

      <p className="mt-4 mb-8 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
        Creating, designing and developing websites that work for your business.
      </p>

      <div className="flex flex-col items-center">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
