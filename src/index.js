import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App3/>
    <App/>
    <App1/>
    <App2/>
  </React.StrictMode>
)