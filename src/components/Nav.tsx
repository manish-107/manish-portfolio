const Nav: React.FC = () => {
  return (
   <header className="fixed z-50 flex items-center justify-center w-11/12 p-5 m-5 mx-auto mb-56 ml-5 text-gray-100 rounded-2xl bg-opacity-5 md:ml-16 bg-slate-400 backdrop-blur-md">
     <div className="flex space-x-5 font-semibold md:font-extrabold md:space-x-10">
       <div><a href="#section--1">About</a></div>
       <div><a href="#section--2">Skills</a></div>
       <div> <a href="#section--3">Projects</a></div>
       <div><a href="#section--4">Contact</a></div>
     </div>
   </header>
  );
}

export default Nav;
