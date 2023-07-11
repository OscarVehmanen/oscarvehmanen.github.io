import { useState } from "react";
import Logo from "../assets/ov-logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import EnglishResume from "../assets/Documents/CV_English.pdf";
import SwedishResume from "../assets/Documents/CV_Swedish.pdf";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="logo image" className="w-[100px] rounded" />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] bg-blue-600 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              href="https://www.linkedin.com/in/oscar-vehmanen/"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] bg-[#333333] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              href="https://github.com/OscarVehmanen"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] bg-[#6fc2b0] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
              onClick={() => (window.location = "mailto:oscarveh@gmail.com")}
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] bg-[#565f69] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              href={EnglishResume}
              // download="EnglishResume"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              English Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] bg-[#afad1a] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              href={SwedishResume}
              // download="SwedishResume"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Swedish Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
