import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ContentWrapper from './ContentWrapper'
import Img from './LazyLoadlImage'
import dayjs from 'dayjs'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ShimmerLoading from './ShimmerLoading';
import CircleRating from './CircleRating';
import Genres from './Genres';

function Carousel({ data, loading }) {
    const { url } = useSelector(state => state.home)

    return (
        <div className='relative mt-5'>
            <ContentWrapper>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {!loading ? (
                        <>
                            {data?.map(item => {
                                const posterUrl = item.poster_path ?
                                    `${url.poster}${item.poster_path}` : 'loding'
                                return (
                                    <SwiperSlide className="flex flex-col"
                                        key={item.id}>
                                        <div className='relative'>
                                            <Img src={posterUrl} className={'block w-full h-full object-cover rounded-md'} />
                                            <CircleRating rating={item.vote_average.toFixed(1)} />
                                            <Genres data={item.genre_ids.slice(0, 2)} />
                                        </div>
                                        <div className="mt-5 text-gray-100">
                                            <div className='whitespace-nowrap overflow-hidden text-ellipsis w-full'>{item.title}</div>
                                            <span className='text-gray-400 block text-sm'>{dayjs(item.release_date).format("MMM D, YYYY")}</span>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </>
                    ) : (
                        <div className='flex items-center justify-between'>
                            <ShimmerLoading />
                            <ShimmerLoading />
                            <ShimmerLoading />
                            <ShimmerLoading />
                            <ShimmerLoading />
                        </div>
                    )}
                </Swiper>
            </ContentWrapper>
        </div>
    )
}

export default Carousel