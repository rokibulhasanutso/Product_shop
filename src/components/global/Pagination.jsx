import { useSearchParams } from "react-router-dom";

const Pagination = ({totalItems, limitItems, skipItems, perPageItems}) => {

    const [ pageParams, setPageParams ] = useSearchParams({page : 1})
    
    console.log(parseInt(pageParams.get('page')), pageParams.get('page'))
    
    const handlePageIncrementClick = () => {
        setPageParams(
            pageParams.get('page') !== 'null' && { 
                ...Object.fromEntries(pageParams),
                page : parseInt(pageParams.get('page')) + 1 
            }
        )
    }
    const handlePageDecrementClick = () => {

        if (skipItems > 0) {
            setPageParams(
                pageParams.get('page') !== 'null' && { 
                    ...Object.fromEntries(pageParams),
                    page : parseInt(pageParams.get('page')) - 1 
                }
            )  
        }
    }

    // console.log( 'T-' + totalItems, 'L-' + limitItems, 'S-' + skipItems )
    console.log(Object.fromEntries(pageParams))

    return (
        <div className="flex items-center space-x-5 font-semibold text-xl">
            <button
                className={
                    `${
                        skipItems <= 0 ? 'pointer-events-none select-none opacity-50' : ''
                    } px-2.5 py-1.5 border border-slate-500 hover:border-blue-500 rounded-full bg-white text-black hover:bg-blue-500 hover:text-white`
                }
                onClick={handlePageDecrementClick}
            >
                <i className="ri-arrow-left-s-line leading-none"></i>
            </button>
            <div className="space-x-1">
                {
                    (() => {
                        const totalPages = Math.ceil(totalItems / perPageItems)
                        const pageNumberElementArray = [];

                        for (let pageNumber = 1; pageNumber <= totalPages ; pageNumber++) {
                            pageNumberElementArray.push(
                                <button
                                    key={pageNumber} 
                                    onClick={() => setPageParams({...Object.fromEntries(pageParams), page: pageNumber})}
                                    // onClick={() => pageParams.set('page', pageNumber)}
                                    className={
                                        `${
                                            pageNumber === parseInt(pageParams.get('page')) 
                                            ? 'bg-blue-500 text-white pointer-events-none select-none' 
                                            : 'hover:bg-blue-500 hover:text-white'

                                        } px-2 py-1.5 rounded-md`
                                    }
                                >
                                    {pageNumber}
                                </button>
                            )
                        }

                        return pageNumberElementArray
                    })()
                }
            </div>
            <button 
                className={
                    `${ 
                        totalItems === (skipItems + limitItems) 
                        ? 'pointer-events-none select-none opacity-50' 
                        : ''
                    } px-2.5 py-1.5 border border-slate-500 hover:border-blue-500 rounded-full bg-white text-black hover:bg-blue-500 hover:text-white`
                }
                onClick={handlePageIncrementClick}
            >
                <i className="ri-arrow-right-s-line leading-none"></i>
            </button>
        </div>
    );
};

export default Pagination;