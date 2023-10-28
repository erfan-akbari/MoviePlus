import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import Select from 'react-select'

import useFetch from "../hooks/useFetch.js"
import ContentWrapper from "../components/ContentWrapper"
import MovieCard from "../components/MovieCard"
import Spinner from "../components/Spinner"
import { fetchDataFromApi } from '../utils/api'

let filters = {}

const sortbyData = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_avareage.desc", label: "Rating Descending" },
  { value: "vote_avareage.asc", label: "Rating Ascending" },
  { value: "primary_release.desc", label: "Release Descending" },
  { value: "primary_release.asc", label: "Release Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
]

function Explore() {
  const [data, setData] = useState(null)
  const [pageNum, setPageNum] = useState(1)
  const [loading, setLoading] = useState(false)
  const [genre, setGenre] = useState(null)
  const [sortby, setSortby] = useState(null)
  const { mediaType } = useParams()

  const { data: genresData } = useFetch(`/genre/${mediaType}/list`)

  const fetchInitialData = () => {
    setLoading(true)
    fetchDataFromApi(`/discover/${mediaType}`, filters)
      .then(res => {
        setData(res)
        setPageNum(prev => prev + 1)
        setLoading(false)
      })
  }

  const fetchNextPageData = () => {
    fetchDataFromApi(`/discover/${mediaType}?page=${pageNum}`, filters)
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
    filters = {}
    setData(null)
    setPageNum(1)
    setSortby(null)
    setGenre(null)
    fetchInitialData()
  }, [mediaType])

  useEffect(() => {
    setPageNum(1)
    fetchInitialData()
  }, [sortby])

  useEffect(() => {
    setPageNum(1)
    fetchInitialData()
  }, [genre])


  const onChange = (selectedItems, action) => {
    if (action.name === "sortby") {
      setSortby(selectedItems)
      if (action.action !== "clear") {
        let options = selectedItems.map(item => item.value)
        options = JSON.stringify(options).slice(1, -1)
        filters.sort_by = options
      } else {
        delete filters.sort_by
      }
    }

    if (action.name === "genres") {
      setGenre(selectedItems)
      if (action.action !== "clear") {
        let genreId = selectedItems.map(g => g.id)
        genreId = JSON.stringify(genreId).slice(1, -1)
        filters.with_genres = genreId
      } else {
        delete filters.with_genres
      }
    }

  }


  return (
    <main className='mt-20'>
      {loading && (
        <div className="flex items-center justify-center h-[550px] w-full">
          <Spinner />
        </div>
      )}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 && (
            <>
              <nav className='flex items-center gap-5 justify-between flex-wrap my-10'>
                <h2 className="text-4xl font-bold text-orange-600">
                 {mediaType === 'movie' ? 'Explore Movies' : 'Explore TV Shows'}
                </h2>
                <div className="flex items-center flex-wrap gap-5">
                  <Select
                    isMulti
                    name='genres'
                    value={genre}
                    onChange={onChange}
                    closeMenuOnSelect={false}
                    options={genresData?.genres}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.id}
                    placeholder='Select genres'
                    className='min-w-[200px]'
                    classNamePrefix=''
                  ></Select>
                  <Select
                    isMulti
                    name='sortby'
                    value={sortby}
                    onChange={onChange}
                    // isClearable={true}
                    closeMenuOnSelect={false}
                    options={sortbyData}
                    getOptionLabel={(option) => option.label}
                    getOptionValue={(option) => option.value}
                    placeholder='Sort By'
                    className='min-w-[200px]'
                    classNamePrefix=''
                  ></Select>
                </div>
              </nav>
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
                    <MovieCard key={index} data={movie} mediaType={mediaType} />
                  )
                })}
              </InfiniteScroll>
            </>
          )}
        </ContentWrapper>
      )}
    </main>
  )
}

export default Explore