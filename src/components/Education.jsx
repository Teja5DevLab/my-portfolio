import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import mgkvp from "../assets/mgkvp.png";
import sjm from "../assets/SJM.png";

const educations = [
  {
    logo: mgkvp,
    title: "Mahatma Gandhi Kashi Vidyapith, Varanasi",
    degree: "Bachelor of Mathematics",
    period: "2023 - Present",
    grade: "8.476 CGPA",
    description:
      "I am currently pursuing a Bachelor's degree in Mathematics at MGKVP, Varanasi. I have completed 2 semesters and have a CGPA of 8.476. I have taken majors in Mathematics, Statistics, and Computer Science",
  },
  {
    logo: sjm,
    title: "St. John's School Marhauli, Varanasi",
    degree: "ISC(XII),  Science with Computer",
    period: "2022 - 2023",
    grade: "79.60%",
    description:
      "I completed my class 12 education at St. John's Marhauli School in Varanas, where i studied Science with Computer and English",
  },
  {
    logo: sjm,
    title: "St. John's School Marhauli, Varanasi",
    degree: "ICSE(X),  Science with Computer",
    period: "2020 - 2021",
    grade: "75.60%",
    description:
      "I completed my class 10 education at St. John's Marhauli School in Varanas only, where i studied all subjects",
  },
];

const Education = () => {
  return (
    <div className="p-8 max-w-[800px] mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Education
      </h1>
      <p className="text-gray-400 text-center mb-8">
        My education has been a journey of self-discovery and growth. My
        educational details are as follows.
      </p>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {educations.map((education, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10 flex items-start space-x-4"
            >
              <img
                src={education.logo}
                alt="Institution Logo"
                className="w-16 h-16 object-cover"
              />
              <div>
                <h2 className="text-gray-100 text-2xl font-semibold">
                  {education.title}
                </h2>
                <p className="text-gray-300 text-sm">{education.degree}</p>
                <p className="text-gray-400 text-sm mb-2">{education.period}</p>
                <p className="text-purple-300 font-medium text-sm">
                  Grade: {education.grade}
                </p>
                <p className="text-gray-400 mt-4 text-sm">
                  {education.description}
                </p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
