import githubS from '../assets/githubs.png';

const Footer = () => {
  return (
    <div>
      <footer className="relative mb-5 ml-2 mr-2 md:mb-14 md:ml-20 md:mr-20 rounded-tl-3xl rounded-tr-3xl rounded-xl">
        <div
          style={{ backgroundImage: `url(${githubS})` }}
          className="absolute inset-0 bg-center bg-cover opacity-15 rounded-tl-3xl rounded-tr-3xl rounded-xl"
        ></div>
        <div className="relative max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8 ">
          <div className="flex justify-center text-3xl font-extrabold text-teal-600 md:text-5xl">
            Connect with me!
          </div>
          <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum
            itaque neque.
          </p>
          <ul className="flex flex-wrap justify-center gap-6 mt-12 md:gap-8 lg:gap-12">
            <li>
              <a className="text-white transition hover:text-gray-700/75" href="#"> About </a>
            </li>
            <li>
              <a className="text-white transition hover:text-gray-700/75" href="#"> Careers </a>
            </li>
            <li>
              <a className="text-white transition hover:text-gray-700/75" href="#"> History </a>
            </li>
            <li>
              <a className="text-white transition hover:text-gray-700/75" href="#"> Services </a>
            </li>
            <li>
              <a className="text-white transition hover:text-gray-700/75" href="#"> Projects </a>
            </li>
            <li>
              <a className="text-white transition hover:text-gray-700/75" href="#"> Blog </a>
            </li>
          </ul>
          <ul className="flex justify-center gap-6 mt-12 md:gap-8">
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:text-gray-700/75"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:text-gray-700/75"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:text-gray-700/75"
              >
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M23.954 4.569a10 10 0 01-2.825.775 4.935 4.935 0 002.163-2.723c-.936.555-1.976.96-3.076 1.184a4.92 4.92 0 00-8.384 4.482 13.94 13.94 0 01-10.11-5.134 4.822 4.822 0 001.524 6.573 4.902 4.902 0 01-2.224-.616c-.053 2.28 1.581 4.415 3.949 4.89a4.932 4.932 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.867 9.867 0 01-6.1 2.105c-.395 0-.785-.023-1.17-.067a13.936 13.936 0 007.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.21-.004-.42-.014-.63a10.012 10.012 0 002.459-2.548l-.047-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/manish-107"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:text-gray-700/75"
              >
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.36-1.35-3.36-1.35-.46-1.17-1.11-1.48-1.11-1.48-.91-.62.07-.6.07-.6 1 .07 1.52 1.02 1.52 1.02.89 1.52 2.34 1.08 2.9.83.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.8c.85.004 1.71.114 2.51.335 1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.91.68 1.84v2.73c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z"
                    clipRule="evenodd"
                  />
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
