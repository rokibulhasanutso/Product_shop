import { RouterProvider } from 'react-router-dom';
import rootRoute from './routes/RootRoute';

const App = () => {
    return (
        <>
         <RouterProvider router={rootRoute}/> 
        </>
    );
};

export default App;