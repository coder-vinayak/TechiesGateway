import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Component/pages/Home";
import Login from "./Component/pages/Login";
import Service from "./Component/pages/Service";
import Api from "./Component/pages/API";
import Terms from "./Component/pages/Terms";
import SignUp from "./Component/pages/SignUp";
import ErrorPage from "./Component/pages/ErrorPage";
import Navbar from "./Component/Common/Navbar";
import Footer from "./Component/Common/Footer";
import Forgotpass from "./Component/pages/Forgotpass";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service" element={<Service />} />
        <Route path="/api" element={<Api />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes> */}
      <Forgotpass/>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
