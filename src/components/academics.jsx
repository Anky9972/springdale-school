import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';

import prim from '../assets/primary.jpg';
import sec from '../assets/secondary.jpg';
import sen from '../assets/senior.jpg';
import teach from '../assets/teaching.jpg';
import res from '../assets/resource.jpg';
import cur from '../assets/curriculum.jpg';

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

const hoverVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Academics = () => (
  <motion.section
    id="academics"
    className="p-5 sm:p-10 lg:p-20 bg-[#af0e2e] flex flex-col gap-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }}
  >
    <h2 className="text-4xl font-bold mb-8 text-center text-white">Academics</h2>
    <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-10">
      {[
        {
          img: cur,
          title: 'Curriculum Overview',
          content: 'Information about the curriculum offered.',
        },
        {
          img: prim,
          title: 'Primary (Grades 1-5)',
          content: 'English, Mathematics, Science, Social Studies, Art, Physical Education.',
        },
        {
          img: sec,
          title: 'Secondary (Grades 6-10)',
          content: 'English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art.',
        },
        {
          img: sen,
          title: 'Senior Secondary (Grades 11-12)',
          content: 'Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English. Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English.',
        },
        {
          img: teach,
          title: 'Teaching Methodologies',
          content: 'We use a blend of traditional and modern teaching techniques to cater to different learning styles.',
        },
        {
          img: res,
          title: 'Educational Resources',
          content: 'Digital classrooms, interactive learning modules, and access to online educational platforms.',
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={itemVariants}
          className="relative group"
        >
          <Card className="mb-8 overflow-hidden relative">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-72 object-cover"
              loading='lazy'
            />
            <CardHeader className=" p-4 absolute">
              <CardTitle className="text-2xl font-bold text-[#af0e2e]">{item.title}</CardTitle>
            </CardHeader>
            <motion.div
              className="absolute inset-0 bg-black text-white p-4 flex items-center justify-center opacity-0 group-hover:opacity-100"
              variants={hoverVariants}
              initial="hidden"
              animate="hidden"
              whileHover="visible"
            >
              <CardContent>
                {item.title === 'Primary (Grades 1-5)' || item.title === 'Secondary (Grades 6-10)' || item.title === 'Senior Secondary (Grades 11-12)' ? (
                  <ul className="pl-5">
                    {item.content.split('. ').map((text, i) => (
                      <li key={i} className='text-2xl font-medium'>{text}</li>
                    ))}
                  </ul>
                ) : (
                  <p className='text-2xl font-medium'>{item.content}</p>
                )}
              </CardContent>
            </motion.div>
          </Card>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Academics;
