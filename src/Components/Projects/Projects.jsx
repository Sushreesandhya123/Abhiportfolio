import React from "react";
import schoolImg from "../../assets/projects.jpeg"; 
import omnichannelImg from "../../assets/projects.jpeg"; 
import chatbotImg from "../../assets/projects.jpeg"; 

const Projects = () => {
  return (
    <div id="Projects" className="bg-[#1b1c2b] h-full w-full py-6">
      <h1 className="font-bold text-3xl md:text-5xl text-white text-center">Projects</h1>
      <p className="text-center py-4 text-xl font-semibold text-white">
        Explore My Web Development & AI Projects
      </p>

      <div className="project-box p-4 h-full w-full flex flex-col space-y-11 md:space-y-0 md:flex-row mx-auto pb-11">
        
        {/* School Management System */}
        <div className="project-box rounded-xl py-2 h-fit md:h-[650px] md:w-[30%] flex flex-col mx-auto border-2">
          <h1 className="text-center font-bold text-2xl text-white py-3">School Management System</h1>
          <div className="image">
            <img src={schoolImg} alt="School Management System" className="w-[80%] mx-auto py-3 rounded-lg" />
          </div>
          <a href="" target="_blank" rel="noopener noreferrer" className="mx-auto">
            <button className="px-4 py-2 border-1 rounded-xl text-white font-semibold flex justify-center bg-slate-600">
              Project Link
            </button>
          </a>
          <p className="text-white font-semibold py-2 px-5 text-left">
            <span className="font-bold text-xl block text-left text-white">Description:</span>
            A comprehensive school management system designed to streamline administrative tasks, student management, and teacher interactions.
          </p>
          <p className="text-gray-400 font-semibold py-2 px-5">
            <span className="font-bold text-xl block text-left text-white">Technology Used:</span>
            <span className="text-white">NestJS, PostgreSQL, React.js, Next.js, JWT Authentication, Role-Based Access Control</span>
          </p>
        </div>

        {/* Omnichannel Platform */}
        <div className="project-box rounded-xl py-2 h-fit md:h-[650px] md:w-[30%] flex flex-col mx-auto border-2">
          <h1 className="text-center font-bold text-2xl text-white py-3">Omnichannel Platform</h1>
          <div className="image">
            <img src={omnichannelImg} alt="Omnichannel Platform" className="w-[80%] mx-auto py-3 rounded-lg" />
          </div>
          <a href="" target="_blank" rel="noopener noreferrer" className="mx-auto">
            <button className="px-4 py-2 border-1 rounded-xl text-white font-semibold flex justify-center bg-slate-600">
              Project Link
            </button>
          </a>
          <p className="text-white font-semibold py-2 px-5 text-left">
            <span className="font-bold text-xl block text-left text-white">Description:</span>
            A Next.js-based omnichannel platform that enables offline stores to track inventory, manage customer interactions, and automate communication.
          </p>
          <p className="text-gray-400 font-semibold py-2 px-5">
            <span className="font-bold text-xl block text-left text-white">Technology Used:</span>
            <span className="text-white">Next.js, Tailwind CSS, AWS RDS, Strapi CMS, WhatsApp API (Interakt)</span>
          </p>
        </div>

        {/* Gemini AI Chatbot */}
        <div className="project-box rounded-xl py-2 h-fit md:h-[650px] md:w-[30%] flex flex-col mx-auto border-2">
          <h1 className="text-center font-bold text-2xl text-white py-3">Gemini AI Chatbot</h1>
          <div className="image">
            <img src={chatbotImg} alt="Gemini AI Chatbot" className="w-[80%] mx-auto py-3 rounded-lg" />
          </div>
          <a href="" target="_blank" rel="noopener noreferrer" className="mx-auto">
            <button className="px-4 py-2 border-1 rounded-xl text-white font-semibold flex justify-center bg-slate-600">
              Project Link
            </button>
          </a>
          <p className="text-white font-semibold py-2 px-5 text-left">
            <span className="font-bold text-xl block text-left text-white">Description:</span>
            A conversational AI chatbot capable of understanding natural language queries and analyzing images to provide intelligent responses.
          </p>
          <p className="text-gray-400 font-semibold py-2 px-5">
            <span className="font-bold text-xl block text-left text-white">Technology Used:</span>
            <span className="text-white">Flutter, Gemini LLM, Python, Firebase</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Projects;
