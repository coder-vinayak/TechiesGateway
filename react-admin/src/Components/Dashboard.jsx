import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import DashboardMainContent from './DashboardMainContent';
import TopUsers from '../Components/TopUsers'; // Import TopUsers
import 'bootstrap/dist/css/bootstrap.min.css';
import PieChart from '../Components/Piechart';
import DashboardTable from './DashboardTable';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle theme 
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`d-flex ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      {/* Sidebar */}
      <Sidebar darkMode={darkMode} />

      {/* Main Content Area */}
      <div className="flex-grow-1">
        {/* Navbar */}
        <Navbar toggleTheme={toggleTheme} />

        {/* Dashboard Main Content */}
        <DashboardMainContent />


        <div className="row ">
          <div className="col-md-6">
            <PieChart/>
          </div>
          <div className="col-md-6">
            <TopUsers />
          </div>
          <div >
            <DashboardTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
