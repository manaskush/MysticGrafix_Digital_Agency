import HeroVideoDialog from "../ui/hero-video-dialog";


// Define the props type for the component
interface HeroVideoDialogDemoTopInBottomOutProps {
  videoSrc: string;
}

export const HeroVideoDialogDemoTopInBottomOut: React.FC<HeroVideoDialogDemoTopInBottomOutProps> = ({
  videoSrc,
}) => {
  return (
    <div className="relative">
      {/* Light theme video */}
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="top-in-bottom-out"
        videoSrc={videoSrc}
        thumbnailSrc="../../public/images/plate.jpg"
        thumbnailAlt="Hero Video"
      />
      {/* Dark theme video */}
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc={videoSrc}
        thumbnailSrc="../../public/images/plate.jpg"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
};