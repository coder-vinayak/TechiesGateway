
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./Component/pages/Home";
import Signup from "./Component/pages/Signup";

const App = () => {
  return (
    <div>
      <Home/>
      <Signup/>
    </div>
  );
};

export default App;
