import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'
import { fetchDataFromApi } from './utils/api'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Details from "./pages/Details"
import Explore from "./pages/Explore"
import SearchResult from "./pages/SearchResult"
import NotFound from "./pages/NotFound"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    fetchApiConfig()
  }, [])

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration')
      .then(res => {
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        }
        dispatch(getApiConfiguration(url))
      })
  }


  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/:quray' element={<SearchResult />} />
          <Route path='/:mediaType/:id' element={<Details />} />
          <Route path='/explore/:mediaType' element={<Explore />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App;
