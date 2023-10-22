import { useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { BsPlayCircle } from "react-icons/bs"
import dayjs from "dayjs"

import ContentWrapper from "./ContentWrapper"
import useFetch from "../hooks/useFetch"
import Genres from "./Genres"
import CircleRating from "./CircleRating"
import Img from "./LazyLoadlImage"
import ShimmerLoading2 from "./ShimmerLoading2"
import VideoPopup from "./VideoPopup"

function DetailsBanner({ video, crew }) {
    const [show, setShow] = useState(false)
    const [videoId, setVideoId] = useState(null)

    const { mediaType, id } = useParams()
    const { data, loading } = useFetch(`/${mediaType}/${id}`)
    const { url } = useSelector(state => state.home)

    const _genres = data?.genres?.map(g => g.id)

    const director = crew?.filter(f => f.job === "Director")
    const writer = crew?.filter(f => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer")

    const toHoursAndMinutes = totalMinutes => {
        const hours = Math.floor(totalMinutes / 60)
        const minutes = totalMinutes
        return `${hours}h${minutes > 0 && `${minutes}m`}`
    }

    return (
        <div>
            {!loading ? (
                <>
                    {data && (
                        <>
                            <ContentWrapper>
                                <div className="flex gap-10 flex-col md:flex-row mt-20">
                                    <div className="h-[700px] sm:h-[500px] lg:h-[600px] basis-[40%]">
                                        {data.poster_path ? (
                                            <Img
                                                className={'w-full h-full rounded-md'}
                                                src={url.backdrop + data?.poster_path}
                                            />
                                        ) : (
                                            <Img
                                                className={'w-full h-full rounded-md'}
                                                src={url.backdrop + data?.poster_path}
                                            />
                                        )}
                                    </div>
                                    <div className="basis-[60%]">
                                        <div className="text-white text-3xl mt-5">
                                            {`${data.title || data.name} (${dayjs(data?.release_date).format("YYYY")})`}
                                        </div>
                                        <div className="text-gray-400 my-2">
                                            {data.tagline}
                                        </div>
                                        <Genres
                                            data={_genres}
                                            className={"flex gap-2 items-center justify-start"}
                                        />
                                        <div className="flex items-center gap-4">
                                            <CircleRating
                                                rating={data.vote_average.toFixed(1)}
                                                className={'bg-primary-200 rounded-full w-14 my-5'}
                                            />
                                            <div className="flex items-center gap-4 cursor-pointer group"
                                                onClick={() => {
                                                    setShow(true)
                                                    setVideoId(data.id)
                                                }}
                                            >
                                                <BsPlayCircle
                                                    className="w-14 h-14 text-white group-hover:text-primary-pink duration-300"
                                                />
                                                <span className="text-white group-hover:text-primary-pink duration-300">
                                                    Watch Trailer
                                                </span>
                                            </div>
                                        </div>
                                        {data.overview && (
                                            <div className="text-gray-400">
                                                <h2 className="text-white text-xl py-2">Overview:</h2>
                                                <p className="text-gray-400">{data.overview}</p>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-2 mt-10 py-2 border-b border-gray-800">
                                            {data.status && (
                                                <div className="text-white flex flex-wrap gap-1.5">
                                                    <span>
                                                        Status:{""}
                                                    </span>
                                                    <span className="text-gray-500 w-full">
                                                        {data.status}
                                                    </span>
                                                </div>
                                            )}
                                            {data.release_date && (
                                                <div className="text-white flex flex-wrap gap-1.5">
                                                    <span>
                                                        Release Date:{""}
                                                    </span>
                                                    <span className="text-gray-500 w-full">
                                                        {dayjs(data.release_date).format("MMM D, YYYY")}
                                                    </span>
                                                </div>
                                            )}
                                            {data.runtime && (
                                                <div className="text-white flex flex-wrap gap-1.5">
                                                    <span>
                                                        Reuntime:{""}
                                                    </span>
                                                    <span className="text-gray-500 w-full">
                                                        {toHoursAndMinutes(data.runtime)}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        {director.length > 0 && (
                                            <div className="py-3 flex flex-wrap gap-1.5  border-b border-gray-800">
                                                <span className="text-white">
                                                    Director:
                                                </span>
                                                <span>
                                                    {director.map((d, i) => (
                                                        <span key={i} className="text-gray-500 w-full">
                                                            {d.name}
                                                            {director.length - 1 !== i && ", "}
                                                        </span>
                                                    ))}
                                                </span>
                                            </div>
                                        )}
                                        {writer.length > 0 && (
                                            <div className="py-3 flex flex-wrap gap-1.5  border-b border-gray-800">
                                                <span className="text-white">
                                                    Writer:
                                                </span>
                                                <span>
                                                    {writer.map((w, i) => (
                                                        <span key={i} className="text-gray-500 w-full">
                                                            {w.name}
                                                            {writer.length - 1 !== i && ",  "}
                                                        </span>
                                                    ))}
                                                </span>
                                            </div>
                                        )}
                                        {data?.created_by?.length > 0 && (
                                            <div className="py-3 flex flex-wrap gap-1.5  border-b border-gray-800">
                                                <span className="text-white">
                                                    Creator:
                                                </span>
                                                <span>
                                                    {data?.created_by?.map((d, i) => (
                                                        <span key={i} className="text-gray-500 w-full">
                                                            {d.name}
                                                            {data?.created_by?.length - 1 !== i && ",  "}
                                                        </span>
                                                    ))}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <VideoPopup 
                                    show={show}
                                    setShow={setShow}
                                    videoId={videoId}
                                    setVideoId={setVideoId}
                                />
                            </ContentWrapper>
                        </>
                    )}
                </>
            ) : (
                <ShimmerLoading2 />
            )}

        </div>
    )
}

export default DetailsBanner