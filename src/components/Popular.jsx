import { useState } from "react"
import useFetch from "../hooks/useFetch"

import ContentWrapper from "./ContentWrapper"
import SwitchTabs from "./SwitchTabs"
import Carousel from "./Carousel"

function Popular() {

    const [endpoint, setEndpoint] = useState('movie')

    const { data, loading } = useFetch(`/${endpoint}/popular`)

    const switchTabsHandler = (type) => {
        setEndpoint(type === 'movies' ? 'movie' : 'tv')
    }

    return (
        <section className="text-white my-16">
            <ContentWrapper>
                <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl">What's Popular</span>
                    <SwitchTabs values={["movies", "tv shows"]} switchTabsHandler={switchTabsHandler} />
                </div>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} type={endpoint}  />
        </section>
    )
}

export default Popular