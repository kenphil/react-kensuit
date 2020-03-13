/*
* Author: fengkun
* Create Time: 2020-03-2020/3/13 16:23:47
* */
import React from 'react'
import {Layout, Menu} from 'antd'
import {Link, Route, Switch, Redirect} from 'react-router-dom'
import About from "./about/about";
import Home from "./home/home";
import './layout.less'

const {Header} = Layout;

const LayoutComponent = props => {

  return (
    <Layout>
      <Header className="header">
        <div className="logo"/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          style={{lineHeight: '64px'}}
        >
          <Menu.Item key="home"><Link to='/home'>home</Link></Menu.Item>
          <Menu.Item key="about"><Link to='/about'>about</Link></Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/about' component={About}/>
          <Redirect from='/' to='/home'/>
        </Switch>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent
