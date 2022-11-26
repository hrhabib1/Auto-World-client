import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import AddRentalCar from "../../Pages/AddRentalCar/AddRentalCar";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/addRentalCar',
                element:<AddRentalCar></AddRentalCar>
            },
        ]
    }
])