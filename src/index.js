import React, { Suspense, useEffect } from 'react';
import {createRoot} from 'react-dom/client';
import { Routes ,Route, BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import Policy from './Components/Policy/Policy';

// import reportWebVitals from './reportWebVitals';
import './i18n';
import "../src/index.css";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<App/>}/>
          <Route path="/policy" element={<Policy/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
