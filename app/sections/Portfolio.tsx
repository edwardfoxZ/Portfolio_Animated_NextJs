"use client";

import React from "react";
import project1 from "@/public/assets/proj6.png";
import project2 from "@/public/assets/proj7.png";
import project3 from "@/public/assets/proj8.png";
import project4 from "@/public/assets/proj9.png";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { motion, useInView } from "framer-motion";

const portfolios = [
  {
    id: 1,
    tag: "Web Design",
    title: "DesignCube Framer Website",
    elements: [
      { id: 1, bulletTitle: "Enhanced user experience 40%" },
      { id: 2, bulletTitle: "Improved site speed by 50%" },
      { id: 3, bulletTitle: "Increase mobile traffic by 30%" },
    ],
    image: project1,
  },
  {
    id: 2,
    tag: "Web Design",
    title: "HealthWell Website in Framer",
    elements: [
      { id: 4, bulletTitle: "Enhanced user experience 40%" },
      { id: 5, bulletTitle: "Improved site speed by 50%" },
      { id: 6, bulletTitle: "Increase mobile traffic by 30%" },
    ],
    image: project2,
  },
  {
    id: 3,
    tag: "Web Design",
    title: "Thelist Framer Website",
    elements: [
      { id: 7, bulletTitle: "Enhanced user experience 40%" },
      { id: 8, bulletTitle: "Improved site speed by 50%" },
      { id: 9, bulletTitle: "Increase mobile traffic by 30%" },
    ],
    image: project3,
  },
  {
    id: 4,
    tag: "Web Design",
    title: "Reify Website in Framer",
    elements: [
      { id: 10, bulletTitle: "Enhanced user experience 40%" },
      { id: 11, bulletTitle: "Improved site speed by 50%" },
      { id: 12, bulletTitle: "Increase mobile traffic by 30%" },
    ],
    image: project4,
  },
];

const Portfolio = () => {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      id="portfolio"
      className="bg-black bg-blend-darken p-16 min-h-[250vh]"
    >
      <div className="container flex flex-col items-start space-y-10 mt-80">
        {portfolios.map((portfolio, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            key={portfolio.id}
            className="flex flex-col space-y-7 md:flex-col md:space-y-7 lg:flex-row space-x-10 bg-gradient-to-r from-[#0d0d0e] via-[#303131] to-[#212122]
                     sticky top-28 w-[300px] md:w-[700px] lg:w-[1400px] border rounded-2xl p-10"
          >
            <div className="flex flex-col items-start space-y-6">
              <h3 className="text-sm md:text-lg">{portfolio.tag}</h3>
              <h1 className="max-w-xl md:max-w-lg text-3xl md:text-6xl">
                {portfolio.title}
              </h1>

              <div className="flex flex-col">
                {portfolio.elements.map((bullet) => (
                  <p
                    className="flex flex-row gap-2 text-sm md:text-2xl"
                    key={bullet.id}
                  >
                    <TiTick className="text-green-300" />
                    {bullet.bulletTitle}
                  </p>
                ))}
              </div>
            </div>

            <div className="ml-auto">
              <Image
                src={portfolio.image}
                alt={portfolio.image.toString()}
                width={700}
                height={300}
                className="rounded-3xl"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;
