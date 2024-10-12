import React from 'react';
import {
  FaUser,
  FaShoppingCart,
  FaClipboardList,
  FaChartBar,
  FaMoneyBill,
  FaTicketAlt,
  FaChartPie,
  FaFileAlt,
  FaUsers,
  FaCog,
  FaQuestionCircle,
} from 'react-icons/fa';

const Sidebar = ({ darkMode }) => {
  return (
    <div
      className={`d-flex flex-column vh-100 p-2`}
      style={{
        width: '280px', // Increase the sidebar width here
        backgroundColor: darkMode ? '#343a40' : '#ffffff', // Sidebar background color
      }}
    >
      {/* Logo Section */}
      <div className="mb-3">
        <h2 className={`font-weight-bold ${darkMode ? 'text-white' : 'text-dark'}`}>
          SMM <span className="text-primary">Panel</span>
        </h2>
      </div>

      {/* Navigation Items */}
      <ul className="nav flex-column">
        <li className="nav-item">
          <a href="#" className={`nav-link d-flex align-items-center ${darkMode ? 'text-white' : 'text-dark'}`}>
            <FaChartBar className="me-2" /> Dashboards
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className={`nav-link d-flex align-items-center ${darkMode ? 'text-white' : 'text-dark'}`}>
            <FaUser className="me-2" /> Users
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className={`nav-link d-flex align-items-center ${darkMode ? 'text-white' : 'text-dark'}`}>
            <FaClipboardList className="me-2" /> Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className={`nav-link d-flex align-items-center ${darkMode ? 'text-white' : 'text-dark'}`}>
            <FaShoppingCart className="me-2" /> Orders
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className={`nav-link d-flex align-items-center ${darkMode ? 'text-white' : 'text-dark'}`}>
            <FaMoneyBill className="me-2" /> Payment
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className={`nav-link d-flex align-items-center ${darkMode ? 'text-white' : 'text-dark'}`}>
            <FaTicketAlt className="me-2" /> Ticket
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className={`nav-link d-flex align-items-center ${darkMode ? 'text-white' : 'text-dark'}`}>
            <FaChartPie className="me-2" /> Activity
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className={`nav-link d-flex align-items-center ${darkMode ? 'text-white' : 'text-dark'}`}>
            <FaFileAlt className="me-2" /> Report
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className={`nav-link d-flex align-items-center ${darkMode ? 'text-white' : 'text-dark'}`}>
            <FaUsers className="me-2" /> Affiliate
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className={`nav-link d-flex align-items-center ${darkMode ? 'text-white' : 'text-dark'}`}>
            <FaCog className="me-2" /> Settings
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className={`nav-link d-flex align-items-center ${darkMode ? 'text-white' : 'text-dark'}`}>
            <FaQuestionCircle className="me-2" /> Help Center
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
