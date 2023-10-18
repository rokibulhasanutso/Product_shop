import { createBrowserRouter } from 'react-router-dom';
// import About from '../pages/About';
import MainLayout from '../layouts/MainLayout';
import ProductPage, { loaderProductPageData } from '../pages/ProductPage';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import CartPage from '../pages/CartPage';
import LoginPage from '../pages/auth/LoginPage';
import RegistrationPage from '../pages/auth/RegistrationPage';
import AuthLayouts from '../layouts/auth/AuthLayouts';
import Test1 /* { searchLoader } */ from '../pages/test1';
import Test2 from '../pages/test2';
import SearchPage from '../pages/SearchPage';

const rootRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {   
                path: '', // or index: true
                element: <Home/>
            },
            {
                path: 'category/:category_type',
                element: <Home/>
            },
            {
                path: 'product/:product_id',
                element : <ProductPage/>,
                loader: loaderProductPageData,
                errorElement: <p>Error Element</p>
            },
            {
                path: 'cart',
                element: <CartPage/>
            },
            {
                path: 'order/:order_id',
            },
            {
                path: 'search',
                element: <SearchPage/>
            }
        ],
        errorElement: <ErrorPage/>
    },
    {
        path: '/',
        element: <AuthLayouts/>,
        children: [
            {
                path: 'login',
                element: <LoginPage/>
            },
            {
                path: 'signin',
                element: <RegistrationPage/>
            },
            {
                path: 'test1',
                element: <Test1/>,
                // loader: searchLoader,
            },
            {
                path: 'test2',
                element: <Test2/>,
                // loader: loaderTest2PageData,
                errorElement: <p>Error Element</p>
            },
        ],
    },
    // {
    //     path: 'secondLayout',
    //     element: <secondLayout/>,
    //     children: [
    //         {
    //             // এটা use করতে হবে নাহ
    //             // path: 'User',
    //             // element: <Users/>
    //         },
    //         {
    //             /*
    //                 Try this =>

    //                 আপনি যদি User page কে by default  layout page এর সাথে রাখতে চান 
    //                 তাহলে পথ এর পরিবর্তে index  : true  দিয়ে দিলে layout page Open হওয়ার সাথে 
    //                 users পেজ ও show করবে।
    //             */
    //             index : true,
    //             element: <Users/>,
    //         },
    //         {
    //             /* 
    //                 Try another way =>

    //                 আবার আপনি যদি path কেই রাখতে চান তাহলে আর একটি উপায় আছে 
    //                 সেটি হলো index : true এর পরিবর্তে path দিয়ে 
    //                 একটি ফাঁকা string দিয়ে দিতে পারেন (path : " ") 

    //                 It's like to same way of index true.
    //                 But it's shortcurt way and you may face complex route problems in future.
    //             */
    //             path: '',
    //             element: <Users/>
    //         },
    //         {
    //             path: 'example',
    //             element: <ExamplePage/>,
    //         },
    //         {...}
    //     ],
    // }
])

export default rootRoute;