import ReactPlayer from "react-player/youtube"

function VideoPopup({ show, setShow, videoId, setVideoId }) {

  const hidePopup = () => {
    setShow(false)
    setVideoId(null)
  }
  
  return (
    <div className={` ${show ? 'flex' : 'hidden'}`}>
      <div className="absolute w-full h-full bg-black/60 blur-2xl md:-top-5 top-0 left-0 z-40" onClick={hidePopup}></div>
      <div className="z-50 absolute top-[50%] md:top-[30%] left-0 md:left-[25%] lg:left-[30%] mx-auto bg-black w-full md:w-[50%] lg:w-[40%] h-[300px] p-2">
        <span className="absolute -top-8 right-0 text-red-600 font-semibold cursor-pointer" onClick={hidePopup}>
          Close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width='100%'
          height='100%'
          playing={true}
        />
      </div>
    </div>
  )
}

export default VideoPopup