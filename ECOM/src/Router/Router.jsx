import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import OpenRoutes from '../OpenRoutes'
import Product from '../openRoutes/Product'
import ProductById from '../openRoutes/ProductById'
import Cart from '../openRoutes/Cart'
import Wishlist from '../openRoutes/Wishlist'
import ProtectedRoutes from '../ProtectedRoutes'
import Orders from '../customer/Orders'
import SellerProducts from "../seller/SellerProducts";
import SellerOrders from "../seller/SellerOrders";

import UnprotectedRoute from '../UnprotectedRoute'
import AdminProducts from "../Admin/AdminProducts";
import AdminUser from "../Admin/AdminUser";
import AdminOrder from "../Admin/AdminOrder";

import Dashboard from '../sellerAdmin/Dashboard'
import Profile from '../sellerAdminCustomer/Profile'
import Login from '../unprotectedRoutes/Login'
import Signup from '../unprotectedRoutes/Signup'
import Home from '../openRoutes/Home'
import About from '../openRoutes/About'

const Router = createBrowserRouter([
    {
        path : "/home",
        element : <OpenRoutes />,
        children : [
            {
                path : "",
                element : <Home />
            },
            {
                    path:"*",
                    element:<Navigate to ="home" replace />
            },
            {
                path : "products",
                element : <Product />
            },
            {
                path  : "productbyid",
                element : <ProductById />
            },
            {
                path : "cart",
                element : <Cart />
            },
            {
                path : "wishlist",
                element : <Wishlist />
            },
            {
                path : "about",
                element : <About />
            }
        ]
    },
    {
        path : "/customer",
        element : <ProtectedRoutes allowedRole={["CUSTOMER"]} />,
        children : [
            {
                path : "orders",
                element : <Orders />
            }
        ]
    },
    {
        path : "/seller",
        element : <ProtectedRoutes allowedRole={["SELLER"]} />,
        children : [
         {
  path: "sellerproduct",
  element: <SellerProducts />  
},
{
  path: "sellerorder",
  element: <SellerOrders /> 
},
        ]
    },
    {
        path : "/Admin",
        element : <ProtectedRoutes allowedRole={["ADMIN"]} />,
        children : [
            {
                path : "adminproduct",
                element : <AdminProducts />
            },
            {
                path : "adminuser",
                element : <AdminUser />
            },
            {
                path : "adminorder",
                element : <AdminOrder />
            }
        ]
    },
    {
        path : "/selleradmin",
        element :  <ProtectedRoutes allowedRole={["SELLER" , "ADMIN"]} />,
        children : [
            {
                path : "dashboard",
                element : <Dashboard />
            }
        ]
    },
    {
        path :  "/selleradmincustomer",
        element : <ProtectedRoutes allowedRole={["SELLER" , "ADMIN" , "CUSTOMER"]} />,
        children : [
            {
                path : "profile",
                element : <Profile />
            }
        ]
    },
    {
        path : "/auth",
        element  : <UnprotectedRoute />,
        children : [
            {
                path : "login",
                element : <Login />
            },
            {
                path : "signup",
                element : <Signup />
            }
        ]
    },
    {
  path: "*",
  element: <Navigate to="/home" replace />
}

])

export default Router

