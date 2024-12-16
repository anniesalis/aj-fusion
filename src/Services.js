import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h2>
      <div className="services-list">
        <motion.div
          className="service-card"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Web Design</h3>
          <p>Responsive and beautiful designs that engage your audience.</p>
        </motion.div>
        <motion.div
          className="service-card"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>E-commerce</h3>
          <p>Build your online store with features like payment gateways and more.</p>
        </motion.div>
        <motion.div
          className="service-card"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>Landing Pages</h3>
          <p>Custom landing pages designed to convert visitors into customers.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
