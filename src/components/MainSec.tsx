import AuthorCard from "./AuthorCard"
import DetailsBar from "./DetailsBar"

const MainSec = () => {
  return (
    <main className="ml-0 md:ml-36" >
      <div className="bg-dotted">

        <AuthorCard/>
        <DetailsBar/>
        
      </div>
    </main>
  )
}

export default MainSec
