import AuthorCard from "./AuthorCard"
import DetailsBar from "./DetailsBar"

const MainSec: React.FC = () => {
  return (
    <main className="mt-16 ml-0 md:ml-10 lg:ml-52 xl:ml-64" >
      <div className="bg-dotted">

        <AuthorCard/>
        
        <DetailsBar/>
        
      </div>
    </main>
  )
}

export default MainSec
