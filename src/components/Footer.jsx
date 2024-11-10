import React from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Tejas Agrawal</h2>
            <p className="text-gray-400 text-sm">
              Creating and innovating at the intersection of design and
              technology.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Teja5DevLab"
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">GitHub</span>
                <AiOutlineGithub className="h-8 w-8" />
              </a>
              <a
                href="https://www.instagram.com/yo_r_i_i_c_h_i/"
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">Instagram</span>
                <AiOutlineInstagram className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/tejas-agrawal-895921335/"
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">LinkedIn</span>
                <AiOutlineLinkedin className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-200">Contact Me</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FiMapPin className="h-5 w-5 mr-2 text-gray-400" />
                <span>Bulanala St., Varanasi, 221001</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-5 w-5 mr-2 text-gray-400" />
                <span>+91 (870) 777-0188</span>
              </li>
              <li className="flex items-center">
                <IoIosMail className="h-5 w-5 mr-2 text-gray-400" />
                <a
                  href="mailto:consult.tejas@gamil.com"
                  className="hover:text-white"
                >
                  consult.tejas@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; 2024 @Tejas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
