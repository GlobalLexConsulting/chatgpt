import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

const DesktopNavLinks = ({ navLinks, handleNavLinkClick }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const comparativasLinks = [
    { name: "vs Deloitte", path: "/comparativas/deloitte" },
    { name: "vs CE Consulting", path: "/comparativas/ce-consulting" },
    { name: "vs Exim Asesores", path: "/comparativas/exim-asesores" },
    { name: "vs Martín Lechado", path: "/comparativas/martin-lechado" },
    { name: "vs Olympia Abogados", path: "/comparativas/olympia-abogados" },
  ];

  return (
    <div className="hidden md:flex items-center space-x-1">
      {navLinks.map((link, index) => {
        if (link.name === 'Comparativas') {
          const isActive = comparativasLinks.some(subLink => currentPath.startsWith(subLink.path));
          return (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center outline-none",
                    isActive
                      ? "bg-primary/20 text-white"
                      : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                  )}
                >
                  {link.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-800 border-gray-700 text-white">
                  {comparativasLinks.map(subLink => (
                    <DropdownMenuItem key={subLink.name} asChild className="hover:bg-gray-700 focus:bg-gray-700">
                      <Link to={subLink.path} onClick={(e) => handleNavLinkClick(subLink.path, e)}>
                        {subLink.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>
          );
        }

        const isActive = (link.path === '/' && currentPath === '/') ||
                         (link.path !== '/' && currentPath.startsWith(link.path));

        return (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
          >
            <Link
              to={link.path}
              onClick={(e) => handleNavLinkClick(link.path, e)}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                isActive
                  ? "bg-primary/20 text-white"
                  : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {link.name}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default DesktopNavLinks;