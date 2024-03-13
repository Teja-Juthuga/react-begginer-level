import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Bootstrap CSS 
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Navbar } from './Components/Navbar/nav';

import { NetflixIndex } from './Components/Netflix/netflix-index';

import LoginComponent from './Components/Login/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NetflixIndex />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
