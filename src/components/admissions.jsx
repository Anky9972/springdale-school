import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      delay: i * 0.3, // Delay for each card
    },
  }),
};

const Admissions = () => (
  <motion.section
    id="admissions"
    className="p-5 sm:p-10 lg:p-20 flex flex-col gap-10 bg-[#f5efe7]"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }}
  >
    <div className="w-full flex justify-start">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Admission</h1>
    </div>
    <div className="w-full flex flex-col md:flex-row md:flex-wrap lg:flex-row gap-5 md:gap-5 lg:gap-10 lg:justify-center">
      {[
        {
          title: 'Process',
          content: 'Admission forms are available for download. Submit the completed form along with required documents at the school office.',
        },
        {
          title: 'Criteria',
          content: 'Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.',
        },
        {
          title: 'Important Dates',
          content: (
            <ul>
              <li className="flex items-center gap-2">
                <img src="https://uploads-ssl.webflow.com/63b50a8555c48170e0bd670f/63ba665ae3ca2addb4de3b39_arrow-right.svg" alt="arrow-img" />
                <span>Admission Form Availability: March 1st</span>
              </li>
              <li className="flex items-center gap-2">
                <img src="https://uploads-ssl.webflow.com/63b50a8555c48170e0bd670f/63ba665ae3ca2addb4de3b39_arrow-right.svg" alt="arrow-img" />
                <span>Last Date for Submission: March 31st</span>
              </li>
              <li className="flex items-center gap-2">
                <img src="https://uploads-ssl.webflow.com/63b50a8555c48170e0bd670f/63ba665ae3ca2addb4de3b39_arrow-right.svg" alt="arrow-img" />
                <span>Entrance Test: April 15th</span>
              </li>
              <li className="flex items-center gap-2">
                <img src="https://uploads-ssl.webflow.com/63b50a8555c48170e0bd670f/63ba665ae3ca2addb4de3b39_arrow-right.svg" alt="arrow-img" />
                <span>Announcement of Results: April 30th</span>
              </li>
            </ul>
          ),
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={cardVariants}
          className="w-full md:w-[48%] lg:w-[30%] h-[500px] border-black rounded-3xl bg-inherit relative"
        >
          <Card className="h-full flex flex-col border border-black rounded-3xl bg-inherit">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg md:text-xl">
              <p>{item.content}</p>
            </CardContent>
            <CardFooter className="flex w-full justify-between bottom-0 absolute">
              <button className="bg-inherit text-black border border-black rounded-full py-2 px-4 text-base md:text-lg lg:text-xl">
                More info
              </button>
              <div className="border rounded-full border-black p-2">
                <img
                  src="https://uploads-ssl.webflow.com/63b50a8555c48170e0bd670f/63ba665ae3ca2addb4de3b39_arrow-right.svg"
                  alt="arrow-img"
                />
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Admissions;
