import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaBuilding } from "react-icons/fa";
import { SiMysql, SiPython, SiDjango, SiFastapi, SiC, SiNestjs, SiNextdotjs, SiPostgresql, SiStrapi } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-0 md:p-4 bg-gray-800">
      <h1 className="text-2xl md:text-5xl text-white font-bold text-center mb-8">Experience</h1>
      <div className="flex flex-wrap justify-between">
        
        {/* Skills Section */}
        <div className="flex flex-wrap md:w-2/4 gap-8 md:p-4">
          {[
            { icon: <FaHtml5 color="#E34F26" size={100} />, key: 'html' },
            { icon: <FaCss3 color="#1572B6" size={100} />, key: 'css' },
            { icon: <FaReact color="#61DAFB" size={100} />, key: 'react' },
            { icon: <FaJs color="#F7DF1E" size={100} />, key: 'js' },
            { icon: <FaBootstrap color="#563D7C" size={100} />, key: 'bootstrap' },
            { icon: <SiNextdotjs color="#000000" size={100} />, key: 'nextjs' },
            { icon: <SiNestjs color="#E0234E" size={100} />, key: 'nestjs' },
            { icon: <SiMysql color="#4479A1" size={100} />, key: 'mysql' },
            { icon: <SiPostgresql color="#336791" size={100} />, key: 'postgresql' },
            { icon: <SiPython color="#3776AB" size={100} />, key: 'python' },
            { icon: <SiDjango color="#092E20" size={100} />, key: 'django' },
            { icon: <SiFastapi color="#009688" size={100} />, key: 'fastapi' },
            { icon: <SiC color="#555555" size={100} />, key: 'c' },
            
            { icon: <SiStrapi color="#8B5CF6" size={100} />, key: 'strapi' }
          ].map(skill => (
            <span key={skill.key} className="p-2 bg-gray-900 text-white rounded-xl shadow-md flex items-center justify-center h-36 w-36">
              {skill.icon}
            </span>

          ))}
        </div>

        {/* Experience Section */}
        <div className="md:w-2/4 space-y-4">
          
          {/* Evobi Automations Pvt. Ltd. */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FaBuilding size={40} color="#ffffff" className="mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-white">Evobi Automations Pvt. Ltd.</h2>
                <h3 className="text-xl font-semibold text-white">Software Developer</h3>
                <p className="text-md text-gray-300">08/2024 - Present</p>
              </div>
            </div>
            <p className="text-white">Technologies Used: NestJS, PostgreSQL, JWT, Next.js</p>
            <ul className="list-disc list-inside text-white mt-2">
              <li>Led a team of 2 developers to build a school management application.</li>
              <li>Designed and implemented a scalable backend architecture using NestJS and PostgreSQL.</li>
              <li>Developed 100+ RESTful APIs, ensuring optimized data exchange.</li>
              <li>Implemented RBAC (Role-Based Access Control) and JWT authentication for security.</li>
              <li>Refactored and migrated the marketing website from React.js to Next.js, improving SEO by 60%.</li>
            </ul>
          </div>

          {/* ChannelBlend Technologies Pvt. LTD. */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FaBuilding size={40} color="#ffffff" className="mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-white">ChannelBlend Technologies Pvt. LTD.</h2>
                <h3 className="text-xl font-semibold text-white">Software Engineer</h3>
                <p className="text-md text-gray-300">08/2023 - 07/2024</p>
              </div>
            </div>
            <p className="text-white">Technologies Used: Next.js, Tailwind CSS, AWS RDS, Strapi CMS</p>
            <ul className="list-disc list-inside text-white mt-2">
              <li>Built an omnichannel platform from scratch, used by 300+ stores in Bangalore.</li>
              <li>Integrated WhatsApp automation with Interakt, improving user engagement by 65%.</li>
              <li>Developed scalable front-end interfaces using Next.js and Tailwind CSS.</li>
              <li>Established cloud database connectivity using AWS RDS and deployed applications on EC2.</li>
            </ul>
          </div>

          {/* CollegeDekho Pvt. LTD. */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FaBuilding size={40} color="#ffffff" className="mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-white">CollegeDekho Pvt. LTD.</h2>
                <h3 className="text-xl font-semibold text-white">Software Engineer - Intern</h3>
                <p className="text-md text-gray-300">01/2023 – 07/2023</p>
              </div>
            </div>
            <p className="text-white">Technologies Used: React.js, Next.js</p>
            <ul className="list-disc list-inside text-white mt-2">
              <li>Migrated the Community Feed App from React.js to Next.js, boosting SEO by 62%.</li>
              <li>Redesigned webview mobile app screens, enhancing user experience by 10%.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;
