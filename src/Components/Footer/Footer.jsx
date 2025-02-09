import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div className="flex flex-wrap justify-start">
  <div className="flex flex-col items-start">
    <h1 className="text-2xl md:text-6xl font-bold text-left">Contact</h1>
    <h3 className="text-sm md:text-2xl font-normal text-left">
      Feel Free To Reach Out!
    </h3>
  </div>
</div>


      <ul className="text-sm md:text-xl space-y-2">
        <li className="flex items-center gap-2">
          <MdOutlineEmail size={20} />
          <a href="mailto:abhishekverma5541@gmail.com" className="hover:underline">
            abhishekverma5541@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <CiLinkedin size={20} />
          <a href="https://linkedin.com/in/abhishekverma" target="_blank" rel="noopener noreferrer" className="hover:underline">
            linkedin.com/in/abhishekverma
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FaGithub size={20} />
          <a href="https://github.com/abhishekverma" target="_blank" rel="noopener noreferrer" className="hover:underline">
            github.com/abhishekverma
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
