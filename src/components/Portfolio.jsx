import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import Reveal from "./Reveal";

const projects = [
  {
    img: project1,
    title: "ReacTube Stream",
    description:
      "Responsive Streaming site using React.js and Firebase, features include watching, searching, commenting and adding videos to your playlist, all with an intuitive and sleek Ul design.",
    links: {
      site: "https://teja5devlab.github.io/Streaming-app",
    },
  },
  {
    img: project2,
    title: "Admin Dashboard",
    description:
      "Developed an enterprise-level admin dashboard with responsive UI and data visualization using standard packages like MUI and Nivo Charts.",
    links: {
      site: "https://teja5devlab.github.io/DashBoard/",
    },
  },
  {
    img: project3,
    title: "Estelle Academy",
    description:
      "An interactive e-learning platform using React and Framer Motion, incorporating smooth animations for an engaging user experience.",
    links: {
      site: "https://teja5devlab.github.io/e-learning-platform/",
    },
  },
  {
    img: project4,
    title: "Flip Mystic Game",
    description:
      "An interactive memory card matching game using React, featuring randomized card placement, responsive design, and state management with React hooks.",
    links: {
      site: "https://teja5devlab.github.io/MemoryCardGame/",
    },
  },
  {
    img: project5,
    title: "SkyCast Weather App",
    description:
      "Built a weather app using React.js and API to display current temperature, humidity, etc. of any City across globe, and furthermore 5-day weather forecast.",
    links: {
      site: "https://teja5devlab.github.io/react-weather-app/",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal>
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 text-lg mb-4">
                {project.description}
              </p>
              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  className="px-3 py-1 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                  View Site
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
