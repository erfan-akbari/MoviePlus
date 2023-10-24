import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import Img from './LazyLoadlImage'
import ContentWrapper from './ContentWrapper'

function HeroBanner() {

  const [background, setBackground] = useState('')
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const { url } = useSelector(state => state.home)
  const { data, loading } = useFetch('/movie/upcoming')

  useEffect(() => {
    const bg = `${url.backdrop}${data?.results[Math.floor(Math.random() * 20)].backdrop_path}`
    setBackground(bg)
  }, [data])

  const searchQueryHeader = () => {
    if (query.length > 0) {
      navigate(`/search/${query.trim()}`)
    }
  }

  const searchQueryHeaderEnter = e => {
    if (query.length > 0 && e.key === "Enter") {
      navigate(`/search/${query.trim()}`)
      setTimeout(() => {
        setShowSearch(false)
      }, 500);
    }
  }


  return (
    <div className='w-full h-[450px] md:h-[700px] bg-primary flex items-center relative'>
      {!loading &&
        <div className='w-full h-full absolute top-0 left-0 opacity-[0.5] overflow-hidden'>
          <Img src={background} className={'w-full h-full object-cover object-center'} />
        </div>
      }
      <div className="w-full h-64 gradient-2 absolute bottom-0 left-0"></div>
      <ContentWrapper>
        <div className='flex flex-col items-center text-white text-center relative max-w-[800px] my-0 mx-auto'>
          <span className='text-5xl font-bold md:mb-0 md:text-8xl'>Welcome.</span>
          <span className='text-lg font-medium mb-10 md:text-2xl'>
            movies, TV shows and people tp discover Explore now.
          </span>
          <div className='flex items-center w-full h-10 overflow-hidden rounded-3xl text-sm md:text-xl'>
            <input
              className='basis-[80%] h-full px-3 md:px-6 bg-white text-gray-700 border-none outline-none'
              type="text"
              placeholder='Search for a movie or tv show....'
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyUp={e => searchQueryHeaderEnter(e)}
            />
            <button
              className='basis-[20%] gradient-1 h-full outline-none border-none '
              onClick={searchQueryHeader}
            >Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner;