import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "experience" },
    { id: 5, link: "qualification" },
    { id: 6, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-16 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white fixed z-10 shadow-lg">
      {/* Logo with Animation */}
      <div className="animate-bounce text-center">
        <h1 className="text-4xl font-bold ml-2 hover:text-yellow-400 hover:scale-110 transition-transform duration-300 ease-in-out">
          Cheshta's Portfolio
        </h1>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer capitalize font-medium text-gray-300 hover:text-pink-400 hover:scale-105 transition-transform duration-300 animate-fadeIn"
          >
            <Link to={link} smooth={true} duration={500} offset={-80}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 text-gray-400 md:hidden">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl hover:scale-110 hover:text-yellow-300 transition-transform duration-300 animate-slideIn"
            >
              <Link
                onClick={() => setNav(false)} // Close menu on link click
                to={link}
                smooth={true}
                duration={500}
                offset={-80}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
