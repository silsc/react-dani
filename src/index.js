import React, { Suspense, useEffect } from 'react';
import {createRoot} from 'react-dom/client';
import { Routes ,Route, BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import Policy from './Components/Policy/Policy';
import Campaign1 from './Components/Campaign1/Campaign1';
import Campaign2 from './Components/Campaign2/Campaign2';
import ReactGA from 'react-ga';

// import reportWebVitals from './reportWebVitals';
import './i18n';
import "../src/index.css";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

ReactGA.initialize(`${process.env.REACT_APP_GA_KEY}`);
ReactGA.pageview(window.location.pathname + window.location.search);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<App/>}/>
          <Route path="/policy" element={<Policy/>}/>
          <Route path="/guia-bateria" element={<Campaign1/>}/>
          <Route path="/guia-mezcla" element={<Campaign2/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
