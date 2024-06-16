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
import  turborepo  from '../assets/turborepo.png'
import  mongodb  from '../assets/mongodb.png'

const SkillSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center px-6 py-16 pb-16 font-sans text-sm font-light gap-9 md:pb-24 lg:gap-14 lg:pb-32">
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
            description: "Building once is painful enough. Turborepo will remember what you've built and skip the stuff that's already been computed."
          },
          {
            darkImg: typescript,
            title: "Typescript",
            description: "Turborepo looks at the contents of your files, not timestamps to figure out what needs to be built."
          },
          {
            darkImg: java,
            title: "Java",
            description: "Execute builds using every core at maximum parallelism without wasting idle CPUs."
          },
          {
            darkImg: react,
            title: "React",
            description: "Share a remote build cache with your teammates and CI/CD for even faster builds."
          },
          {
            darkImg: nodejs,
            title: "NodeJs",
            description: "Turborepo won’t interfere with your runtime code or touch your sourcemaps."
          },
          {
            darkImg: express,
            title: "Express",
            description: "Speed up PaaS deploys by generating a subset of your monorepo with only what's needed to build a specific target."
          },
          {
            darkImg: mongodb,
            title: "Mongo Db (No sql)",
            description: "Define the relationships between your tasks and then let Turborepo optimize what to build and when."
          },
          {
            darkImg:postgres,
            title: "Postgresql & MySql",
            description: "Using Lerna? Keep your package publishing workflow and use Turborepo to turbocharge task running."
          },
          {
            darkImg: prisma,
            title: "Prisma",
            description: "Generate build profiles and import them in Chrome or Edge to understand which tasks are taking the longest."
          },
          {
            darkImg: docker,
            title: "Docker",
            description: "Generate build profiles and import them in Chrome or Edge to understand which tasks are taking the longest."
          },
          {
            darkImg: github,
            title: "Git GitHub",
            description: "Generate build profiles and import them in Chrome or Edge to understand which tasks are taking the longest."
          },
          {
            darkImg:turborepo,
            title: "Terbo Repo",
            description: "Generate build profiles and import them in Chrome or Edge to understand which tasks are taking the longest."
          }
        ].map(({ darkImg, title, description }, index) => (
          <div className="flex" style={{ opacity: 1, transform: 'none' }} key={index}>
            <div className="box-border relative flex flex-col gap-5 p-8 overflow-hidden text-black no-underline border rounded-xl dark:border-neutral-800 dark:text-white">
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
