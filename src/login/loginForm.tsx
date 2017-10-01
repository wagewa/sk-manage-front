import React, {Component} from 'react'
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import '../../style/ceshi.css'

const FormItem = Form.Item;

class LoginForm extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            console.log("表单值" + values['userName']);
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="LoginForm">
                <Form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                   placeholder="Password"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a>register now1!</a>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default LoginForm;