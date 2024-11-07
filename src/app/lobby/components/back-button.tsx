"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

type BackButtonProps = {
  running: boolean;
};

const BackButton = ({ running }: BackButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const pathnameArray = pathname.split("/").filter((str) => /\w+/.test(str));

  return (
    <AnimatePresence>
      {pathnameArray.length > 1 && !running && (
        <motion.button
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="glass-container fixed top-28 left-0 text-white pt-3 pb-1.5 pl-8 hover:pl-16 duration-300 pr-4 text-2xl rounded-r border-l-0 lighten"
          onClick={() => router.back()}
        >
          BACK
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackButton;
