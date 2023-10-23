import Carousel from "./Carousel"
import useFetch from "../hooks/useFetch"
import ContentWrapper from "./ContentWrapper"

function Recommendation({ mediaType, id }) {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/recommendations`)

    const title = 'Recommendations'
        ;
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

export default Recommendation