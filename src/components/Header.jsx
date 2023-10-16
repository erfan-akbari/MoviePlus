import { useState, useEffect } from 'react'
import { HiOutlineSearch } from "react-icons/hi"
import { SlMenu } from "react-icons/sl"
import { VscChromeClose } from "react-icons/vsc"
import { useNavigate, useLocation } from 'react-router-dom'

import ContentWrapper from './ContentWrapper'

function Header() {
  const [show, setShow] = useState("top")
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [query, setQuery] = useState('')
  const [showSearch, setShowSearch] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <header className='text-stone-100 py-3 sticky top-0 left-0 right-0 z-10 bg-transparent'>
      <ContentWrapper>
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className='gradient-1 w-fit py-1 px-2 rounded-3xl font-semibold text-lg'>
              topMovies
            </h1>
          </div>
          <ul className="flex items-center gap-5">
            <li className=''>Movies</li>
            <li className=''>TV Shows</li>
            <li className=''><HiOutlineSearch /></li>
          </ul>
        </div>
      </ContentWrapper>
    </header>
  )
}

export default Header