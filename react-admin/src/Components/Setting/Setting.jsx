import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import SettingServiceBar from './SettingServiceBar';
import SettingSubSidebar from './SettingSubSidebar';
// import NewComponent from '../NewComponent'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import SettingMainComponent from './SettingMainComponent';

const Setting = () => {
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
        <div>
          <SettingServiceBar />
          {/* Main Dashboard Content with Flexbox for layout */}
          <div className="d-flex px-0"> 
            <SettingSubSidebar />
            <div className="px-5">
               <SettingMainComponent/>
              </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
