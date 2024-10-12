import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assuming you're using Bootstrap for styling
import '../ServicePage/ServiceBar.css'; // Importing custom CSS for blur effect
import { useNavigate } from 'react-router-dom';

const SettingServiceBar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setShowModal(!showModal);
    // Add blur effect to body when modal is open
    if (!showModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  };
  
  const handleNextClick = () => {
    navigate('/service/import-service');
  };

  return (
    <div>
      {/* Main content */}
      <div className={`bg-white p-3 mb-4 shadow-sm rounded ${showModal ? 'blurred-background' : ''}`}>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Setting</h5>

          <div className="d-flex align-items-center">
            {/* Search Bar */}
            <input
              type="text"
              className="form-control me-3"
              placeholder="Search"
              style={{ width: '250px' }}
            />

            {/* Add New Provider Button */}
            <button className="btn btn-outline-primary">+ Add New Provider</button>
          </div>
        </div>
      </div>

      {/* Import Service Modal */}
      {showModal && (
        <>
          {/* Background overlay */}
          <div className="modal-overlay"></div>

          {/* Modal content */}
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Import Service</h5>
                  <button type="button" className="btn-close" onClick={toggleModal}></button>
                </div>
                <div className="modal-body">
                  <p>
                    Add a new provider in the SMM admin panel to manage and integrate social media marketing services efficiently and easily.
                  </p>
                  <div className="mb-3">
                    <label className="form-label">Select API Key</label>
                    <select className="form-select">
                      <option value="">Select an option</option>
                      {/* Add options dynamically if needed */}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Profit Percentage</label>
                    <input type="number" className="form-control" placeholder="Enter profit percentage" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={toggleModal}>Cancel</button>
                  <button type="button" className="btn btn-primary" onClick={handleNextClick}>Next</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SettingServiceBar;
