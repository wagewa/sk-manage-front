import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Form} from 'antd';
import '../../style/ceshi.css'
import LoginForm from "./loginForm";
import userActions from "../actions/userAction";
import {connect} from 'react-redux'
import {Button} from 'antd'
import {bindActionCreators} from 'redux'
import {Hello} from "../components/Hello";

class Login extends Component<any, any> {

    render() {
        const LoginForms = Form.create()(LoginForm);
        return <div className="loginContainer">
            <LoginForms/>
            {/*登陆 <Link to="/news">跳转</Link>*/}
            {/*<Button onClick={this.handleClick.bind(this)}>修改</Button>*/}
            {/*{this.props.loginReducer.name}*/}
            {/*<Hello compiler="aaaaaa" framework="fffffffff"/>*/}
        </div>;
    }

    componentDidMount() {
        this.props.userActions.login({name: 'ffff'})
    }

    handleClick(e:any) {
        e.preventDefault();
        this.props.userActions.login({
            name: '孙坤'
        });
        console.log(sessionStorage.getItem('userName'))
    }
}


function mapStateToProps(state: any) {
    return {
        loginReducer: state.loginReducer
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

