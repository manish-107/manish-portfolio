import githubS from "../assets/githubs.png";

const Footer = () => {
  return (
    <div>
      <footer id="section--4" className="relative mb-5 ml-2 mr-2 md:mb-14 md:ml-20 md:mr-20 rounded-tl-3xl rounded-tr-3xl rounded-xl">
        <div
          style={{ backgroundImage: `url(${githubS})` }}
          className="absolute inset-0 bg-center bg-cover opacity-15 rounded-tl-3xl rounded-tr-3xl rounded-xl"
        ></div>
        <div className="relative max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8 ">
          <div className="flex justify-center text-3xl font-extrabold text-teal-600 md:text-5xl">
            Connect with me!
          </div>
          <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-white">
            Hi there! I'm passionate about creating meaningful connections. Feel free to reach out to me for collaborations, project inquiries, or just to say hello.
          </p>
          <ul className="flex flex-wrap justify-center gap-6 mt-12 md:gap-8 lg:gap-12">
            <li><a href="#section--1" className="text-white transition hover:text-gray-700/75">About</a></li>
            <li><a href="#section--2" className="text-white transition hover:text-gray-700/75">Skills</a></li>
            <li><a href="#section--3" className="text-white transition hover:text-gray-700/75">Projects</a></li>
            <li><a href="#section--4" className="text-white transition hover:text-gray-700/75">Contact</a></li>
          </ul>
          <ul className="flex justify-center gap-6 mt-12 md:gap-8">
            <li>
              <a href="https://twitter.com/Mani_xsh" rel="noreferrer" target="_blank" className="text-white transition hover:text-gray-700/75">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M23.954 4.569a10 10 0 01-2.825.775 4.935 4.935 0 002.163-2.723c-.936.555-1.976.96-3.076 1.184a4.92 4.92 0 00-8.384 4.482 13.94 13.94 0 01-10.11-5.134 4.822 4.822 0 001.524 6.573 4.902 4.902 0 01-2.224-.616c-.053 2.28 1.581 4.415 3.949 4.89a4.932 4.932 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.867 9.867 0 01-6.1 2.105c-.395 0-.785-.023-1.17-.067a13.936 13.936 0 007.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.21-.004-.42-.014-.63a10.012 10.012 0 002.459-2.548l-.047-.02z" clipRule="evenodd"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/manish-107" rel="noreferrer" target="_blank" className="text-white transition hover:text-gray-700/75">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.36-1.35-3.36-1.35-.46-1.17-1.11-1.48-1.11-1.48-.91-.62.07-.6.07-.6 1 .07 1.52 1.02 1.52 1.02.89 1.52 2.34 1.08 2.9.83.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.8c.85.004 1.71.114 2.51.335 1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.91.68 1.84v2.73c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" clipRule="evenodd"/>
                </svg>
              </a>
            </li>
            <li>
              <a  href="mailto:manishkulal2676@gmail.com" rel="noreferrer" target="_blank" className="text-white transition hover:text-gray-700/75">
                <span className="sr-only">Mail</span>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path>
                  <path d="M3 6l9 6l9 -6"></path>
                  <path d="M15 18h6"></path>
                  <path d="M18 15l3 3l-3 3"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/manish-kulal-96518a2b5/" rel="noreferrer" target="_blank" className="text-white transition hover:text-gray-700/75">
                <span className="sr-only">Linked in</span>
                <svg className="w-6 h-6 bg-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
