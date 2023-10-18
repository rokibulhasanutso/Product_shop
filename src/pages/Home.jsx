import { useParams, useSearchParams } from "react-router-dom";
import { productUrl, rootAPIUrl } from "../api/appAPI";
import ProductCard from "../components/card/ProductCard";
import Loading from "../components/global/Loading";
import SideBar from "../components/global/SideBar";
import Pagination from "../components/global/pagination";
import useCallAPI from "../customHooks/useCallAPI";

const Home = () => {

    const perPageItems = 9;
    const itemsSkipped = 0;

    const { category_type, product_name } = useParams()
    const [ prams, setPrams ] = useSearchParams({page: 1})

    console.log(prams.get('page'))
    console.log('my target : ' + (parseInt(prams.get('page')) - 1) * perPageItems)

    const [ 
        apiData,
        isLoading,
        serverError

    ] = useCallAPI (

        `${rootAPIUrl}/products${ 
            category_type ? ('/category/'+ category_type) : ''
            // product_name ? ('/product/'+ product_name) : ''

        }?limit=${
            perPageItems

        }&skip=${
            itemsSkipped + ((parseInt(prams.get('page')) - 1) * perPageItems)
            
        }`
    )

    console.log(category_type, product_name)
    console.log(apiData)

    return (
        <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-8 gap-8">

                <div className="col-span-2">
                    <SideBar/>
                </div>
                
                <div className="col-span-6">
                    { isLoading && <Loading/> }
                    
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
                        {   
                            // if isLoading equals false then get ready apiData 
                            !isLoading && apiData?.products.map(productItem => {
                                return (
                                    <ProductCard 
                                        key={productItem.id} 
                                        productItem={productItem}
                                    />
                                )
                            })
                        }
                    </div>

                    {
                        !isLoading && apiData?.limit !== apiData?.total &&
                        
                        <div className="mt-20 flex justify-center ">
                            <Pagination 
                                totalItems={apiData?.total} 
                                limitItems={apiData?.limit} 
                                skipItems={apiData?.skip} 
                                perPageItems={perPageItems} 
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
