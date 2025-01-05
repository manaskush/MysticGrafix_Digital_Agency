import React from "react";
import { Vortex } from "../ui/vortex";
import Link from "next/link";

export function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden my-36">
      <Vortex
        backgroundColor="transparent"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="text-4xl pb-5 md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-neutral-50">
          MysticGrafix
        </div>
        {/* <p className="mt-4 text-xl font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Custom Image and Video Designs based on your Interests. We are a
          team of creatives who are excited to provide you with best design
          and web solutions.
        </p> */}

        {/* <Link
          href="/book"
          className="cursor-pointer flex items-center justify-center border rounded-full w-64 p-2 mx-auto my-10 text-white"
        >
          Book a call
        </Link> */}
      </Vortex>
    </div>
  );
}