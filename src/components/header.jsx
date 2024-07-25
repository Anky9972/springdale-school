import React, { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import file from '../assets/file.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 50 }
    }
  };

  return (
    <motion.header
      className="w-full bg-[#af0e2e] flex flex-col gap-10"
      initial="hidden"
      animate="visible"
    >
      <div className="w-full p-5 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 50, duration: 1 }}
        >
          <img src={file} alt="School Logo" className="w-28" />
        </motion.div>
        <motion.h1
          className="hidden sm:block text-4xl lg:text-6xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 50, duration: 1, delay: 0.5 }}
        >
          Springdale Public School
        </motion.h1>
        <span  className="hidden lg:block w-20"></span>
        <span className="lg:hidden" onClick={toggleMenu}>
          {menuOpen ? <FaTimes className="text-white text-3xl cursor-pointer" /> : <FaBars className="text-white text-3xl cursor-pointer" />}
        </span>
      </div>
      <div className="hidden lg:flex justify-center items-center">
        <nav className="flex gap-5 text-xl font-bold text-white">
          <Link
            to="hero"
            smooth={true}
            duration={1000}
            className="p-2 hover:text-black hover:cursor-pointer duration-300 transition-all"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={1100}
            className="p-2 hover:text-black hover:cursor-pointer duration-300 transition-all"
          >
            About Us
          </Link>
          <Link
            to="academics"
            smooth={true}
            duration={1200}
            className="p-2 hover:text-black hover:cursor-pointer duration-300 transition-all"
          >
            Academics
          </Link>
          <Link
            to="admissions"
            smooth={true}
            duration={1300}
            className="p-2 hover:text-black hover:cursor-pointer duration-300 transition-all"
          >
            Admissions
          </Link>
          <Link
            to="faculty"
            smooth={true}
            duration={1300}
            className="p-2 hover:text-black hover:cursor-pointer duration-300 transition-all"
          >
            Faculty
          </Link>
          <Link
            to="students"
            smooth={true}
            duration={1400}
            className="p-2 hover:text-black hover:cursor-pointer duration-300 transition-all"
          >
            Students
          </Link>
          <Link
            to="gallery"
            smooth={true}
            duration={1500}
            className="p-2 hover:text-black hover:cursor-pointer duration-300 transition-all"
          >
            Gallery
          </Link>
          <NavLink
            to="/contact"
            className="p-2 hover:text-black hover:cursor-pointer duration-300 transition-all"
          >
            Contact Us
          </NavLink>
        </nav>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden fixed top-0 left-0 w-full h-full bg-[#af0e2e] z-50 flex flex-col items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <span className="absolute top-5 right-5" onClick={toggleMenu}>
              <FaTimes className="text-white text-3xl cursor-pointer" />
            </span>
            <nav className="flex flex-col gap-5 text-2xl font-bold text-white">
              <Link
                to="hero"
                smooth={true}
                duration={1000}
                className="p-2 hover:text-black hover:cursor-pointer duration-300 transition-all"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                className="p-2 hover:text-black hover:cursor-pointer duration-300 transition-all"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="academics"
                smooth={true}
                duration={1000}
                className="p-2 hover:text-black hover:cursor-pointer duration-300 transition-all"
                onClick={toggleMenu}
              >
                Academics
              </Link>
              <Link
                to="admissions"
                smooth={true}
                duration={1000}
                className="p-2 hover:text-black hover:cursor-pointer duration-300 transition-all"
                onClick={toggleMenu}
              >
                Admissions
              </Link>
              <Link
                to="faculty"
                smooth={true}
                duration={1000}
                className="p-2 hover:text-black hover:cursor-pointer duration-300 transition-all"
                onClick={toggleMenu}
              >
                Faculty
              </Link>
              <Link
                to="students"
                smooth={true}
                duration={1000}
                className="p-2 hover:text-black hover:cursor-pointer duration-300 transition-all"
                onClick={toggleMenu}
              >
                Students
              </Link>
              <Link
                to="gallery"
                smooth={true}
                duration={1000}
                className="p-2 hover:text-black hover:cursor-pointer duration-300 transition-all"
                onClick={toggleMenu}
              >
                Gallery
              </Link>
              <NavLink
                to="/contact"
                className="p-2 hover:text-black hover:cursor-pointer duration-300 transition-all"
                onClick={toggleMenu}
              >
                Contact Us
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
