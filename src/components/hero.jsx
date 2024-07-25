import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/building.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, delay: 0.3 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5 }
    }
  };

  return (
    <section id="home" className="w-full p-5 sm:p-10 lg:p-20 bg-[#af0e2e]  relative flex md:items-center justify-center">
      <motion.div
        className="w-full text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white" variants={textVariants}>
          Welcome to Springdale Public School
        </motion.h2>
        <motion.p className="text-base md:text-lg lg:text-xl text-white mb-8" variants={textVariants}>
          Where we nurture young minds for a brighter future.
        </motion.p>
        <div className=" mt-8">
          <img src={img} alt="building" loading='lazy' className="w-full h-auto  mx-auto" />
        </div>
        
      </motion.div>
    </section>
  );
};

export default Hero;
