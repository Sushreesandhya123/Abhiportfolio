import React from "react";
import avatarImg from "../../assets/abhi22.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-center p-4 md:p-20 pb-0 h-auto">
      <div className="md:w-2/4 md:pt-0">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight md:pt-5">
          I am a{" "}
          <span className="text-purple-500 font-bold">
            Software Developer
          </span>
        </p>

        <p className="text-sm md:text-2xl tracking-tight md:pt-5">
          Passionate Software Developer with a strong foundation in full-stack
          development, specializing in React.js, Next.js, and NestJS. Proficient
          in Java, Python, JavaScript, PostgreSQL, AWS, and Git, with hands-on
          experience in building scalable and high-performance applications.
          Skilled in API development, authentication systems, and cloud
          deployment, with a keen eye for optimizing user experience and system
          efficiency. Thrives in fast-paced, collaborative environments,
          leveraging problem-solving and innovation to drive impactful
          solutions. 🚀
        </p>
        <div className="flex gap-4 mt-5 md:mt-10">
          <a href="#Footer">
            <button className="text-white py-3 px-6 text-lg md:text-xl md:py-4 md:px-8 w-48 mb-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Contact Me
            </button>
          </a>
          <button className="text-white py-3 px-6 text-lg md:text-xl md:py-4 md:px-8 w-48 mb-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Resume
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center h-auto pb-0">
        <div className="relative w-69 h-78">
          {/* Hexagon Image */}
          <img
            src={avatarImg}
            alt="Profile"
            className="max-w-[80%] mx-auto object-cover"
            style={{
              clipPath:
                "polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
          {/* Subtle Smoke Effect Below Image */}
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-64 h-16 bg-gradient-to-t from-black to-transparent blur-2xl opacity-40"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
