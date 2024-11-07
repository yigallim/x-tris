"use client";
import React from "react";
import { motion } from "framer-motion";

const Template = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Template;
