import React from 'react'
import {Link, Route} from 'react-router-dom'
import Login from "./login/login"
import MainLayout from "./home/main";
import {Hello} from "./components/Hello";


const Cart = () => <h3>Cart</h3>



const routes:any = [
    {
        path: '/login',
        component: Login
    },
    {
        path:'/',
        component: MainLayout,
        routes: [
            {
                path: '/hello',
                component: Hello,
            },
            {
                path: '/cart',
                component: Cart
            }
        ]
    }
]

const RouteWithSubRoutes = (route: any) => (
    <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
    )}/>
)

export {routes, RouteWithSubRoutes}