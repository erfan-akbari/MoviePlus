import { useState, useEffect } from 'react'
import { HiOutlineSearch } from "react-icons/hi"
import { SlMenu } from "react-icons/sl"
import { VscChromeClose } from "react-icons/vsc"
import { useNavigate, useLocation } from 'react-router-dom'

import ContentWrapper from './ContentWrapper'

function Header() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [query, setQuery] = useState('')
  const [showSearch, setShowSearch] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const controNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu && !showSearch) {
        setShow(false)
      } else {
        setShow(true)
      }
    }
    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controNavbar)
    return () => {
      window.removeEventListener('scroll', controNavbar)
    }
  }, [lastScrollY])

  const openSearch = () => {
    setShowSearch(true)
    setMobileMenu(false)
  }

  const openMobileMenu = () => {
    setMobileMenu(prevState => !prevState)
    setShowSearch(false)
  }

  const searchQueryHeader = e => {
    if (query.length > 0 && e.key === "Enter") {
      navigate(`/search/${query.trim()}`)
      setTimeout(() => {
        setShowSearch(false)
      }, 500);
    }
  }

  const navigationHandler = (type) => {
    if (type === 'movie') {
      navigate('/explore/movie')
    } else {
      navigate('/explore/tv')
    }
    setMobileMenu(false)
  }

  return (
    <header className={`py-3 fixed top-0 left-0 right-0 z-50 text-stone-100 backdrop-blur-sm ${mobileMenu ? 'bg-primary-200' : 'bg-primary-200/40'} ${show ? 'translate-y-0' : '-translate-y-40'} transition-all duration-300`}>
      <ContentWrapper>
        <div className="flex items-center justify-between">
          <div className="">
            <h1 onClick={() => navigate('/')} className='gradient-1 w-fit py-1 px-2 rounded-3xl font-semibold text-lg cursor-pointer'>
              MoviePlus+
            </h1>
          </div>
          <ul className="flex items-center gap-5">
            <li className='hidden sm:block cursor-pointer hover:text-primary-pink' onClick={() => navigationHandler('movie')}>Movies</li>
            <li className='hidden sm:block cursor-pointer hover:text-primary-pink' onClick={() => navigationHandler('tv')}>TV Shows</li>
            <li className='cursor-pointer hover:text-primary-pink' onClick={openSearch}><HiOutlineSearch /></li>
            <li className='block sm:hidden cursor-pointer hover:text-primary-pink' onClick={openMobileMenu}>
              {mobileMenu ? <VscChromeClose /> : <SlMenu />}
            </li>
          </ul>
        </div>
      </ContentWrapper>
      {/* >>> search bar <<< */}
      <div className={`absolute top-full left-0 right-0 w-full bg-white py-3 ${showSearch ? 'translate-y-0' : '-translate-y-28'} transition-all duration-300`}>
        <ContentWrapper>
          <div className='flex items-center justify-between'>
            <input
              className='w-full h-full border-none outline-none text-gray-500'
              type="text"
              placeholder='Search for a movie or tv show....'
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyUp={e => searchQueryHeader(e)}
            />
            <VscChromeClose className='text-black text-xl cursor-pointer' onClick={() => setShowSearch(false)} />
          </div>
        </ContentWrapper>
      </div>
      {/* >>> menu mobile <<< */}
      <div className={`absolute top-full left-0 right-0 w-full bg-primary-200 py-3 ${mobileMenu ? 'translate-y-0' : '-translate-y-44'} transition-all duration-300`}>
        <ContentWrapper>
          <ul className='font-semibold space-y-2 my-2'>
            <li className='cursor-pointer hover:text-primary-pink' onClick={() => navigationHandler('movie')}>
              Movies
            </li>
            <li className='cursor-pointer hover:text-primary-pink' onClick={() => navigationHandler('tv')}>
              TV Shows
            </li>
          </ul>
        </ContentWrapper>
      </div>
    </header>
  )
}

export default Header