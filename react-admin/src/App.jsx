import "./App.css";
// import Footer from "./Components/Footer";
import Header from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userpage from "./Components/UserPage/Userpage";
import Order from "./Components/OrderPage/Order";
import Service from "./Components/ServicePage/Service";
// import DashboardLayout from "./Components/DashboardLayout";

function App() {
  return (
    <>


    {/* <Dashboard/> */}
    {/* <Userpage/> */}

      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/userpage" element={<Userpage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/service" element={<Service />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
