import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider } from "@material-ui/core/styles";

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import App from './App';
import Clari from './Clari';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/clari' element={<Clari />} />
        </Routes>
      </BrowserRouter>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
