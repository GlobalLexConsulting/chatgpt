import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const NavbarContainer = ({ scrolled, isOpen, children }) => {
  return (
    <motion.nav
      initial={false}
      animate={scrolled ? "scrolled" : "top"}
      variants={{
        top: {
          backgroundColor: "rgba(17, 24, 39, 0)", // bg-gray-900 transparent initially
          boxShadow: "none",
          borderColor: "rgba(55, 65, 81, 0)", // border-gray-700 transparent
        },
        scrolled: {
          backgroundColor: "rgba(17, 24, 39, 0.85)", // bg-gray-900 with opacity on scroll
          backdropFilter: "blur(8px)",
          borderColor: "rgba(55, 65, 81, 1)", // border-gray-700 solid
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // shadow-md
        },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full border-b",
        isOpen ? "bg-gray-900/95 border-gray-700" : "" // Ensure solid background when mobile menu is open
      )}
    >
      <div className="container mx-auto px-4">{children}</div>
    </motion.nav>
  );
};

export default NavbarContainer;