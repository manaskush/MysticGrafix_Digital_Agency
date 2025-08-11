import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMetaLogo, PiMonitor, PiStorefront } from "react-icons/pi";
import smm from "@/public/icons/smm.png";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        icon : <div className="bg-blue-100 p-4 rounded-full">
          <img src="/icons/smm.png" alt="Social Media Management" className="w-8 h-8 object-contain" />

          {/* <PiMonitor className="w-8 h-8 text-blue-600" /> */}
          </div>,
        title: "Social Media Management",
        description:
          "From creative posts to reels, influencer marketing, and META ads — we grow your online presence and boost engagement.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full">
          <img src="/icons/logo-design.png" alt="Logo & Brand Identity Design" className="w-8 h-8 object-contain" />
          {/* <PiStorefront className="w-8 h-8 text-blue-600" /> */}
          </div>,
        title: "Logo & Brand Identity Design",
        description:
          "Crafting memorable logos and visual identities that make your brand stand out and connect with your audience.",
       
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full">
          <img src="/icons/video-production.png" alt="Video Production" className="w-8 h-8 object-contain" />
          {/* <PiMetaLogo className="w-8 h-8 text-blue-600" /> */}
          </div>,
        title: "Product & Ad Shoots",
        description:
          "Professional product photography and video ad shoots that showcase your brand in the best light and increase sales.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full">
          <img src="/icons/snacks.png" alt="Package Design" className="w-8 h-8 object-contain" />
          {/* <PiMegaphone className="w-8 h-8 text-blue-600" /> */}
          </div>,
        title: "Packaging Design",
        description:
          "Eye-catching, market-ready packaging designs that reflect your brand and attract customers.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full">
          <img src="/icons/3d-model.png" alt="3D & Motion Graphics" className="w-8 h-8 object-contain" />
          {/* <PiAppStoreLogo className="w-8 h-8 text-blue-600" /> */}
          </div>,
        title: "3D & Motion Graphics",
        description:
          "High-quality 3D designs, animations, and videos that bring your ideas to life in a visually stunning way.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full">
          <img src="/icons/app-development.png" alt="Web Development" className="w-8 h-8 object-contain" />
          {/* <PiHeadsetFill className="w-8 h-8 text-blue-600" /> */}
          </div>,
        title: "Website Design & Development",
        description:
          "We create responsive, high-performing websites that attract visitors, enhance user experience, and drive conversions for your business.",
         },
];
