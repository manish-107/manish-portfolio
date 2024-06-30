import Footer from "./components/Footer.tsx";
import MainSec from "./components/MainSec.tsx";
import Marquee from "./components/Marquee.tsx";
import  Nav  from "./components/Nav.tsx";
import Projects from "./components/Projects.tsx";
// import SkillSection from "./components/SkillSection.tsx";
const App: React.FC = () => {
  return (
    <div className="absolute top-0 z-[-2] h-fit lg:h-fit md:h-lvh w-full bg-gray-50 dark:bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ">
      <Nav/>

    <MainSec/>
    <Marquee/>
    <div className="">
        <Projects/>
    </div>
    <Footer/>
    </div>
  )
}

export default App