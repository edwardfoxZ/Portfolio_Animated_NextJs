"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Full-Stack Web Development",
    description:
      "Building robust, scalable web applications from front-end to back-end, ensuring seamless functionality and user experience.",
  },
  {
    id: "02",
    title: "API Development",
    description:
      "Designing and implementing RESTful APIs to enable efficient communication between different software systems and services.",
  },
  {
    id: "03",
    title: "Database Design & Management",
    description:
      "Creating efficient database structures and managing data flow to ensure optimal performance and data integrity.",
  },
  {
    id: "04",
    title: "Cloud Integration",
    description:
      "Leveraging cloud technologies to deploy, scale, and manage applications, ensuring high availability and cost-effectiveness.",
  },
  {
    id: "05",
    title: "DevOps & CI/CD",
    description:
      "Implementing continuous integration and deployment pipelines to streamline development processes and improve code quality.",
  },
  {
    id: "06",
    title: "Performance Optimization",
    description:
      "Analyzing and optimizing application performance to ensure fast load times and smooth user interactions across all devices.",
  },
];

const Services = () => {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      id="services"
      className="py-20 text-white container mx-auto flex flex-col md:flex-row"
    >
      <div className="w-1/4 pr-8">
        <h1 className="sticky top-28 text-3xl font-extrabold md:text-6xl">
          SERVICES
        </h1>
      </div>
      <div className="flex flex-col space-y-8">
        {services.map((service, index) => (
          <div className="flex flex-row items-start space-x-3" key={index}>
            <h2 className="text-2xl font-bold md:text-4xl">{service.id}</h2>
            <div className="space-y-3">
              <h1 className="text-xl font-bold md:text-2xl">{service.title}</h1>
              <p className="font-thin">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
