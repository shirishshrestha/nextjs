import { BackgroundBeams } from "@/components/ui/background-beams";
import { Meteors } from "@/components/ui/meteors";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <BackgroundBeams />
      <h2 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        Contact Us
      </h2>
      <div className="flex flex-col gap-3">
        <label>Full name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" name="" id="" />
        <button className="mt-10 bg-blue-200 rounded-md text-black py-2">
          Submit
        </button>
      </div>
    </div>
  );
};

export default page;
