// import reportWebVitals from './reportWebVitals';
import "./i18n";
import "../src/index.css";

import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import ReactGA from "react-ga";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Campaign from "./Components/Campaign/Campaign";
import Policy from "./Components/Policy/Policy";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

ReactGA.initialize(`${process.env.REACT_APP_GA_KEY}`);
ReactGA.pageview(window.location.pathname + window.location.search);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/guia-bateria" element={<Campaign />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
