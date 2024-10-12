// src/Components/ServiceBar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ImportServiceBar = () => {
  return (
    <div className="bg-white p-3 mb-4 shadow-sm rounded">
      <div className="d-flex justify-content-between align-items-center">
        {/* Left-aligned text */}
        <span className="fw-bold">Select category to import</span>

        {/* Right-aligned content */}
        <div className="d-flex align-items-center">
          {/* Total services found */}
          <span className="text-success me-3">Total Services Found: 797</span>
          
          {/* Bulk Import button */}
          <button className="btn btn-outline-primary">BULK IMPORT SERVICE</button>
        </div>
      </div>
    </div>
  );
};

export default ImportServiceBar;
