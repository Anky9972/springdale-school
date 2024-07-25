import React from 'react';
import { motion } from 'framer-motion';
import fest from '../assets/fest.jpg'
import library from '../assets/library.jpg'
import science from '../assets/science.jpg'
import sports from '../assets/sport.jpg'
import clas from '../assets/class.jpg'
import demo from '../assets/sample_v.mp4'
const galleryItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: 'spring',
      stiffness: 50,
      damping: 20,
    },
  }),
};

const Gallery = () => (
  <motion.section
    id="gallery"
    className="p-5 sm:p-10 lg:p-20 bg-gray-100"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={{
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }}
  >
    <div className=" mx-auto">
      <motion.h2
        className="text-4xl font-bold mb-8 text-center text-[#af0e2e] underline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Gallery
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {[
          {
            imgSrc: sports,
            altText: 'Sports Day',
            description: 'Students participating in various sports events.',
          },
          {
            imgSrc: science,
            altText: 'Science Exhibition',
            description: 'Students presenting their science projects.',
          },
          {
            imgSrc: fest,
            altText: 'Cultural Fest',
            description: 'Students performing in the cultural fest.',
          },
          {
            imgSrc: clas,
            altText: 'Classroom',
            description: 'A glimpse of our interactive classrooms.',
          },
          {
            imgSrc: library,
            altText: 'Library',
            description: 'Students reading and studying in the school library.',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="gallery-item bg-white rounded-lg shadow-lg overflow-hidden"
            custom={index}
            variants={galleryItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <img src={item.imgSrc} alt={item.altText} className="w-full h-48 object-cover" loading='lazy' />
            <div className="p-4">
              <p className="text-gray-700 text-xl">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="video-gallery flex flex-col justify-center items-center mt-12">
        <motion.h3
          className="text-3xl font-bold mb-8 text-center text-[#af0e2e] underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Videos
        </motion.h3>
        <div className='w-full flex flex-col md:flex-row gap-10 justify-center items-center'>
        {[
          {
            videoSrc: demo,
            description: 'Virtual tour of Springdale Public School.',
          },
          {
            videoSrc: demo,
            description: 'Highlights from the Annual Function 2023.',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="video-item md:mb-8 md:w-1/2"
            custom={index + 5} // To continue the stagger delay
            variants={galleryItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <video controls src={item.videoSrc} className="w-full rounded-lg shadow-lg"></video>
            <p className="text-gray-700 mt-2 text-center">{item.description}</p>
          </motion.div>
        ))}
        </div>
      </div>
    </div>
  </motion.section>
);

export default Gallery;
