/*
* Author: fengkun
* Create Time: 2020-03-2020/3/13 16:34:55
* */
import React from 'react'
import {Layout, Menu} from 'antd'
import {DesktopOutlined, PieChartOutlined} from '@ant-design/icons'
import {Link, Route, Switch, Redirect} from 'react-router-dom'
import NotFound from "../../components/notFound";

const {Content, Sider} = Layout;

const Home = props => {
  return (
    <Layout>
      <Sider width={200}>
        <Menu theme="dark" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <PieChartOutlined />
            <Link to='/home/1'>Option 1</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <DesktopOutlined />
            <Link to='/home/2'>Option 2</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Switch>
          <Route path='/home/1' exact render={() => (<div>home/1</div>)}/>
          <Route path='/home/2' render={() => (<div>home/2</div>)}/>
          <Route path='/home/*'>
            <NotFound/>
          </Route>
          <Route path='/home'>
            <Redirect to='/home/1'/>
          </Route>
        </Switch>
      </Content>
    </Layout>
  )
}

export default Home
