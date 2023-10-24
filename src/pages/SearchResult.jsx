import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'

import { fetchDataFromApi } from '../utils/api'
import ContentWrapper from '../components/ContentWrapper'
import Spinner from '../components/Spinner'


function SearchResult() {
  const [data, setData] = useState(null)
  const [pageNum, setPageNum] = useState(1)
  const [loading, setLoading] = useState(false)
  const { quray } = useParams()

  const fetchInitialData = () => {
    setLoading(true)
    fetchDataFromApi(`/search/multi?quray=${quray}&page=${pageNum}`)
      .then(res => {
        setTimeout(() => {
          setData(res)
          setPageNum(prev => prev + 1)
          setLoading(false)
        }, 1500);
      })
  }

  const fetchNextPageData = () => {
    setLoading(true)
    fetchDataFromApi(`/search/multi?quray=${quray}&page=${pageNum}`)
      .then(res => {
        if (data?.results) {
          setData({
            ...data, results: [...data.results, ...res.results]
          })
        } else {
          setData(res)
        }
        setPageNum(prev => prev + 1)
      })
  }

  useEffect(() => {
    fetchInitialData()
  }, [quray])


  return (
    <main className='mt-20'>
      {loading && (
        <div className="flex items-center justify-center h-[550px] w-full">
          <Spinner />
        </div>
      )}
      {!loading && (
        <ContentWrapper>
          {data?.results?.lenght > 0 ? (
            <div className=""></div>
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