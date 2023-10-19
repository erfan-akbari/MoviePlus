import HeroBanner from "../components/HeroBanner"
import Popular from "../components/Popular"
import Trending from "../components/Trending"

function Home() {
  return (
    <div>
      <HeroBanner />
      <Trending />
      <Popular />
    </div>
  )
}

export default Home