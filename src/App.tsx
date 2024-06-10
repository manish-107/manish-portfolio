import MainSec from "./components/MainSec.tsx";
import  Nav  from "./components/Nav.tsx";
const App = () => {
  return (
    <div className="absolute top-0  z-[-2] h-fit lg:h-fit md:h-lvh w-full bg-gray-50 dark:bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ">
      <Nav/>

    <MainSec/>

 
    </div>
  )
}

export default App