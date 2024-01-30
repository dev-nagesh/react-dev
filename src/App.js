import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import AboutClass from "./components/AboutClass";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";

const Grocery = lazy(()=> import('./components/Grocery'));
const AboutClass = lazy(()=> import('./components/AboutClass'));


const AppLayout = () =>{
    const [userName, setUserName] = useState();
    useEffect(()=>{
        const data = {
            name: "Nagesh"
        };
        setUserName(data.name);
    },[])
    return (
        <userContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </userContext.Provider>


        // <div className="app">
        //     <userContext.Provider value={{loggedInUser: userName}}>
        //         <Header />
        //         </userContext.Provider>
        //     <Outlet />
        // </div>

        // <userContext.Provider value={{loggedInUser: userName}}>
        //     <div className="app">
        //         <userContext.Provider value={{loggedInUser: 'Akshay'}}>
        //             <Header />
        //         </userContext.Provider>
        //         <Outlet />
        //     </div>
        // </userContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children:[ 
            {
                path: '/',
                element: <Body />
            },
            // {
            //     path: '/about',
            //     element: <About />
            // },
            {
                path: '/about',
                element: <Suspense fallback={<Shimmer />}><AboutClass /></Suspense>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            },
            {
                path:'/grocery',
                element: <Suspense fallback={ <Shimmer /> }><Grocery /></Suspense>
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);