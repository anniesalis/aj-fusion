import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero-title"
      >
        Build Scalable Websites with AJ Fusion
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="hero-description"
      >
        We specialize in web design and development, creating beautiful, responsive websites.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="hero-button"
      >
        Get Started
      </motion.button>
    </div>
  );
};

export default HeroSection;
