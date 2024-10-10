// src/Pages/Userpage.js
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import DashboardMainContent from '../DashboardMainContent';

import TopUsers from '../TopUsers'; // Import TopUsers if needed
import LatestLeads from '../LatestLeads'; // Import LatestLeads if needed
import UserTable from '../UserPage/UserTable'; // Import UserTable
import FilterBar from '../UserPage/FilterBar'; // Import the new FilterBar component
import 'bootstrap/dist/css/bootstrap.min.css';

const Userpage = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle between dark and light theme
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
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />

        {/* Main Content without gaps on Filter Bar */}
        <div>
          {/* Filter Bar below Navbar without any padding */}
          <FilterBar /> {/* No padding here */}

          {/* Main Dashboard Content */}
          <div className="px-3"> {/* Added horizontal padding here only */}
            {/* Optional: Statistics and Top Users section */}
            <div className="row">
              <div className="col-md-6">
                {/* Uncomment if you want to display statistics */}
                {/* <Statistics /> */}
              </div>
              <div className="col-md-6">
                {/* Uncomment if you want to display top users */}
                {/* <TopUsers /> */}
              </div>
            </div>

            {/* UserTable section */}
            <div className="row mt-1">
              <div className="col-12">
                {/* White background with rounded corners and shadow effect */}
                <div className={`p-3 ${darkMode ? 'bg-dark text-white' : 'bg-white'} shadow rounded`}>
                  <UserTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userpage;
