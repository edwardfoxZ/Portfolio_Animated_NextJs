"use client";

import { useRef } from "react";
import Clouds from "../components/ui/Clouds";
import Image from "next/image";
import Profile from "@/public/assets/1920px-Harald_Hardrada_window_in_Kirkwall_Cathedral_geograph_2068881.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      id="about"
      className="overflow-x-clip relative min-h-screen pt-12 bg-[linear-gradient(180deg,#410445,#4635B1,#5D97C9,#0F62AB,#000)]"
    >
      <div
        className="absolute -top-[30%] gap-5 inset-0 flex flex-col items-center justify-center text-center z-30"
        ref={parallaxRef}
      >
        <Image
          src={Profile}
          draggable={false}
          alt="profile"
          className="rounded-xl aspect-auto mx-auto"
          width={250}
        />
        <h2 className="text-4xl md:text-7xl text-purple-300 font-extrabold">
          Let's create
        </h2>

        <TypeAnimation
          sequence={["exprience", 1000, "webstites", 1000, "designs", 1000]}
          className="text-4xl md:text-7xl text-fuchsia-300 inline-block font-extrabold"
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
        />
        <h1 className="text-lg md:text-xl text-center text-white/70 font-semibold max-w-[300px]">
          My name is John Doe. I am a Fullstack Developer with 5+ years
          experience.
        </h1>
      </div>
      <Clouds parallaxRef={parallaxRef} />
    </motion.section>
  );
};

export default Hero;
