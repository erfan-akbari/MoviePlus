import HeroBanner from "../components/HeroBanner"
import Popular from "../components/Popular"
import TopRated from "../components/TopRated"
import Trending from "../components/Trending"

function Home() {
  return (
    <main>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </main>
  )
}

export default Home