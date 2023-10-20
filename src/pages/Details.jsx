import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import DetailsBanner from "../components/DetailsBanner"

function Details() {
  const { mediaType, id } = useParams()
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`)
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`)

  return (
    <main>
      <DetailsBanner videos={data?.result?.[0]} crew={credits?.crew} />
    </main>
  )
}

export default Details