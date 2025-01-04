import { useEffect, useState } from 'react';

const SlidingBarsReveal = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [showText, setShowText] = useState(-1);
  
  const services = [
    {
      title: "START-UPS",
      description: "We work with professionals who are moon-lighting to test ideas, founders in stealth mode, founding teams who are high on ambitions and low on resources to provide value.",
      color: "bg-blue-500",
      icon: "🚀"
    },
    {
      title: "MSME", 
      description: "Micro, Small and Medium Enterprises form the backbone of economies around the world. We work with businesses that are looking for growth and expansion.",
      color: "bg-green-500",
      icon: "🏪"
    },
    {
      title: "ENTERPRISE",
      description: "We are small enough to be agile & flexible and big enough to be trusted by Enterprise businesses that are looking to collaborate on specific projects and campaigns.",
      color: "bg-pink-500",
      icon: "🏢"
    },
    {
      title: "INDIVIDUALS",
      description: "We work with professionals and individuals looking for personalized solutions.",
      color: "bg-cyan-500",
      icon: "👤"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrollPosition / (windowHeight / 3));
      setActiveSection(Math.min(section, services.length - 1));
      
      if (section > showText) {
        setTimeout(() => setShowText(section), 500);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showText]);

  return (
    <div className="min-h-screen p-8  space-y-16">
      {services.map((service, index) => (
        <div key={index} className="relative h-32">
          <div className="absolute left-0 flex items-center gap-6 w-full">
            <span className="text-3xl z-10">{service.icon}</span>
            <div className={`
              relative flex-1 h-32 overflow-hidden
              ${service.color} rounded-lg
              transition-all duration-1000
            `}>
              <div className="absolute inset-0 flex justify-between items-center">
                <div className={`
                  pl-8 pr-4 py-4 bg-opacity-90 ${service.color}
                  transform transition-all duration-1000 delay-300
                  ${showText >= index ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
                `}>
                  <p className="text-white text-lg max-w-2xl">{service.description}</p>
                </div>
                <h2 className="text-white text-3xl font-bold whitespace-nowrap px-8">
                  {service.title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlidingBarsReveal;