import Carousel from "./Carousel"
import useFetch from "../hooks/useFetch"
import ContentWrapper from "./ContentWrapper"

function Similar({ mediaType, id }) {

    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`)

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies"

    return (
        <section className="my-10">
            {data?.results && (
                <Carousel
                    title={title}
                    data={data?.results}
                    loading={loading}
                    type={mediaType}
                />
            )}
        </section>
    )
}

export default Similar