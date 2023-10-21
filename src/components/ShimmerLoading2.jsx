import ContentWrapper from "./ContentWrapper"

function ShimmerLoading2() {
    return (
        <ContentWrapper>
            <div role="status" className="mt-20 space-y-10 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-start">

                <div role="status" className="flex items-center justify-center h-[600px] sm:h-[500px] lg:h-[600px] basis-[40%] bg-primary-200 rounded-lg animate-pulse dark:bg-gray-700">
                    <span className="sr-only">Loading...</span>
                </div>

                <div className="basis-[60%] flex flex-col gap-5">
                    <div className="flex items-center justify-between mt-10">
                        <div>
                            <div className="h-4 bg-primary-200 rounded-md dark:bg-gray-600 w-24 mb-2.5"></div>
                            <div className="w-32 h-2.5 bg-primary-200 rounded-md dark:bg-gray-700"></div>
                            <div className="h-4 bg-primary-200 rounded-md dark:bg-gray-600 w-24 mt-2.5"></div>
                        </div>
                    </div>
                    <div className="flex items-center my-4 space-x-3">
                        <svg className="w-14 h-14 text-primary-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        <svg className="w-14 h-14 text-primary-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        <div>
                            <div className="h-4 bg-primary-200 rounded-md dark:bg-gray-700 w-32 mb-2"></div>
                            <div className="w-48 h-2.5 bg-primary-200 rounded-md dark:bg-gray-700"></div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="h-4 bg-primary-200 rounded-md dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2.5 bg-primary-200 rounded-md dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                        <div className="h-2.5 bg-primary-200 rounded-md dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2.5 bg-primary-200 rounded-md dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                        <div className="h-2.5 bg-primary-200 rounded-md dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                        <div className="h-2.5 bg-primary-200 rounded-md dark:bg-gray-700 max-w-[360px]"></div>
                    </div>
                    <div className="flex flex-col gap-5 my-5">
                        <div>
                            <div className="h-4 bg-primary-200 rounded-md dark:bg-gray-700 w-[20%] mb-2.5"></div>
                            <div className="w-[60%] h-2.5 bg-primary-200 rounded-md dark:bg-gray-700"></div>
                        </div>
                        <div>
                            <div className="h-4 bg-primary-200 rounded-md dark:bg-gray-700 w-[20%] mb-2.5"></div>
                            <div className="w-[60%] h-2.5 bg-primary-200 rounded-md dark:bg-gray-700"></div>
                        </div>
                        <div>
                            <div className="h-4 bg-primary-200 rounded-md dark:bg-gray-700 w-[20%] mb-2.5"></div>
                            <div className="w-[60%] h-2.5 bg-primary-200 rounded-md dark:bg-gray-700"></div>
                        </div>
                    </div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </ContentWrapper>

    )
}

export default ShimmerLoading2