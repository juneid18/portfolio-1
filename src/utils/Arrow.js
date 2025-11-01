import React from "react";
import { motion } from "framer-motion";

const Arrow = ({ isLoading }) => {
  // Always render SVG, but animate opacity/pathLength
  const svgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <div style={{marginLeft:'30rem'}}>
      <motion.svg
      className="Scribble"
      viewBox="0 0 78 48"
      fill="none"
      width="78"
      height="48"
      variants={svgVariants}
      initial="hidden"
      animate={isLoading ? "hidden" : "visible"} // control animation by isLoading
      style={{ display: "block" }}
    >
      <motion.path
        d="M0.459961 7.86998C5.87996 20.49 15.1 28.85 30.85 23.42C58.28 13.95 37.57 -6.48002 25.65 2.91998C13.73 12.32 22.38 39 39.29 45.35C52.82 50.44 70.41 41.78 77.38 37.13"
        stroke="#2e2e2e"
        strokeWidth={2}
        fill="none"
        variants={pathVariants}
        initial="hidden"
        animate={isLoading ? "hidden" : "visible"}
      />
    </motion.svg>
    </div>
    
  );
};

export default Arrow;
