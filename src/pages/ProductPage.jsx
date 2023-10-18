import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { rootAPIUrl } from '../api/appAPI';
import emptybox from './../../public/empty_box.png'
import { Link } from 'react-router-dom';
import RatingStar from './../components/global/RatingStar';

export const loaderProductPageData = async ({params}) => {
    try {
        const response = await Axios.get(`${rootAPIUrl}/product/${params.product_id}`)
        
        return {
            statusCode: response.status,
            data: response?.data
        }
    } 
    catch (error) {
        return {
            statusCode: error.response.status,
            errorMessage: error.response.data.message
        }
    }
}

const ProductPage = () => {
    const { statusCode, data } = useLoaderData()

    console.log(statusCode, data)

    const [ imageUrl, setImageUrl ] = useState(false)
    // const [ imageLoading, setImageLoading ] = useState(true)

    useEffect(() => {
        const image = new Image();
        image.src = data?.thumbnail;

        image.onload = () => {
            setImageUrl(data?.thumbnail)
        }
    }, [data?.thumbnail])

    // console.log(statusCode, errorMessage)
    // let APIstatus = 123
    
    return (
        <>
            {
                statusCode !== 200
                ? (
                    <div className='flex flex-col justify-center items-center h-full'>
                        <div className='-mt-5 flex flex-col items-center'>
                            <div className='w-60 h-60'>
                                <img src={emptybox} className='w-full h-full' alt="Empty Box Image" />
                            </div>
                            <p className='text-slate-500 text-3xl mt-4'>Your product could not be found.</p>
                        </div>
                    </div>
                    
                ) : (
                    <div>
                        <div className='container max-w-7xl mx-auto'>
                            <div className='grid grid-cols-8 gap-10 bg-white p-6 rounded-md shadow-md'>
                                <div className='col-span-3'>

                                    <div className='rounded-md overflow-hidden'>
                                        {
                                            imageUrl 
                                            ? (
                                                <img 
                                                    src={ imageUrl }
                                                    alt="Product Image"
                                                    className='w-full h-full'
                                                />
                                            ) : (
                                                <div className='w-full h-96 bg-gray-200 animate-pulse flex justify-center items-center'>
                                                    <p className='text-slate-500 text-2xl font-semibold'>Image loading ...</p>
                                                </div>
                                            )
                                        }
                                    </div>

                                    <div className='mt-10 flex gap-4'>
                                        {
                                            data?.images?.map((value, key) => {
                                                return (
                                                    <div 
                                                        key={key} 
                                                        className={
                                                            `w-28 h-28 cursor-pointer rounded-md overflow-hidden border-2 p-1
                                                            ${value === imageUrl ? 'border-blue-500' : 'hover:border-blue-500'}`
                                                        }
                                                        onClick={() => setImageUrl(value)}
                                                    >
                                                        <img 
                                                            src={value}
                                                            alt="Product Image"
                                                            className='w-full h-full'
                                                        />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>


                                <div className='col-span-5'>

                                    <div className='px-6'>
                                        <h1 className='capitalize text-3xl font-semibold text-orange-600 mt-2'>{data.title}</h1>
                                        
                                        {/* tag names */}
                                        <div className='mt-6 flex flex-wrap gap-2'>
                                            <span className='bg-slate-200 px-4 py-1.5 rounded-full font-semibold text-gray-700'>Price : {
                                                (data.price * (1 - data.discountPercentage / 100)).toFixed(2)
                                            }$</span>
                                            <span className='bg-slate-200 px-4 py-1.5 rounded-full font-semibold text-gray-700'>Regular Price : {data.price}$</span>
                                            <span className='bg-slate-200 px-4 py-1.5 rounded-full font-semibold text-gray-700'>Status: {data.stock ? 'In Stock' : 'Out of stock'}</span>
                                            <span className='bg-slate-200 px-4 py-1.5 rounded-full font-semibold text-gray-700'>Brand: {data.brand}</span>
                                        </div>

                                        <div className='mt-5'>
                                            <div className='space-y-2'>
                                                <p className='capitalize text-slate-600 text-xl font-semibold'>
                                                    Category : <Link to={`/category/${data.category}`}
                                                    className='underline underline-offset-2 decoration-blue-500 decoration-2 hover:text-blue-500'
                                                    >{data.category}</Link>
                                                </p>
                                                <p className='capitalize text-slate-600 text-xl font-semibold'>
                                                    Brand : {data.brand} 
                                                </p>
                                                <p className='capitalize text-slate-600 text-xl font-semibold'>
                                                    key features : 
                                                    <p className='w-80 text-lg text-slate-700 font-normal'> Description : {data.description}</p>
                                                </p>
                                                <p className='capitalize text-slate-600 text-xl font-semibold space-x-2'>
                                                    <span>Product stock status :</span>
                                                    <span className='text-orange-500'>{data.stock}</span>
                                                    <span className={ data.stock ? 'text-green-600' : 'text-red-600'}>
                                                        {data.stock ? 'In Stock' : 'Out of stock'}
                                                    </span>
                                                </p>
                                                <p className='capitalize text-slate-600 text-xl font-semibold space-x-2'>
                                                    <span>Rating :</span>
                                                    <RatingStar max_star={5} product_rating={data.rating}/>
                                                    <span className='text-yellow-500'>({data.rating})</span>
                                                </p>
                                                <p className='capitalize text-slate-600 text-3xl pt-6 font-semibold space-x-2'>
                                                    <span>Price : $</span>
                                                    <span>{(data.price * ( 1 - data.discountPercentage / 100 )).toFixed(2)}</span>
                                                    <span className='line-through text-xl'>{data.price.toFixed(2)}</span>
                                                    
                                                </p>
                                            </div>

                                            <div className='space-x-4 mt-8'>
                                                <button className='px-6 py-1.5 bg-orange-400 text-white font-semibold rounded-md text-lg'>Add Cart</button>
                                                <span className='text-xl font-semibold text-gray-400'>or</span>
                                                <button className='px-6 py-1.5 bg-blue-600 text-white font-semibold rounded-md text-lg'>Buy Now</button>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            
        </>
    );
};

export default ProductPage;