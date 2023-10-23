import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import DetailsBanner from "../components/DetailsBanner"
import Cast from "../components/Cast"
import VideosSection from "../components/VideosSection"
import Recommendation from "../components/Recommendation"
import Similar from "../components/Similar"

function Details() {
  const { mediaType, id } = useParams()
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`)
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`)

  return (
    <main className="relative">
      <DetailsBanner videos={data?.result?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </main>
  )
}

export default Details