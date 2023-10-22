import { useSelector } from "react-redux"
import ContentWrapper from "./ContentWrapper"
import Img from "./LazyLoadlImage"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


function Cast({ data, loading }) {
    const { url } = useSelector(state => state.home)

    return (
        <div className="mt-10">
            <ContentWrapper>
                <div className="text-2xl font-semibold text-white mb-5">Top Cast</div>
                {!loading && (
                    <div>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={10}
                            navigation={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 6,
                                },
                                768: {
                                    slidesPerView: 7,
                                },
                                1080: {
                                    slidesPerView: 8,
                                },
                                1200: {
                                    slidesPerView: 9,
                                },
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {data?.map(item => {
                                let imgUrl = item.profile_path ?
                                    url.profile + item.profile_path : ''
                                return (
                                    <SwiperSlide key={item.id}>
                                        <div>
                                            <Img
                                                src={imgUrl}
                                                className={'h-24 sm:h-28 md:h-32 w-full rounded-full'}
                                            />
                                            <div className="text-white text-center whitespace-nowrap overflow-hidden text-ellipsis">{item.name}</div>
                                            <div className="text-gray-400 text-sm text-center whitespace-nowrap overflow-hidden text-ellipsis">{item.character}</div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                )}
            </ContentWrapper>
        </div>
    )
}

export default Cast;