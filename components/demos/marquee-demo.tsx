import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "AI Angandwadi",
    img: "/images/angnwadi.png",
  },
  {
    name: "Fassad",
     img: "/images/fassad.png",
  },
  {
    name: "Meerut Mahotsav",
    img: "/images/MM.png",
  },
  {
    name: "The Pahadi Bro",
   img: "/images/PAHADIBRO.png",
  },
  {
    name: "Surya K_Star",
  img: "/images/platestar.png",
  },
  {
    name: "Ventes",
     img: "/images/venteslogo.png",
  },
  {
    name: "The Wollek Club",
     img: "/images/wclub.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
 
}: {
  img: string;
  name: string;

}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <img className="rounded-full" width="108" height="108" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
        </div>
      </div>
      
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full bg-none flex-col  items-center justify-center overflow-hidden rounded-lg  ">
        <div className="text-3xl  md:text-5xl text-center my-8 bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
              "Brands That Believe in Us"
            </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
    </div>
  );
}
