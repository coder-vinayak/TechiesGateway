import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import FilterBar from '../UserPage/FilterBar'; // Import the new FilterBar component
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderTable from './orderTable';

const Order = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle between dark and light theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`d-flex ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'} vh-100`}>
      {/* Sidebar */}
      <Sidebar darkMode={darkMode} />

      {/* Main Content Area */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Navbar */}
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />

        {/* Main Content without gaps on Filter Bar */}
        <div className="flex-grow-1">
          {/* Filter Bar below Navbar without any padding */}
          <FilterBar />

          {/* Main Dashboard Content */}
          <div className="px-3"> {/* Added horizontal padding here only */}
            {/* UserTable section */}
            <div className="row mt-1">
              <div className="col-12">
                {/* White background with rounded corners and shadow effect */}
                <div className={`p-3 ${darkMode ? 'bg-dark text-white' : 'bg-white'} shadow rounded`}>
                  <OrderTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
