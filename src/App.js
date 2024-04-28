import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailPage, ErrorPage, HomePage } from "./pages/index";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="container container-sm container-md container-lg container-xl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:id" element={<DetailPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
