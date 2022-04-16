import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import "./index.css";
// import {App} from "components/App";

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App />
//   </BrowserRouter>
//   </React.StrictMode>,  
//   document.getElementById("root")
// );