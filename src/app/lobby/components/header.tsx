"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

type HeaderProps = {
  running: boolean;
};

const Header = ({ running }: HeaderProps) => {
  const pathname = usePathname();
  const pathnameArray = pathname.split("/").filter((str) => /\w+/.test(str));
  const title = pathnameArray[pathnameArray.length - 1].toUpperCase();

  return (
    <AnimatePresence>
      {!running && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex justify-between fixed top-0 left-0 right-0 h-20
              glass-container border-l-0 border-r-0 text-white"
        >
          <p className="text-3xl leading-[5.5rem] ml-8">{title}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Header;
