import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-[10vh] w-full flex items-center justify-between">
      <img
        className="h-full transform transition-transform hover:scale-125"
        src="https://static.vecteezy.com/system/resources/thumbnails/008/212/813/small/cooking-logo-design-vector.jpg"
        alt=""
      />
      <div className="hidden sm:flex gap-x-10 text-md items-center">
        <NavLink
          
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-green-200 text-green-600 rounded-full p-2 shadow-xl"
              : "rounded-full hover:text-green-600 hover:scale-105 hover:bg-green-200 duration-200 hover:shadow-xl p-2"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            isActive
              ? "bg-green-200 text-green-600 rounded-full p-2 shadow-xl"
              : "rounded-full hover:text-green-600 hover:scale-105 hover:bg-green-200 duration-200 hover:shadow-xl p-2"
          }
        >
          Recipes
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "bg-green-200 text-green-600 rounded-full p-2 shadow-xl"
              : "rounded-full hover:text-green-600 hover:scale-105 hover:bg-green-200 duration-200 hover:shadow-xl p-2"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "bg-green-200 text-green-600 rounded-full p-2 shadow-xl"
              : "rounded-full hover:text-green-600 hover:scale-105 hover:bg-green-200 duration-200 hover:shadow-xl p-2"
          }
        >
          Contact
        </NavLink>
      </div>
      <div className="sm:hidden">
        <button onClick={toggleMenu}>
          <i className="text-3xl ri-grid-fill text-green-600"></i>
        </button>
      </div>
      <motion.div
        className="sm:hidden absolute top-[10vh] left-0 w-full bg-white py-2"
        animate={isMenuOpen ? "open" : "closed"}
        variants={variants}
      >
        <NavLink
          
          to="/"
          className={({ isActive }) =>
            isActive
              ? "block text-center py-2 bg-green-200 text-green-600 rounded-full shadow-xl"
              : "block text-center py-2 border-b border-gray-200 rounded-full hover:text-green-600 hover:scale-105 hover:bg-green-200 duration-200 hover:shadow-xl"
          }
          onClick={toggleMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            isActive
              ? "block text-center py-2 bg-green-200 text-green-600 rounded-full shadow-xl"
              : "block text-center py-2 border-b border-gray-200 rounded-full hover:text-green-600 hover:scale-105 hover:bg-green-200 duration-200 hover:shadow-xl"
          }
          onClick={toggleMenu}
        >
          Recipes
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "block text-center py-2 bg-green-200 text-green-600 rounded-full shadow-xl"
              : "block text-center py-2 border-b border-gray-200 rounded-full hover:text-green-600 hover:scale-105 hover:bg-green-200 duration-200 hover:shadow-xl"
          }
          onClick={toggleMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "block text-center py-2 bg-green-200 text-green-600 rounded-full shadow-xl"
              : "block text-center py-2 border-b border-gray-200 rounded-full hover:text-green-600 hover:scale-105 hover:bg-green-200 duration-200 hover:shadow-xl"
          }
          onClick={toggleMenu}
        >
          Contact
        </NavLink>
      </motion.div>
    </nav>
  );
};

export default Nav;
