import React, {Component}  from "react";
import {Button, DatePicker,Alert,Table} from 'antd'
export interface HelloProps { compiler: string; framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.

function onChange(date:any, dateString:string) {
    // console.log(date, dateString);
}
export class Ceshi extends Component{
    render(){
        return <a href="https://www.baidu.com/">百度</a>
    }
}
export class Hello extends Component<HelloProps, undefined> {

    render() {
        return <div>
            <Ceshi />
            <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
            <Button type="primary">Primary</Button><DatePicker onChange={onChange}/>
            <Alert message="Success Textff" type="success" />
        </div>;
    }
}
