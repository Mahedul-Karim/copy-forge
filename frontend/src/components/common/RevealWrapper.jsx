import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";

const RevealWrapper = ({ className = "", children }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 100 }}
      animate={ isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.6, ease: "easeOut",delay:0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealWrapper;
