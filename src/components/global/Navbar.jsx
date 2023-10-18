import { Link } from "react-router-dom";
import CategoryList from './../CategoryList';
import Searchbar from './Searchbar';

const Navbar = () => {

    return (
        <nav className="border-b mb-10 bg-white sticky top-0">
            <div className="container max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5">
                    <div>
                        {/* logo image */}
                        <h2 className="text-slate-500 text-5xl font-semibold">logo</h2>
                    </div>

                    <div className="flex justify-center items-center text-lg border border-slate-300 rounded-full overflow-hidden">
                        <div className="flex justify-center items-center">
                            <div className="px-5">
                                <CategoryList/>
                            </div>

                            <div className="">
                                <Searchbar/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex gap-4">
                        <Link to="login" role="button" className="text-slate-500 text-xl font-medium border rounded-md px-4 py-1 -mt-0.5 pb-1.5 bg-slate-100 hover:bg-white hover:border-indigo-500 hover:text-indigo-500 transition">Login</Link>
                        <Link to="registration" role="button" className="text-slate-500 text-xl font-medium border rounded-md px-4 py-1 -mt-0.5 pb-1.5 bg-slate-100 hover:bg-white hover:border-indigo-500 hover:text-indigo-500 transition">Sign In</Link>
                    </div>
                </div>
            </div>
        </nav>
    
    );
};

export default Navbar;