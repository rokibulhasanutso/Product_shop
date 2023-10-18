// import Axios from 'axios';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useLoaderData, useSearchParams } from 'react-router-dom';

// export const searchLoader = async () => {

//     const [ searchData ] = useSearchParams();

//     console.log(searchData.get('search'));
    
//     return await Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
// }

// const Test1 = () => {

//     const loadData = useLoaderData()

//     console.log(loadData?.data);
    
//     return (
//         <div>test1 page</div>
//     )
// }

// export default Test1;




import Axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';


const Test1 = () => {

    const [data, setdata] = useState({
        meals: 'Meal data not found!'
    })

    const [seachParam, setSeachParam] = useSearchParams({search : ''})

    useEffect(() => {

        loadData(seachParam.get('search'))

    }, [])

    const loadData = async (searchInput) => {
        const response = await Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)

        setdata(response?.data)
        // console.log(response);
    }


    const clickSearch = (event) => {
        event.preventDefault()

        loadData(seachParam.get('search'))

        console.log(data)
        console.log(seachParam.get('search'));
    }
    
    return (
        <div>
            test1 page

            <form action="" onSubmit={clickSearch} className='mt-5'>
                {/* search input */}
                <input 
                    type="text" 
                    onChange={(event) => setSeachParam( { search: event.target.value} )}  
                    className={'border border-black'}
                />

                {/* searchButton */}
                <input 
                    type="submit" 
                    value={'search'} 
                    className={'bg-orange-500 px-2.5 py-1.5'}
                />
            </form>
        </div>
    )
}

export default Test1;