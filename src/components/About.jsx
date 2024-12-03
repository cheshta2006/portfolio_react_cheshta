import React from "react";
import HeroImage from "../assets/heroImage.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-12"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      
        <div className="flex justify-center pb-8">
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center w-full space-y-8 sm:space-y-0">
          
          <div className="flex flex-col justify-center w-full sm:w-1/2 space-y-6 text-center sm:text-left">
            <p className="text-xl sm:text-2xl">
            Hi, I'm Cheshta Sharma, a passionate frontend web developer and an aspiring software engineer. I love coding and take pride in crafting beautiful, user-friendly websites that leave a lasting impression. My journey in the world of technology is driven by creativity, problem-solving, and a desire to build digital experiences that truly make an impact.
            </p>
          </div>

         
          <div className="flex justify-center sm:justify-end items-center sm:w-1/2">
            <img
              src={HeroImage}
              alt="Profile"
              className="rounded-2xl w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
