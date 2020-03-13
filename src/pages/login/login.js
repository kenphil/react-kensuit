/*
* Author: fengkun
* Create Time: 2020-03-2020/3/13 16:01:48
* */
import React from 'react'
import {Form, Input, Button, Checkbox} from 'antd'

const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16},
};
const tailLayout = {
  wrapperCol: {offset: 8, span: 16},
}

const Login = props => {
  // const [form] = Form.useForm()

  const onFinish = values => {
    console.log('Success:', values);

  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  }

  /*const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };*/

  return (
    <div>
      <Form
        {...layout}
        initialValues={{remember: true}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="登录名"
          name="username"
          rules={[{required: true, message: '登录名必填!'}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{required: true, message: '密码必填!'}]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
