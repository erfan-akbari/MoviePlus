import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

function CircleRating({ rating, className }) {
  return (
    <div className={className}>
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