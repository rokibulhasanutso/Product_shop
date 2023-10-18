import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {

    const [ searchInputValue, setSearchInputValue ] = useState()
    const navigate = useNavigate()

    const handleClickSearch = (event) => {
        event.preventDefault();

        navigate(`/search?q=${searchInputValue}`);
    };

    return (
        <form onSubmit={handleClickSearch}>
            <input
                className="border-s border-slate-300 ps-5 outline-0 w-96" 
                type="text" 
                placeholder="Search"
                onChange={(event) => setSearchInputValue(event.target.value)}
            />

            <button type="submit" className="px-5 py-2.5 text-slate-500 hover:bg-slate-300 hover:text-slate-600">
                <i className="text-inherit ri-search-line" size="18px"></i>
            </button>
        </form>
    );
};

export default Searchbar;