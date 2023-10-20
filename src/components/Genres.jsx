import { useSelector } from "react-redux"

function Genres({ data, className }) {
    const { genres } = useSelector(state => state.home)

    return (
        <div className={className}>
            {data?.map(g => {
                if (!genres[g]?.name) return;
                return (
                    <div key={g} className="bg-primary-pink text-white text-[10px] w-fit py-[3px] px-[5px] rounded-[4px]">
                        {genres[g]?.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Genres