import { useSelector } from "react-redux"

function Genres({ data }) {
    const { genres } = useSelector(state => state.home)

    return (
        <div className="absolute bottom-1 right-1 hidden md:flex gap-1 flex-wrap justify-end max-w-[50px]">
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