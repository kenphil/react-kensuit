/*
* Author: fengkun
* Create Time: 2020-03-2020/3/14 01:13:39
* */
import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {message} from 'antd'
// import NotFound from './notFound'

const beforeEachRoute = ({path, children}) => {
  const auth = true

  if (!auth) {
    message.info('登录状态失效，请重新登录')
  }

  return (
    <Route {...path}>
      {
        auth ? children : <Redirect to='/login'/>
      }
    </Route>
  )
}

export default beforeEachRoute