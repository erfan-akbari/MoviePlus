import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'

import { fetchDataFromApi } from '../utils/api'
import ContentWrapper from '../components/ContentWrapper'
import Spinner from '../components/Spinner'
import MovieCard from '../components/MovieCard'

function SearchResult() {
  const [data, setData] = useState(null)
  const [pageNum, setPageNum] = useState(1)
  const [loading, setLoading] = useState(false)
  const { query } = useParams()

  const fetchInitialData = () => {
    setLoading(true)
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`)
      .then(res => {
        setTimeout(() => {
          setData(res)
          setPageNum(prev => prev + 1)
          setLoading(false)
        }, 500);
      })
  }

  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`)
      .then(res => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          })
        } else {
          setData(res)
        }
        setPageNum(prev => prev + 1)
      })
  }

  useEffect(() => {
    setPageNum(1)
    fetchInitialData()
  }, [query])


  return (
    <main className='mt-20'>
      {loading && (
        <div className="flex items-center justify-center h-[550px] w-full">
          <Spinner />
        </div>
      )}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="text-3xl text-white font-semibold mb-10">
                {`Search ${data?.total_results > 1 ? 'results' : 'result'} of`}<span className='text-orange-600 ml-2'>{query}</span>
              </div>
              <InfiniteScroll
                className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results?.map((movie, index) => {
                  if (movie.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={movie} fromSearch={true} />
                  )
                })}
              </InfiniteScroll>
            </>
          ) : (
            <div className="text-3xl font-bold h-[470px] w-full">
              <h1 className="text-white gradient-1 h-15 p-5 rounded-lg text-center mt-40">Sorry, Results not found!</h1>
            </div>
          )}
        </ContentWrapper>
      )}
    </main>
  )
}

export default SearchResult