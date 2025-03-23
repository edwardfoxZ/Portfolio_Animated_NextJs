"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navbarUrls = [
  { title: "About", link: "#about" },
  { title: "Portfolio", link: "#portfolio" },
  { title: "Stack", link: "#stack" },
  { title: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isToggled ? "hidden" : "auto";
  }, [isToggled]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Desktop Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex fixed top-5 left-1/2 transform -translate-x-1/2 w-[430px] p-3 rounded-3xl text-fuchsia-300 backdrop-blur-3xl border border-white/20 bg-black/50"
      >
        <ul className="flex flex-row justify-center w-full space-x-8">
          {navbarUrls.map((nav, index) => (
            <li key={index}>
              <a
                href={nav.link}
                className="text-xl font-semibold hover:text-fuchsia-600 transition-all duration-300 ease-in-out"
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Mobile Navbar */}
      <AnimatePresence>
        {isToggled && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/90 flex md:hidden z-50"
          >
            <ul className="flex flex-col justify-center text-center space-y-6 w-full">
              {navbarUrls.map((nav, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <a
                    href={nav.link}
                    className="text-3xl font-extrabold text-white hover:text-fuchsia-600 transition-all duration-300 ease-in-out"
                    onClick={() => setIsToggled(false)}
                  >
                    {nav.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hamburger Button (Mobile Only) */}
      <div className="md:hidden fixed top-5 right-5 z-50">
        <button
          onClick={() => setIsToggled(!isToggled)}
          className="relative w-10 h-10 flex flex-col justify-between items-center"
        >
          <motion.div
            animate={isToggled ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-8 h-1 bg-white rounded transition-all"
          />
          <motion.div
            animate={isToggled ? { opacity: 0 } : { opacity: 1 }}
            className="w-8 h-1 bg-white rounded transition-all"
          />
          <motion.div
            animate={isToggled ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-8 h-1 bg-white rounded transition-all"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
