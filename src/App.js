import React, { useState } from "react";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import * as yup from "yup";
import { Home } from "./pages/home";
import { Order } from "./pages/order";






const App = () => {

  return (
    <>
      <h1>Lambda Eats</h1>
      {/* <BrowserRouter> */}
          <nav>
            <Link to="/"> Home </Link> &nbsp;
            <Link to="pizza">Order Here</Link>&nbsp;
          </nav>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pizza" element={<Order />} />
        </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};
export default App;
