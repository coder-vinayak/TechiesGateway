import "./App.css";
// import Footer from "./Components/Footer";
import Header from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userpage from "./Components/UserPage/Userpage";
import Order from "./Components/OrderPage/Order";
import Service from "./Components/ServicePage/Service";
import ServiceImport from './Components/ServicePage/ImportService/ServiceImport'
import Setting from "./Components/Setting/Setting";

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
          <Route exact path="/service/import-service" element={<ServiceImport />} />
          <Route exact path="/setting" element={<Setting />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
