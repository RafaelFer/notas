import React from 'react';
import ptBR from 'antd/es/locale/pt_BR';
import Home from './components/Home'
import { ConfigProvider } from 'antd';

import './App.css';

function App() {
  return (
    <div className="App">
     <ConfigProvider locale={ptBR}>
       <Home></Home>
     </ConfigProvider>
    </div>
  );
}

export default App;
