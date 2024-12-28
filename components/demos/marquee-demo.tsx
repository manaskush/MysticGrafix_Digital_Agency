import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Jack",
    img: "/images/angnwadi.png",
  },
  {
    name: "Jill",
     img: "/images/fassadlogo.png",
  },
  {
    name: "John",
    img: "/images/MM.png",
  },
  {
    name: "Jane",
   img: "/images/PAHADIBRO.png",
  },
  {
    name: "Jenny",
  img: "/images/platestar.png",
  },
  {
    name: "James",
     img: "/images/venteslogo.png",
  },
  {
    name: "James",
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
    <div className="relative flex h-[500px] w-full bg-none flex-col  items-center justify-center overflow-hidden rounded-lg  md:shadow-xl">
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
