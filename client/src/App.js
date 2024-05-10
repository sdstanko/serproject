import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Main from './pages/Main';
import Add from './pages/Add';
import Project from './pages/Project';

export const MenuContext = createContext(null)

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/portfolio',
        element: <Portfolio />,
    },
    {
        path: '/portfolio/add/:id',
        element: <Add />,
    },
    {
        path: '/portfolio/:id',
        element: <Project />,
    },
]);

function App() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <MenuContext.Provider value={{openMenu, setOpenMenu}}>
            <div className={openMenu ? 'app lock' : 'app'}>
                <RouterProvider router={router} />
            </div>
        </MenuContext.Provider>
    );
}

export default App;
