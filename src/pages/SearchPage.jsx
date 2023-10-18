import { useSearchParams } from "react-router-dom";
import SideBar from "../components/global/SideBar";
import { useEffect, useState } from "react";
import ProductCard from "../components/card/ProductCard";
import Loading from "../components/global/Loading";
import emptybox from './../../public/empty_box.png'
import Pagination from "../components/global/pagination";

const SearchPage = () => {

    const [ searchParams ] = useSearchParams();
    const [ data, setData] = useState()

    // per page show on 9 items
    const perPageItems = 9; 

    useEffect(() => {

        fetch(
            `https://dummyjson.com/products/search?q=${

                searchParams.get('q')

            }&limit=${

                perPageItems

            }&skip=${

                (perPageItems * (parseInt(searchParams.get('page')) - 1)) || 0

            }`
        )
        .then(response => response.json())
        .then(data => setData(data))

    }, [searchParams]);

    // console.log(searchParams.get('age'))
    // console.log(perPageItems * (parseInt(searchParams.get('page')) - 1) || 0)
    // console.log(searchParams.entries())
    
    // console.log(Object.fromEntries(searchParams))
    // console.log(data)

    return (
        <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-8 gap-8">
                <div className="col-span-2">
                    <SideBar/>
                </div>

                <div className="col-span-6">
                    { !data && <Loading/> }

                    {
                        data?.products.length > 0 && 
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
                            {
                                data?.products?.map( productItem =>
                                    <ProductCard 
                                        key={productItem.id} 
                                        productItem={productItem}
                                    />
                                )
                            }
                        </div>
                    }

                    {
                        data?.products.length <= 0 && 
                        <div className='flex flex-col justify-center items-center h-full'>
                            <div className='-mt-5 flex flex-col items-center'>
                                <div className='w-60 h-60'>
                                    <img src={emptybox} className='w-full h-full' alt="Empty Box Image" />
                                </div>
                                <p className='text-slate-500 text-3xl mt-4'>Your product could not be found.</p>
                            </div>
                        </div>
                    }

                    {
                        data && data?.limit !== data?.total &&
                        <div className="mt-20 flex justify-center ">
                            <Pagination
                                totalItems={data?.total} 
                                limitItems={data?.limit} 
                                skipItems={data?.skip} 
                                perPageItems={perPageItems} 
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchPage;