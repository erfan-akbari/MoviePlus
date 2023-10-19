import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"

import ContentWrapper from "./ContentWrapper"
import SwitchTabs from "./SwitchTabs"
import Carousel from "./Carousel"

function Trending() {

    const [endpoint, setEndpoint] = useState('day')

    const { data, loading } = useFetch(`/trending/all/${endpoint}`)

    const switchTabsHandler = (type) => {
        setEndpoint(type)
    }

    return (
        <section className="text-white my-2.5">
            <ContentWrapper>
                <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl">Trending</span>
                    <SwitchTabs values={["day", "week"]} switchTabsHandler={switchTabsHandler} />
                </div>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </section>
    )
}

export default Trending