import React, {Component} from 'react'
import {Layout, Menu, Icon} from 'antd';
import {Route} from 'react-router-dom'
import Top from "../common/top";
import Footer from "../common/footer";
import {RouteWithSubRoutes} from "../routers";
import "./main.css";

const {Header, Sider, Content} = Layout;

class MainLayout11 extends Component<any, any> {

    constructor(props: any) {
        super(props)

    }

    render() {
        return (
            <div>
                <Top/>
                {this.props.routes.map((route: any, i: any) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
                <Footer/>
            </div>
        );
    }
}

class MainLayout extends Component<any, any> {

    constructor(props: any) {
        super(props)

    }

    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user"/>
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera"/>
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload"/>
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
                        {this.props.routes.map((route: any, i: any) => (
                            <RouteWithSubRoutes key={i} {...route}/>
                        ))}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default MainLayout;