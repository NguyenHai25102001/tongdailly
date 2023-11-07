import Home from "../views/Home";
import React from "react";
const BuyHouse = React.lazy(() => import('../views/BuyHouse'))
const ScrollVideo = React.lazy(() => import('../views/ScrollVideo'))
const Cart = React.lazy(() => import('../views/Cart'))
const PurchaseHistory = React.lazy(() => import('../views/PurchaseHistory'))
const User = React.lazy(() => import('../views/User'))

const routes = [
    {
        path: '/',
        exact: true,
        name: 'Home',
        element: Home
    },
    {
        path: '/buy-house',
        exact: true,
        name: 'buy-house',
        element: BuyHouse
    },
    {
        path: '/scroll-video',
        exact: true,
        name: 'scroll-video',
        element: ScrollVideo
    },
    {
        path: '/cart',
        exact: true,
        name: 'scroll-video',
        element: Cart
    },
    {
        path: '/purchase-history',
        exact: true,
        name: 'scroll-video',
        element: PurchaseHistory
    }
    ,
    {
        path: '/user',
        exact: true,
        name: 'User',
        element: User
    }
]

export default routes;