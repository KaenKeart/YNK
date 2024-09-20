import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // เพิ่ม import นี้
import Login from "./Login";
import Home3 from "./Home3";
import Page01 from "./Page01";
import Page02 from "./Page02";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/Home3" element={<Home3 />} />
      <Route path="/page01" element={<Page01 />} />
      <Route path="/page02" element={<Page02 />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
