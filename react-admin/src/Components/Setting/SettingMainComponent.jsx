import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SettingsMainComponent = () => {
  const [formData, setFormData] = useState({
    maintenanceMode: '',
    defaultTimezone: '',
    websiteName: '',
    ratesRounding: '',
    serviceNameFormat: '',
    currencyFormat: '',
    newOrderSearchField: '',
    favoriteServices: '',
    couponSystem: '',
    ticketSystem: '',
    maxOpenTickets: '',
    headerCodes: '',
    footerCodes: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="p-4 bg-white shadow-sm rounded" onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control placeholder-style"
            placeholder="Maintenance mode"
            name="maintenanceMode"
            value={formData.maintenanceMode}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control placeholder-style"
            placeholder="Default Timezone"
            name="defaultTimezone"
            value={formData.defaultTimezone}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control placeholder-style"
            placeholder="Website name"
            name="websiteName"
            value={formData.websiteName}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control placeholder-style"
            placeholder="Rates Rounding"
            name="ratesRounding"
            value={formData.ratesRounding}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control placeholder-style"
            placeholder="Service Name Format"
            name="serviceNameFormat"
            value={formData.serviceNameFormat}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control placeholder-style"
            placeholder="Currency Format"
            name="currencyFormat"
            value={formData.currencyFormat}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control placeholder-style"
            placeholder="New order search field"
            name="newOrderSearchField"
            value={formData.newOrderSearchField}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control placeholder-style"
            placeholder="Favorite services"
            name="favoriteServices"
            value={formData.favoriteServices}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control placeholder-style"
            placeholder="Coupon System"
            name="couponSystem"
            value={formData.couponSystem}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control placeholder-style"
            placeholder="Maximum Open Tickets"
            name="maxOpenTickets"
            value={formData.maxOpenTickets}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control placeholder-style"
          placeholder="Ticket System"
          name="ticketSystem"
          value={formData.ticketSystem}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <textarea
          className="form-control placeholder-style"
          placeholder="Header codes"
          name="headerCodes"
          rows="3"
          value={formData.headerCodes}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="mb-3">
        <textarea
          className="form-control placeholder-style"
          placeholder="Footer codes"
          name="footerCodes"
          rows="3"
          value={formData.footerCodes}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">Update Setting</button>
      </div>
    </form>
  );
};

export default SettingsMainComponent;
