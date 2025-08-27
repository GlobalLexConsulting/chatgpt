import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

const availableLanguages = {
  es: { name: "ES", path: "/trabajo-en-alemania" },
  en: { name: "EN", path: "/work-in-germany" },
  de: { name: "DE", path: "/arbeiten-in-deutschland" },
  it: { name: "IT", path: "/lavoro-in-germania" },
};

const LanguageSelector = ({ currentLang, onLangChange, motionProps, className, isMobile = false }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLanguageSwitch = (langCode) => {
    onLangChange(langCode);
    const currentPath = location.pathname;
    const isWorkPage = Object.values(availableLanguages).some(lang => lang.path === currentPath);

    if (isWorkPage && availableLanguages[langCode]) {
      navigate(availableLanguages[langCode].path);
    }
  };

  const triggerClass = isMobile
    ? "w-auto h-9 text-xs border-none bg-transparent hover:bg-accent focus:ring-0 px-2 text-gray-300 hover:text-white"
    : "w-auto h-9 text-xs border-none bg-transparent hover:bg-gray-700/50 focus:ring-0 px-2 text-gray-300 hover:text-white";

  const selector = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={cn(triggerClass, "flex items-center space-x-1")}>
          <Globe className="h-4 w-4 flex-shrink-0"/>
          <span className="font-medium">{availableLanguages[currentLang]?.name || currentLang.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700 text-white">
        {Object.entries(availableLanguages).map(([code, lang]) => (
           <DropdownMenuItem key={code} onSelect={() => handleLanguageSwitch(code)} className="hover:bg-gray-700 focus:bg-gray-700">
             {lang.name}
           </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  if (motionProps) {
    return (
      <motion.div {...motionProps} className={className}>
        {selector}
      </motion.div>
    );
  }

  return (
    <div className={className}>
      {selector}
    </div>
  );
};

export default LanguageSelector;