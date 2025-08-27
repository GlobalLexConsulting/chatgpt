import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavbarBrand = ({ handleNavLinkClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-shrink-0"
    >
      <Link
        to="/"
        onClick={() => handleNavLinkClick('/')}
        className="flex items-center space-x-2"
        aria-label="Ir a la página de inicio de ConsultGlobal Lex"
      >
        <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/1fcadb24-6860-4e02-b4aa-2babb26f382a/f0a2c30b04963369f3ef2b6994754f67.png" alt="ConsultGlobal Lex Logo" className="h-10 md:h-12" />
      </Link>
    </motion.div>
  );
};

export default NavbarBrand;