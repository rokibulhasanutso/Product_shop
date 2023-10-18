
// import { productUrl } from '../api/appAPI';
// import useCallAPI from '../customHooks/useCallAPI';
import Navbar from './../components/global/Navbar';
import Home from './../pages/Home';
import Footer from './../components/global/Footer';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {

    return (
        <div className='h-screen flex flex-col justify-between'>
            <div className='bg-[#f2f4f8] flex-grow flex flex-col justify-between'>
                <Navbar/>
    
                <div className='flex-grow'>
                    <Outlet/>
                </div>
            
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;