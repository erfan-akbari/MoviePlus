import { useEffect, useState } from "react"


function SwitchTabs({ values, switchTabsHandler }) {

    const [type, setType] = useState(values[0])
    
    useEffect(() => {
        switchTabsHandler(type)
    }, [type])

    return (
        <div className='relative flex items-center gap-1.5 p-0.5 bg-white text-black rounded-3xl h-7 sm:h-9 shadow-lg shadow-black'>
            {values.map((val, index) => (
                <div
                    onClick={() => setType(val)}
                    key={index}
                    className={`${type === val ? ' text-white gradient-1' : 'text-black bg-white'} transition-colors duration-300 capitalize cursor-pointer flex items-center justify-center h-full w-20 sm:w-28 font-semibold rounded-3xl z-20`}
                >
                    {val}
                </div>
            ))}
        </div>
    )
}

export default SwitchTabs