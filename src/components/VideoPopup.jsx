import ReactPlayer from "react-player/youtube"

function VideoPopup({ show, setShow, videoId, setVideoId }) {

  const hidePopup = () => {
    setShow(false)
    setVideoId(null)
  }
  console.log(`https://www.youtube.com/watch?v=${videoId}`);
  return (
    <div className={` ${show ? 'flex' : 'hidden'}`}>
      <div className="absolute w-screen h-screen bg-black/60 blur-2xl -top-5 left-0 z-40" onClick={hidePopup}></div>
      <div className="z-50 absolute top-[30%]  md:left-[30%] mx-auto bg-black md:w-[40%] h-[60%] p-2">
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