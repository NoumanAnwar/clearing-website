"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/hero1.jpg",
  "/hero2.webp",
  "/hero5.jpg",
  "/hero6.jpg",
  "/consultancy.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Cycle through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 5 seconds per image
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background images */}
      <AnimatePresence>
        {images.map((img, index) =>
          index === current ? (
            <motion.div
              key={img}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${img})` }}
            />
          ) : null
        )}
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center max-w-3xl text-white px-6 z-10"
      >
        <h1
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Expert Clearing & Forwarding Company
        </h1>
        <p className="text-lg md:text-xl mb-6 Calibri, sans-serif">
          Professional customs clearing, freight forwarding, transportation,
          warehousing, DG cargo handling, import/export consultancy, and
          documentation services across all major Pakistani ports.
        </p>
        <a
          href="#contact"
          className="inline-block bg-linear-to-r from-blue-600 to-teal-400 hover:from-teal-400 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 "
        >
          Get a Quote
        </a>
      </motion.div>
    </section>
  );
}
