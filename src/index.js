import React from 'react';
import {render} from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Router} from "./Router";
import {Outlet} from "react-router-dom";

const rootElement = document.getElementById("root");
render(<Router><Outlet></Outlet></Router>, rootElement);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
