import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

function CircleRating({ rating }) {
  return (
    <div className='absolute -bottom-3 left-2 w-8 sm:w-10 text-black bg-gray-100 rounded-full'>
        <CircularProgressbar
            value={rating}
            maxValue={10}
            text={rating}
            styles={buildStyles({
                pathColor:
                rating < 5 ? 'red' :
                rating < 7 ? 
                "orange" : "green"
            })}
        />
    </div>
  )
}

export default CircleRating