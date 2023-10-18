import { useEffect, useState } from "react"


function SwitchTabs({ values, switchTabsHandler }) {

    const [type, setType] = useState(values[0])
    const [left, setLeft] = useState(false)

    const activeTab = (val) => {
        setType(val)
        setLeft(prev => !prev)
    }

    useEffect(() => {
        switchTabsHandler(type)
    }, [type])

    return (
        <div className='relative flex items-center gap-1.5 p-0.5 bg-white text-black rounded-3xl h-9 shadow-lg shadow-black'>
            {values.map((val, index) => (
                <div
                    onClick={() => activeTab(val)}
                    key={index}
                    className={`${type === val ? ' text-white' : 'text-black'} capitalize cursor-pointer flex items-center justify-center h-full w-28 font-semibold rounded-3xl z-20`}
                >
                    {val}
                </div>
            ))}
            <span className={`gradient-1 w-28 h-[90%] absolute left-[${left ? 51 : 1}%] rounded-3xl z-10 transition-all duration-400`}></span>
        </div>
    )
}

export default SwitchTabs