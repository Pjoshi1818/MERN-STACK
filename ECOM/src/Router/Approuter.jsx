import React from 'react'
import OpenRoutes from '../OpenRoutes'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import OpenRoutes from '../OpenRoutes'
import Product from '../openRoutes/Product'
import ProductById from '../openRoutes/ProductById'
import Cart from '../openRoutes/Cart'
import Wishlist from '../openRoutes/Wishlist'
import ProtectedRoutes from '../ProtectedRoutes'
import Orders from '../customer/Orders'
import SellerProduct from '../seller/SellerProduct'
import SellerOrder from '../seller/SellerOrder'
import UnprotectedRoute from '../UnprotectedRoute'
import AdminProduct from '../admin/AdminProduct'
import AdminUser from '../admin/AdminUser'
import AdminOrder from '../admin/AdminOrder'
import Dashboard from '../sellerAdmin/Dashboard'
import Profile from '../sellerAdminCustomer/Profile'
import Login from '../unprotectedRoutes/Login'
import Signup from '../unprotectedRoutes/Signup'
import Home from '../openRoutes/Home'
import About from '../openRoutes/About'

const Approuter = createBrowserRouter([
    {
        path : "/home",
        element : <OpenRoutes />,
          children : [
            {
                path : "",
                element :<Home />
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
    }
])

export default Approuter