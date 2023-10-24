import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='flex flex-col gap-10 items-center justify-center mt-20'>
      <img
        src="/404_error.avif"
        alt="img 404"
        className='rounded-lg'
      />
      <h2 className="text-white font-bold text-3xl">Sorry, nothing was found :(</h2>
      <p className="text-gray-400">
      Go to one of the following routes :)
      </p>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        <Link
          className='bg-primary-light py-2 px-3 text-white font-semibold text-lg rounded-xl hover:bg-primary-lighter'
          to={'/'}>
          return to home ...
        </Link>
        <Link
          className='bg-primary-light py-2 px-3 text-white font-semibold text-lg rounded-xl hover:bg-primary-lighter'
          to={'/explore/movie'}>
          return to explore ...
        </Link>
      </div>
    </div>
  )
}

export default NotFound