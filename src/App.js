import React from 'react';
import {ConfigProvider} from 'antd'
import Routes from './router/routes'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import './App.css';

const App = () => {
  return (
    <ConfigProvider locale={zh_CN}>
      <Routes/>
    </ConfigProvider>
  );
}

export default App;
