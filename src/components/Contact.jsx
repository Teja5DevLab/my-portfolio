import React from "react";
import Reveal from "./Reveal";
const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-base w-11/12">
                Aspiring Frontend Developer with a strong foundation in
                JavaScript and React.js with one year of dedicated learning
                experience. Currently pursuing an undergraduate degree, I am
                passionate about creating seamless user experiences and
                continuously improving my skills in frontend technologies.
              </p>
            </div>
            <div className="flex mt-6 items-center gap-6">
              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  20
                </h3>
                <p className="text-xs md:text-base">
                  <span>My Age</span>
                </p>
              </div>
              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  6<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Projects</span>
                </p>
              </div>
              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  1<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>years of Learning</span>
                </p>
              </div>
            </div>
          </div>
          <form
            action="https://getform.io/f/placeYourEndpointHere"
            method="POST"
            className=" max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              className="mb-3 w-full rounded-md border bg-gray-200 border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              className="mb-3 w-full rounded-md border bg-gray-200 border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-3 w-full rounded-md border bg-gray-200 border-purple-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
