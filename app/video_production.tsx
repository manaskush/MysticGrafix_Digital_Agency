"use client";

import Image from "next/image";

const stores = [
  {
    image: "/images/video1.png",
    quote: "MysticGrafix showed us to get started, what to do, and how to do it.",
    name: "Shakib",
  },
  {
    image: "/images/video3.jpg",
    quote:
      "We had no idea how to get started, but MysticGrafix showed us the way. And we were able to create something amazing.",
    name: "Manish Kunwar",
  },

  {
    image: "/images/video2.png",
    quote:
      "The team at MysticGrafix is amazing. They helped us create a stunning videos for our game that we are proud of.",
    name: "Fahad Hussain",
  },
];

const VideoProd = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
    rounded-3xl
  
  "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          Video Production <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-lg text-center mx-auto">
          We create stunning Videos for Youtube, Ads or Personal Preferences .
        </p>
        <div className="md:flex items-center justify-center  px-10 ">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={store.image}
                  alt="shopify store"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center ">
                  &quot;{store.quote}&quot;
                </p>
                <p className="text-neutral-800 font-bold text-lg mt-4">
                  {" "}
                  - {store.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoProd;
