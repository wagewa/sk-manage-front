import React from 'react'
import {HashRouter as Router, Link, Route,Switch} from 'react-router-dom'
import {render} from "react-dom"
import createBrowserHistory from "history/createBrowserHistory"
import {routes, RouteWithSubRoutes} from "./routers";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/index'

let store = createStore(reducer);
const hashHistory = createBrowserHistory();

const RouteConfigExample = () => (
    <Router>
        <div style={{width:'100%',height:'100%'}}>
            {routes.map((route:any, i:any) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </div>
    </Router>
)
render(
    <Provider store={store}><RouteConfigExample/></Provider>, document.getElementById("root"));
