import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Header/Shop/Shop';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import CartProductsLoader from './Loaders/CartProductsLoader';
import CheckOut from './components/CheckOut/CheckOut';
import SingUp from './components/singUp/SingUp';

const router = createBrowserRouter([

{
  path: '/',
  element: <Home />,
  children:[

    {
      path:'/',
      element: <Shop />
    },
    {
      path: 'order',
      element: <Orders />,
      loader: CartProductsLoader
    },
    {
      path:'inventory',
      element: <Inventory />
    },
    {
      path: '/checkout',
      element: <CheckOut />
    },
    {
      path: '/login',
      element:<Login />
    },
    {
      path: '/singUp',
      element:<SingUp />
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>,
)
