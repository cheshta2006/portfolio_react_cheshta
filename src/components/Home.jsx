import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Typed from "typed.js";
import HeroImage from "../assets/coder-image.png";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "I am a Full Stack Web Developer",
        "Aspiring Software Engineer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 flex flex-col justify-center items-center pt-20 pb-10"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center px-4 space-y-6 md:space-x-12">
        <div className="flex flex-col items-center justify-center md:items-start">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white whitespace-nowrap">
            I am <span className="text-violet-500">Cheshta Sharma</span>
          </h2>
          <p className="text-green-600 py-4 max-w-md text-center md:text-left">
            <span
              ref={typedRef}
              className="text-sm sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-bold"
            ></span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-6 md:space-y-0">
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:scale-110 transition-all duration-300"
            >
              <FaDownload size={20} />
              <span>Download Resume</span>
            </a>
            <a
              href="https://github.com/cheshta2006"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/cheshta-sharma-414446332/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl w-full sm:w-2/3 md:w-3/4 lg:w-[400px] xl:w-[500px] transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
