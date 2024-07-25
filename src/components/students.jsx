import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } },
};

const Students = () => (
  <motion.section
    id="students"
    className="p-5 sm:p-10 lg:p-20 bg-gray-100"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={sectionVariants}
  >
    <div className=" mx-auto">
      <motion.h2
        className="text-4xl font-bold mb-6 text-center text-[#af0e2e] underline"
        variants={itemVariants}
      >
        Student Life
      </motion.h2>

      {[
        {
          title: 'Extracurricular Activities',
          content: 'Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club',
        },
        {
          title: 'Clubs and Societies',
          content: 'Literary Society, Environmental Club, Astronomy Club, Coding Club',
        },
        {
          title: 'Achievements',
          content: (
            <ul className="list-disc list-inside mt-2 text-lg text-gray-700">
              <li>John Smith - National Level Math Olympiad Winner</li>
              <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
              <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
            </ul>
          ),
        },
        {
          title: 'Student Council',
          content: (
            <ul className="list-disc list-inside mt-2 text-lg text-gray-700">
              <li>President: Amy Parker, Grade 12</li>
              <li>Vice President: Rajiv Mehta, Grade 11</li>
              <li>Secretary: Lisa Wong, Grade 10</li>
            </ul>
          ),
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="mb-5 md:mb-12 p-6 bg-white shadow-lg rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: index * 0.2 } },
          }}
        >
          <h3 className="text-3xl font-bold text-[#af0e2e] mb-4">{item.title}</h3>
          <p className="text-lg text-gray-700">{item.content}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Students;
