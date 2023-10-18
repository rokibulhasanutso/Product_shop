import { Link } from "react-router-dom";
import RatingStar from "../global/RatingStar";

const ProductCard = ({productItem}) => {
    return (
        <Link to={`/product/${productItem.id}`}>
            <div 
                className="bg-white hover:shadow-lg shadow-orange-500 border border-gray-300 px-5 py-6 rounded-lg hover:border-gray-500"
            >
                {/* product image or thumbnail */}
                <div className="h-40 overflow-hidden object-center">
                    <img className="w-full h-auto" src={productItem.thumbnail} alt="Product Image" />
                </div>

                {/* product title, category, description */}
                <p className="mt-4 text-2xl font-semibold line-clamp-1 capitalize">{productItem.title}</p>
                <p className="text-[15px] font-medium text-gray-400 capitalize">{productItem.category}</p>
                <p className="mt-4 text-[16px] text-gray-500 line-clamp-2">{productItem.description}</p>

                {/* 
                    Product star rating menagement

                    * First loop is get product rating intiger number
                      then push rating star react element into the array

                    * The second statement will check if the rating number is a fraction

                    * The third statement will check if the array is empty 
                      and if they are empty, they will be filled using for loop

                 */}
                <div className="mt-4 text-xl space-x-1">
                    <RatingStar max_star={5} product_rating={productItem.rating}/>
                </div>

                {/* 
                    Discounted prices are shown from the main price of the product
                    and display product availability or unavailable
                    and display in "In stock" or "Out of stock" message
                */}
                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-end gap-2">
                        <p className="text-2xl font-semibold">
                            {
                                '$ ' + (productItem.price * (1 - productItem.discountPercentage / 100)).toFixed(2)
                            }
                        </p>
                        <p className="text-xl text-gray-500 font-semibold line-through decoration-red-500 decoration-2">
                            { '$' + productItem.price }
                        </p>
                    </div>

                    {/* product stocking message */}
                    <p className="text-green-500 font-semibold">
                        { productItem.stock ? 'In Stock' : 'Out of stock'}
                    </p>
                </div>


                {/* 
                    this card button or events such as add card, 
                    chosen product and watched product 
                */}
                <div className="mt-5 flex flex-wrap justify-between">
                    <button className="px-5 py-1.5 bg-orange-500 hover:bg-orange-400 text-white rounded-md">Add to card</button>
                    
                    <div className="flex flex-wrap gap-2">
                        <button className="px-2.5 py-1 bg-gray-200 hover:bg-red-500 text-gray-500 hover:text-white rounded-md">
                            <i className="ri-heart-3-line"></i>
                        </button>
                        <button className="px-2.5 py-1 bg-gray-200 hover:bg-red-500 text-gray-500 hover:text-white rounded-md">
                            <i className="ri-eye-line"></i>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;