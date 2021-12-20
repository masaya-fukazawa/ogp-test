import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from "./App";
import Test from "./Test";

export const Router = () =>
  <BrowserRouter>
    <Routes>
      <Route element={<App/>} path={`/`}/>
      <Route element={<Test/>} path={`test`}/>
    </Routes>
  </BrowserRouter>