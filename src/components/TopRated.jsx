import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"

import ContentWrapper from "./ContentWrapper"
import SwitchTabs from "./SwitchTabs"
import Carousel from "./Carousel"

function TopRated() {

     const [endpoint, setEndpoint] = useState('movie')

    const { data, loading } = useFetch(`/${endpoint}/top_rated`)

    const switchTabsHandler = (type) => {
        setEndpoint(type === 'movies' ? 'movie' : 'tv')
    }

    return (
        <section className="text-white my-10">
            <ContentWrapper>
                <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl">Top Rated</span>
                    <SwitchTabs values={["movies", "tv shows"]} switchTabsHandler={switchTabsHandler} />
                </div>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} type={endpoint}  />
        </section>
    )
}

export default TopRated