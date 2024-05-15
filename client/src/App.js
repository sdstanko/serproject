import { createContext, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Main from './pages/Main';
import Add from './pages/Add';
import Project from './pages/Project';
import Login from './pages/Login';
import userAPI from './services/userAPI';

export const MenuContext = createContext(null);
export const AuthContext = createContext(null);

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
    {
        path: '/login',
        element: <Login />,
    },
]);

function App() {
    const [openMenu, setOpenMenu] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    const initCheckAuth = async () => {
        const token = localStorage.getItem('token');
        const response = await userAPI.check(token);
        if (response?.token) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    };

    useEffect(() => {
        initCheckAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
                <div className={openMenu ? 'app lock' : 'app'}>
                    <RouterProvider router={router} />
                </div>
            </MenuContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
