import HeroBanner from "../components/HeroBanner"
import Popular from "../components/Popular"
import TopRated from "../components/TopRated"
import Trending from "../components/Trending"

function Home() {
  return (
    <div>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home