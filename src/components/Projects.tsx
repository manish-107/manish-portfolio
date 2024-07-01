import ytpng from '../assets/ytproject.png';
import techqueryphp from '../assets/techqueryphp.png';
import blogweb from '../assets/blogweb.png';
import tranc from '../assets/transc.jpg';

const Projects: React.FC = () => {
  const projectData = [
    {
      name: 'InfoNest-Blog',
      date: 'July 2024 - Present',
      img: blogweb,
      github: 'https://github.com/manish-107/InfoNestr',
      description: 'InfoNest is a TypeScript-based full-stack web application featuring React in the frontend, Cloudflare Workers in the backend, and PostgreSQL with Prisma ORM for data storage. It includes JWT authentication for secure user sessions and leverages Zod for type-safe validation on the frontend.',
      techStack: ['React', 'Typescript', 'prisma', 'Postgresql', 'tailwindcss'],
    },
    {
      name: 'YoutubeClone-ytApi',
      date: 'Nov 2023',
      img: ytpng,
      github: 'https://github.com/manish-107/YoutubeClone-ytApi/',
      livePreview: 'https://manish-youtubeclone.netlify.app/',
      description: 'This React project mimics YouTube, fetching video data through the YouTube API. It employs components for the header, left navigation, and video details. Global state management is facilitated by the React Context API, ensuring dynamic interaction and rendering of video-related details.',
      techStack: ['React', 'RapidApi', 'Tailwind css', 'axios'],
    },
    {
      name: 'TechQuery-Hub',
      date: 'April 2024',
      img: techqueryphp,
      github: 'https://github.com/manish-107/TechQuery-Hub',
     
      description: `TechQuery Hub Git repository hosts code for a college mini-project. Built with HTML, CSS, JavaScript, PHP, and SQL, it's a dynamic platform for students to explore tech topics. Offering collaboration, guidance, and practical application of programming skills, it fosters a vibrant tech community within the college.`,
      techStack: ['PHP', 'CSS', 'JavaScript', 'Sql'],
    },
     {
      name: 'EzPay-app',
      date: 'April 2024',
      img: tranc,
      github: 'https://github.com/manish-107/EzPay-app',
      description: 'This project is a user-friendly payment application built with Express, Node.js, MongoDB, Mongoose, Tailwind CSS, and React. It simplifies the process of sending money, offering an intuitive interface for effortless transactions and secure, real-time payment management.',
      techStack: ['React', 'Node.js', 'Express', 'Mongodb','tailwindcss'],
    },
    // Add more projects as needed
  ];

  return (
    <section id="section--3" className="relative flex flex-col items-center px-6 py-16 pb-16 mb-5 ml-2 mr-2 font-sans text-sm font-light bg-black md:mb-14 md:ml-20 md:mr-20 rounded-tl-3xl rounded-tr-3xl rounded-xl gap-9 md:pb-24 lg:gap-14 lg:pb-32">
      <div className="flex flex-col items-center gap-5 md:gap-6" style={{ opacity: 1, transform: 'none' }}>
        <h2 className="text-center  text-[32px] font-bold  md:text-4xl lg:text-[40px] text-white">
          Projects
        </h2>
        <p className="font-mono leading-snug text-[#FFFFFFB2] text-[16px] lg:text-[20px] xs:text-md max-w-md text-center md:max-w-xl lg:max-w-[640px]">
          I've worked on a variety of projects, from simple websites to complex web applications.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        {projectData.map((project, index) => (
          <div key={index} className="flex flex-col justify-between max-w-sm px-3 py-4 mx-auto mb-10 duration-100 bg-white border border-gray-300 rounded-lg hover:shadow-lg">
            <div>
              <div>
                <img className="rounded-lg" src={project.img} alt={project.name} />
              </div>
              <div>
               
                <div className="mt-2 text-sm font-semibold ">{project.name}</div>
              </div>
              <div className="mt-1 mb-2 text-xs text-black">{project.date}</div>
              <div className="text-xs text-black">
                <div className='font-semibold text-black'>{project.description}</div>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 my-4">
                {project.techStack.map((tech, index) => (
                  <div key={index} className="px-2 py-1 text-xs text-black rounded-md bg-zinc-200">{tech}</div>
                ))}
              </div>
              <div className="flex gap-2">
                {project.livePreview ? <div className="bg-black hover:bg-black/70 flex gap-2 items-center text-white w-fit px-3 py-1.5 rounded-md text-xs">
                  <a target="_blank" className="flex gap-2" href={project.livePreview}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z"></path>
                    </svg> Website
                  </a>
                </div> : ""}
                <div className="bg-black hover:bg-black/70 flex gap-2 items-center text-white w-fit px-3 py-1.5 rounded-md text-xs">
                  <a target="_blank" className="flex gap-2" href={project.github}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
                    </svg> Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
