// src/Components/ServiceBar.js
import React from 'react';

const ServiceBar = () => {
  return (
    <div className="bg-white p-3 mb-4 shadow-sm rounded">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Service</h5>
        <div className="d-flex">
          {/* Add Service Button */}
          <button className="btn btn-outline-primary me-3">+ Add Service</button>
          {/* Add Servicr Button */}
          <button className="btn btn-outline-primary me-3">+ Add Servicr</button>
          {/* Action Button */}
          <button className="btn btn-outline-secondary me-3">Action</button>
          {/* Import Service Button */}
          <button className="btn btn-primary">Import Service</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBar;
