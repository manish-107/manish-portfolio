import React from 'react';
import  typescript  from '../assets/typescript.png'
import  docker  from '../assets/docker.png'
import  express  from '../assets/expresss.png'
import  github  from '../assets/github.png'
import  java  from '../assets/java.png'
import  js  from '../assets/js.png'
import  nodejs  from '../assets/node-js.png'
import  postgres  from '../assets/postgres.png'
import  prisma  from '../assets/prisma.png'
import  react  from '../assets/react.png'
import  mongodb  from '../assets/mongodb.png'
import  postman  from '../assets/postman-icon.png'

const SkillSection: React.FC = () => {
  return (
    <section id="section--2" className="relative flex flex-col items-center px-6 py-16 pb-16 font-sans text-sm font-light gap-9 md:pb-24 lg:gap-14 lg:pb-32">
      <div className="flex flex-col items-center gap-5 md:gap-6" style={{ opacity: 1, transform: 'none' }}>
        <h2 className="gradients_heroHeading__D1nJT max-w-sm pb-1 text-center text-[32px] font-bold tracking-[-0.01em] md:max-w-md md:text-4xl lg:max-w-2xl lg:text-[40px]">
          Skills
        </h2>
        <p className="font-mono leading-snug text-[#00000080] dark:text-[#FFFFFFB2] text-[16px] lg:text-[20px] xs:text-md max-w-md text-center md:max-w-xl lg:max-w-[640px]">
          Proficient in JavaScript, TypeScript, React, Docker, Node.js, Express, PostgreSQL, and Prisma, with a strong foundation in building scalable and efficient web applications.
        </p>
      </div>
      <div className="grid max-w-[1200px] grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6">
        {[
          {
            darkImg: js,
            title: "Javascript",
            description: "JavaScript: Versatile language for creating interactive and dynamic web content, essential for front-end development."
          },
          {
            darkImg: typescript,
            title: "Typescript",
            description: "TypeScript: A superset of JavaScript that adds static typing, enhancing code quality and development efficiency."
          },
          {
            darkImg: java,
            title: "Java",
            description: "Java: A robust, object-oriented programming language widely used for building cross-platform applications and enterprise-level systems."
          },
          {
            darkImg: react,
            title: "React",
            description: "React: A popular JavaScript library for building user interfaces, emphasizing component-based architecture and efficient rendering."
          },
          {
            darkImg: nodejs,
            title: "NodeJs",
            description: "Node.js: A runtime environment for executing JavaScript server-side, enabling scalable, high-performance network applications."
          },
          {
            darkImg: express,
            title: "Express",
            description: "Express: A minimal and flexible Node.js web application framework providing robust features for web and mobile applications."
          },
          {
            darkImg: mongodb,
            title: "Mongo Db (No sql)",
            description: "MongoDB: A NoSQL database known for its flexibility and scalability, storing data in JSON-like documents."
          },
          {
            darkImg:postgres,
            title: "Postgresql & MySql",
            description: "PostgreSQL: An advanced open-source relational database known for its reliability, robustness, and extensibility in handling complex queries and data transactions."
          },
          {
            darkImg: prisma,
            title: "Prisma",
            description: "Prisma: A modern ORM (Object-Relational Mapping) tool that simplifies database access and management through type-safe queries and schema migrations."
          },
          {
            darkImg: docker,
            title: "Docker",
            description: "Docker: A platform for containerizing applications, simplifying deployment and ensuring consistency across different environments."
          },
          {
            darkImg: github,
            title: "Git GitHub",
            description: "GitHub: A widely-used platform for version control and collaboration, essential for managing and sharing code repositories."
          },
          {
            darkImg:postman,
            title: "Postman",
            description: "Postman: A popular API client tool used for testing, developing, and documenting APIs, enhancing API workflow and collaboration."
          }
        ].map(({ darkImg, title, description }, index) => (
          <div className="flex " style={{ opacity: 1, transform: 'none' }} key={index}>
          <div className="box-border relative flex flex-col gap-5 p-8 overflow-hidden text-black no-underline transition-transform duration-500 ease-in-out transform border hover:bg-gray-800 rounded-xl hover:translate-x-1 hover:translate-y-1 dark:border-neutral-800 dark:text-white">

              <img alt="" aria-hidden="true" loading="lazy" width="64" height="64" decoding="async" className="hidden dark:block" src={darkImg} style={{ color: 'transparent' }} />
              <div className="flex flex-col gap-2">
                <h3 className="m-0 font-mono font-bold leading-5 text-gray-900 dark:text-white">{title}</h3>
                <p className="m-0 leading-6 opacity-70">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
