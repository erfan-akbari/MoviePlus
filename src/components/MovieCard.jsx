import React from 'react'
import { Link } from 'react-router-dom'
import Genres from './Genres'
import CircleRating from './CircleRating'
import Img from './LazyLoadlImage'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'


function MovieCard({ type, data, fromSearch, mediaType }) {
    const { url } = useSelector(state => state.home)

    const posterUrl = data.poster_path ? `${url.poster}${data.poster_path}` : '/images/notImage.png'

    return (
        <div className="flex flex-col">
            <div className='relative'>
                <Link to={`/${mediaType || type}/${data.id}`}>
                    <Img src={posterUrl} className={'block w-full h-[325px] object-cover rounded-md'} />
                </Link>
                {!fromSearch && (
                    <React.Fragment>
                        <CircleRating
                            rating={data.vote_average.toFixed(1)}
                            className={'absolute -bottom-3 left-2 w-7 sm:w-10 text-black bg-gray-100 rounded-full'}
                        />
                        <Genres
                            data={data.genre_ids.slice(0, 2)}
                            className={"absolute bottom-1 right-1 hidden md:flex gap-1 flex-wrap justify-end max-w-[50px]"}
                        />
                    </React.Fragment>
                )}
            </div>
            <div className="mt-5 text-gray-100">
                <Link to={`/${type}/${data.id}`}>
                    <div className='whitespace-nowrap overflow-hidden text-ellipsis w-full'>{data.title || data.name}</div>
                </Link>
                <span className='text-gray-400 block text-sm'>{dayjs(data.release_date).format("MMM D, YYYY")}</span>
            </div>
        </div>
    )
}

export default MovieCard