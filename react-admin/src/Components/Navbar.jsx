// Navbar.js
import React from 'react';
import { FaMoon, FaBars } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const Navbar = ({ toggleTheme, darkMode }) => {  // Add darkMode as prop to handle theme color
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid">
        {/* Hamburger Menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          {/* Right side: Theme toggle, user info */}
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            {/* Theme toggle icon */}
            <li className="nav-item me-3">
              <FaMoon
                className="cursor-pointer"
                style={{ color: darkMode ? 'white' : 'black' }}  // Make sure it switches based on theme
                onClick={toggleTheme}
              />
            </li>

            {/* User info */}
            <li className="nav-item dropdown d-flex align-items-center">
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center"
                  style={{ width: '35px', height: '35px' }}
                >
                  P
                </div>
                <div className="ms-2 text-dark">
                  <p className="mb-0">Prem kr</p>
                  <p className="mb-0 small text-muted">Admin</p>
                </div>
              </div>
              {/* Dropdown icon */}
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FiChevronDown />
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
