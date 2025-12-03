"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    title: "PRIDE AND EXCELLENCE IN CONSTRUCTION",
    project: "SOUTH QUARTER RESIDENCE",
    location: "Jakarta, Indonesia",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop",
    title: "BUILDING THE FUTURE TOGETHER",
    project: "MENARA KAZANTARU",
    location: "Surabaya, Indonesia",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    title: "INNOVATION IN EVERY STRUCTURE",
    project: "GREEN OFFICE PARK",
    location: "Bandung, Indonesia",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-7xl font-bold text-white max-w-4xl leading-tight tracking-tight drop-shadow-lg"
            >
              {slides[current].title}
            </motion.h1>
          </div>

          {/* Bottom Project Info */}
          <div className="absolute bottom-10 left-8 md:left-20 text-white">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider">
                {slides[current].project}
              </h3>
              <p className="text-sm md:text-base opacity-90">
                {slides[current].location}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 right-8 md:right-20 flex gap-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full border border-white/50 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full border border-white/50 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
