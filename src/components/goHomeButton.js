/*
* Author: fengkun
* Create Time: 2020-03-2020/3/14 00:40:31
* */
import React from 'react'
import {useHistory} from 'react-router-dom'
import {Button} from 'antd'

const GoHomeButton = props => {
  let history = useHistory()
  const goHome = () => history.replace('/')
  return (
    <Button {...props} onClick={goHome}>
      {props.children}
    </Button>
  )
}

export default GoHomeButton
