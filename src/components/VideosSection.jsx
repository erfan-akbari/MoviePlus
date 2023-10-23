import { useState } from 'react'
import ContentWrapper from './ContentWrapper'
import Img from './LazyLoadlImage'
import VideoPopup from './VideoPopup'
import { BsPlayCircle } from "react-icons/bs"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


function VideosSection({ data, loading }) {
    const [show, setShow] = useState(false)
    const [videoId, setVideoId] = useState(null)

    return (
        <div className="mt-10">
            <ContentWrapper>
                <div className="text-2xl font-semibold text-white mb-5">Official Videos</div>
                {!loading ? (
                    <div>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={10}
                            navigation={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 4,
                                },
                                768: {
                                    slidesPerView: 5,
                                },
                                1080: {
                                    slidesPerView: 6,
                                },
                                1200: {
                                    slidesPerView: 7,
                                },
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {data?.results?.map(video => {
                                return (
                                    <SwiperSlide
                                        className="text-white"
                                        key={video.id}
                                        onClick={() => {
                                            setVideoId(video.key)
                                            setShow(true)
                                        }}
                                    >
                                        <div className="relative overflow-hidden mb-2 group">
                                            <Img
                                                src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                                                className={'rounded-lg'}
                                            />
                                            <BsPlayCircle
                                                className='absolute top-[30%] left-[40%] text-4xl group-hover:text-primary-pink transition-colors duration-300'
                                            />
                                        </div>
                                        <div className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">{video.name}</div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <VideoPopup style={'top-[60%] md:top-[60%]'} show={show} setShow={setShow} videoId={videoId} setVideoId={setVideoId} />
                    </div>
                ) : (
                    <div className="text-white">loading...</div>
                )}
            </ContentWrapper>
        </div>
    )
}

export default VideosSection