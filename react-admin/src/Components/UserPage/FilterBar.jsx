import React from 'react';
import { FiFilter } from 'react-icons/fi'; // Using React Icons for filter icon

const FilterBar = () => {
  return (
    <div className="bg-white p-3 mb-4 shadow-sm rounded mx-auto" style={{ maxWidth: '100%' }}>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Users</h5>
        <div className="d-flex">
          {/* Filter Button */}
          <button className="btn btn-outline-secondary me-3">
            <FiFilter />
          </button>
          {/* Add Users Button */}
          <button className="btn btn-outline-primary me-3">+ Add Users</button>
          {/* Export Button */}
          <button className="btn btn-primary">Export</button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
