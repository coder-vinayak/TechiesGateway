// import "./App.css";
// import Home from "./Component/pages/Home";
// import Signup from "./Component/pages/Signup";



// function App() {
//   return (
//     <>
//       {/* <Home/> */}
// <Signup/>
//     </>
//   );
// }

// export default App;

// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./Component/pages/Home";
import Signup from "./Component/pages/Signup";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </div>
  );
};

export default App;
