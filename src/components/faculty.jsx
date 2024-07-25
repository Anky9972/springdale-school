import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Faculty = () => {
  const data = [
    {
      name: "John Doe",
      title: "Principal",
      qualification: "M.Ed",
      experience: "20 years",
      profile:
        "Principal with 20 years of experience in educational administration.",
        pic:'https://media.istockphoto.com/id/1795068462/photo/cheerful-handsome-young-arab-entrepreneur-guy-posing-indoors.webp?b=1&s=170667a&w=0&k=20&c=WmACgi51EkTXd-eUvFYsK698Z4GbJ2n8mEFWR9NFgLc='
    },
    {
      name: "Jane Smith",
      title: "Vice Principal",
      qualification: "M.Sc. in Physics",
      experience: "15 years",
      profile: "Vice Principal with 15 years of teaching experience.",
      pic:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Emily Johnson",
      title: "English Teacher",
      qualification: "M.A. in English",
      experience: "10 years",
      profile: "English Teacher with 10 years of teaching experience.",
      pic:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjcyfHxwcm9maWxlfGVufDB8fDB8fHww'
    },
    {
      name: "Michael Brown",
      title: "Mathematics Teacher",
      qualification: "M.Sc. in Mathematics",
      experience: "8 years",
      profile: "Mathematics Teacher with 8 years of teaching experience.",
      pic:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
    },
    {
      name: "Sophia Davis",
      title: "Science Teacher",
      qualification: "M.Sc. in Chemistry",
      experience: "12 years",
      profile: "Science Teacher with 12 years of teaching experience.",
      pic:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc4fHxwcm9maWxlfGVufDB8fDB8fHww'
    },
    {
      name: "David Wilson",
      title: "Computer Science Teacher",
      qualification: "B.Tech in Computer Science",
      experience: "5 years",
      profile: "Computer Science Teacher with 5 years of teaching experience.",
      pic:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ scale: 0.8 }}
      animate={{ scale: isInView ? 1 : 0.8 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen text-white"
    >
      <div className="w-full bg-[#065763] p-5 sm:p-10 md:p-10 lg:p-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Faculty</h2>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold leading-tight">
            OUR SKILLED FACULTY HELPS STUDENTS IN MANY DISCIPLINES
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 md:gap-10">
          {data.map((faculty, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row gap-5 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg text-black w-full md:w-1/2">
                <img
                  src={faculty.pic}
                  alt="faculty-pic"
                  className="w-full h-[250px] md:h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 md:p-6 w-full md:w-1/2 flex flex-col gap-4">
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  <span className="bg-white py-1 px-2 rounded-full text-black">
                    {faculty.name}
                  </span>
                </h3>
                <p className="text-sm md:text-base text-gray-300">{faculty.title}</p>
                <p className="text-sm md:text-base">{faculty.qualification}</p>
                <p className="text-sm md:text-lg">
                  {faculty.experience}{" "}
                  <span className="font-medium">of experience</span>
                </p>
                <p className="mt-2 text-sm md:text-base">{faculty.profile}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Faculty;
