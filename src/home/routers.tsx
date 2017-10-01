import React, {Component} from 'react'
import {Layout} from 'antd'
import {Route} from "react-router";
import Index from "./index";
import {Hello} from "../components/Hello";

const {Content} = Layout;
class Routers extends Component {

    render() {
        return (
            <Content>
                <Route path="/index" component={Index}/>
                <Route path="/hello" component={Hello}></Route>
            </Content>
        );
    }
}
export default Routers;