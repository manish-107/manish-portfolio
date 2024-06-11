const AuthorCard = () => {
  return (
    <div className="flex items-center mt-16 ml-6 mr-10 md:ml-28">
      <div className="relative flex flex-col items-start w-full max-w-2xl px-4 pt-8 my-8 rounded-lg shadow-lg space-t-4 md:mt-16 sm:flex-row sm:space-y-0 sm:space-x-6 dark:border-gray-400">
        <div className="flex justify-center w-full sm:justify-start sm:w-auto">
          <img
            className="object-cover w-20 h-20 mt-3 mr-3 rounded-full"
            src="https://media.licdn.com/dms/image/D4E03AQFvDPAkPYfcQw/profile-displayphoto-shrink_400_400/0/1717935358796?e=1723680000&v=beta&t=nv5uPQTmaVH7MHlNpFcpfIW6TbG9pCrNObuYofhp_7c"
            alt="Author"
          />
        </div>
        <div className="flex flex-col items-center w-full md:items-start sm:w-auto ">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-row">
              <p
                className="mb-2 text-2xl font-semibold font-display dark:text-gray-200"
                itemProp="author"
              >
                Hey,
              </p>
              <p className="pl-2 mb-2 text-2xl font-bold font-display dark:text-yellow-200">
                I'm Manish{" "}
              </p>
            </div>
            <div className="mb-4 text-center text-gray-400 md:text-start md:text-lg">
              <p>
                I am a fresher and MCA aspirant with a keen interest in web
                development.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <a
              href="mailto:manishkulal2676@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              role="link"
              className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
            >
              {" "}
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path>
                <path d="M3 6l9 6l9 -6"></path>
                <path d="M15 18h6"></path>
                <path d="M18 15l3 3l-3 3"></path>
              </svg>
              Contact me
            </a>
            <a
              href="mailto:manishkulal2676@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              role="link"
              className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
            >
              {" "}
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path>
                <path d="M3 6l9 6l9 -6"></path>
                <path d="M15 18h6"></path>
                <path d="M18 15l3 3l-3 3"></path>
              </svg>
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;