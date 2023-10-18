import Axios from 'axios'
import { useEffect, useState } from 'react';

const useCallAPI = url => {

    const [ isLoading, setIsLoading ] = useState(false)
    const [ apiData, setApiData ] = useState(null)
    const [ serverError, setServerError ] = useState(null)

    useEffect(() => {
        setIsLoading(true)

        const urlData = async () => {

            try {
                const response = await Axios.get(url)
                const data = response?.data
                
                setIsLoading(false)
                setApiData(data)
                
            } catch (error) {
                setServerError(error)
                setIsLoading(false)
            }
        }
        urlData()

    }, [ url ])

    return [ apiData, isLoading, serverError ]
};

export default useCallAPI;