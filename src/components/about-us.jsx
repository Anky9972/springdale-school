import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import img from "../assets/2149337242.jpg";

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

const AboutUs = () => (
  <motion.section
    id="about"
    className="p-5 sm:p-10 lg:p-20 flex flex-col md:flex-row bg-[#af0e2e]"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }}
  >
    <div className="w-full md:w-1/2">
      <motion.div custom={0} variants={itemVariants}>
        <h1 className="text-4xl font-bold mb-4 text-white">About Us</h1>
      </motion.div>
      <div className="w-full md:w-4/5 mt-10 md:mt-32">
        <div className="rounded-3xl overflow-hidden">
          <motion.img
            src={img}
            alt="about us"
            className="object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 mx-auto py-10 flex flex-col gap-5 md:gap-10">
      <motion.div custom={1} variants={itemVariants}>
        <p className="text-2xl font-medium text-white">
          Founded in 1985, Springdale Public School has been dedicated to
          providing quality education and holistic development to students.
        </p>
      </motion.div>
      <motion.div custom={2} variants={itemVariants}>
        <Card>
          <CardHeader className="text-xl font-bold">Vision</CardHeader>
          <CardContent className="text-slate-400">
            To create a learning environment that fosters academic excellence,
            critical thinking, and ethical values.
          </CardContent>
        </Card>
      </motion.div>
      <motion.div custom={3} variants={itemVariants}>
        <Card>
          <CardHeader className="text-xl font-bold">Mission</CardHeader>
          <CardContent className="text-slate-400">
            To empower students with the knowledge, skills, and values needed to
            thrive in a dynamic world.
          </CardContent>
        </Card>
      </motion.div>
      <motion.div custom={4} variants={itemVariants}>
        <Card>
          <CardHeader className="text-xl font-bold">
            <CardTitle>Principal's Message</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-400">
            <p>
              At Springdale, we believe in nurturing the potential of every
              student and guiding them towards a successful future.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div custom={5} variants={itemVariants}>
        <Card>
          <CardHeader className="text-xl font-bold">
            <CardTitle>Infrastructure and Facilities</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-400">
            <ul className="flex flex-col gap-2 px-5">
              <li>State-of-the-art science and computer labs</li>
              <li>Spacious and well-equipped classrooms</li>
              <li>
                Library with a vast collection of books and digital resources
              </li>
              <li>
                Sports facilities including a playground, gymnasium, and swimming
                pool
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </motion.section>
);

export default AboutUs;
