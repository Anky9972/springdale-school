import React, { useState } from "react";
import { motion } from "framer-motion";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

const testimonials = [
  {
    name: "Alice Johnson",
    profile: pic1,
    role: "Parent",
    text: "Springdale Public School has been a fantastic experience for my child. The teachers are dedicated, and the curriculum is engaging and comprehensive.",
  },
  {
    name: "Robert Smith",
    profile: pic2,
    role: "Alumni",
    text: "My years at Springdale were formative and enriching. The school provided me with a solid foundation and a love for learning that continues to this day.",
  },
  {
    name: "Emily Davis",
    profile: pic3,
    role: "Current Student",
    text: "The school environment is supportive and encouraging. The teachers are always ready to help, and there are plenty of opportunities for extracurricular activities.",
  },
  // Add more testimonials as needed
];

const slideVariants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="p-5 sm:p-10 lg:p-20 bg-[#f5f5f5] flex flex-col justify-center items-center gap-8 sm:gap-10 md:gap-12"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 md:mb-8">
        What People Are Saying
      </h2>
      <div className=" mx-auto text-center w-full max-w-3xl">
        <div className="relative">
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="p-6 sm:p-8 md:p-12 bg-white rounded-3xl shadow-lg relative flex flex-col items-center gap-6 sm:gap-8 md:gap-10"
          >
            <img
              src={testimonials[currentIndex].profile}
              alt="profile-pic"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mx-auto mb-4 bg-contain shadow-xl"
              loading="lazy"
            />
            <p className="text-base sm:text-lg md:text-xl mb-4 px-4 sm:px-6 md:px-8">
              "{testimonials[currentIndex].text}"
            </p>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-sm sm:text-base md:text-md text-gray-500">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </motion.div>
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-[#af0e2e] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
          >
            <img
              src="https://uploads-ssl.webflow.com/63b50a8555c48170e0bd670f/63ba665ae3ca2addb4de3b39_arrow-right.svg"
              alt="arrow-img"
              className="w-4 h-4 sm:w-6 sm:h-6"
              loading="lazy"
            />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-[#af0e2e] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
          >
            <img
              src="https://uploads-ssl.webflow.com/63b50a8555c48170e0bd670f/63ba665ae3ca2addb4de3b39_arrow-right.svg"
              alt="arrow-img"
              className="w-4 h-4 sm:w-6 sm:h-6"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
