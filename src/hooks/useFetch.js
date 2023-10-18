import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading("loading...")
        setData(null)
        setError(null)

        fetchDataFromApi(url)
            .then(res => {
                setTimeout(() => {
                    setLoading(false)
                }, 1000);
                setData(res)
            })
            .catch(err => {
                setTimeout(() => {
                    setLoading(false)
                }, 1000);
                setError('Something went wrong!')
            })
    }, [url])

    return { data, loading, error }
}

export default useFetch;