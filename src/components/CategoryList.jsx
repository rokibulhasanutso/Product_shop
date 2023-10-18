import { useState } from "react";
import useCallAPI from "../customHooks/useCallAPI";
import { productCategoriUrl } from "../api/appAPI";
import { useNavigate, useParams } from "react-router-dom";

const CategoryList = () => {

    const { category_type } = useParams();
    const navigate = useNavigate()
    
    const [ apiData ] = useCallAPI(productCategoriUrl)

    const ChangeCategoryValue = event => {

        console.log('clicked')

        navigate(`${event.target.value !== 'all-category' ? `/category/${event.target.value}` : ''}`)
    }
    console.log(category_type)

    return (
        <div>
            <select
                className="outline-0 text-[18px] text-slate-500 font-semibold capitalize"
                value={category_type}
                onChange={ChangeCategoryValue}
            >
                
                <option value='all-category' >All Categories</option>
                {
                    
                    apiData?.map((categoriItem, index) => {
                        
                        return (
                            <option 
                                key={index}
                                value={categoriItem}
                                className="capitalize px-4"
                            >
                                {categoriItem}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    );
};

export default CategoryList