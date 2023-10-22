import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import DetailsBanner from "../components/DetailsBanner"
import Cast from "../components/Cast"

function Details() {
  const { mediaType, id } = useParams()
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`)
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`)

  return (
    <main className="relative">
      <DetailsBanner videos={data?.result?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
    </main>
  )
}

export default Details