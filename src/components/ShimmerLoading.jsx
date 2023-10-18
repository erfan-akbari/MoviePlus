
function ShimmerLoading() {
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full rounded-lg overflow-hidden w-20 sm:w-full">
                <div className="lg:h-72 bg-primary-200 h-32 md:h-40 w-full object-cover object-center"></div>
                <div className="md:py-2">
                    <h2 className="bg-primary-200animate-pulse h-4 w-1/4 md:mb-1"></h2>
                    <h1 className="w-1/2 md:mb-2 h-6 animate-pulse bg-primary-200"></h1>
                    <div className="flex items-center flex-wrap ">
                        <a className="bg-primary-200 h-4 animate-pulse md:mt-1 w-40inline-flex items-center md:mb-2 lg:mb-0">
                        </a>
                        <span className="bg-primary-200 w-40 md:mt-1 h-4 animate-pulse mr-3 px-2 inline-block items-center ml-auto leading-none text-sm pr-5 py-1">
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShimmerLoading