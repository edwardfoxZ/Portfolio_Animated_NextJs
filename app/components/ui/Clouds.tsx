"use client";

import React, { RefObject, useEffect, useState } from "react";
import Circles from "./Circles";
import { MouseParallax } from "react-just-parallax";
import cloud1 from "@/public/assets/cloud1.png";
import cloud2 from "@/public/assets/cloud2.png";
import cloud3 from "@/public/assets/cloud3.png";
import cloud4 from "@/public/assets/cloud4.png";
import cloud5 from "@/public/assets/cloud5.png";
import Image from "next/image";

interface BackgrounCloudsProps {
  parallaxRef: RefObject<HTMLDivElement | null>;
}

const Clouds: React.FC<BackgrounCloudsProps> = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute top-[-35%] left-[50%] w-[78rem] -translate-x-1/2 aspect-square z-30">
      <Circles />

      <MouseParallax strength={0.1} parallaxContainerRef={parallaxRef}>
        <div className="absolute bottom-[7%] -left-[5%] origin-bottom transition-transform duration-500 ease-out">
          <Image
            src={cloud1}
            draggable={false}
            alt="cloud1"
            className={`w-72 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute top-[35%] left-1/12 origin-bottom transition-transform duration-500 ease-out">
          <Image
            src={cloud2}
            draggable={false}
            alt="cloud2"
            className={`w-72 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute top-[45%] -right-[5%] origin-bottom transition-transform duration-500 ease-out">
          <Image
            src={cloud3}
            draggable={false}
            alt="cloud3"
            className={`w-72 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute top-3/4 right-1/2 origin-bottom transition-transform duration-500 ease-out">
          <Image
            src={cloud4}
            draggable={false}
            alt="cloud4"
            className={`w-72 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute top-[75%] right-[8%] origin-bottom transition-transform duration-500 ease-out">
          <Image
            src={cloud5}
            draggable={false}
            alt="cloud5"
            className={`w-72 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};

export default Clouds;
