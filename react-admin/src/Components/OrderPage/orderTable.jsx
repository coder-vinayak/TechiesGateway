import React, { useState } from 'react';
import { Table, Form, Pagination, ButtonGroup, Button } from 'react-bootstrap';

const OrderTable = () => {
  // Dummy data for the table
  const usersData = Array.from({ length: 10 }, (_, index) => ({
    id: `#321456`,
    username: 'GreenCute',
    link: 'https://techiesgateway.com/',
    quantity: 67,
    service: 'Google maps reviews | 20 Reviews Package | Text Review only (Read Description) 🔥',
    charge: '₹6k',
    date: '2023-04-05',
  }));

  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('ALL_ORDER'); // State to manage active tab

  // Pagination logic (assumes only 1 page of 10 entries)
  const totalPages = Math.ceil(usersData.length / entriesPerPage);

  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab); // Update active tab
  };

  return (
    <div className="container mt-4">
      {/* Button Group Component for Order Status */}
      <ButtonGroup className="mb-3">
        <Button
          variant={activeTab === 'ALL_ORDER' ? 'primary' : 'outline-primary'}
          onClick={() => handleTabChange('ALL_ORDER')}
        >
          ALL ORDER
        </Button>
        <Button
          variant={activeTab === 'IN_PROGRESS' ? 'primary' : 'outline-primary'}
          onClick={() => handleTabChange('IN_PROGRESS')}
        >
          IN-PROGRESS
        </Button>
        <Button
          variant={activeTab === 'PENDING' ? 'primary' : 'outline-primary'}
          onClick={() => handleTabChange('PENDING')}
        >
          PENDING
        </Button>
        <Button
          variant={activeTab === 'CANCELLED' ? 'primary' : 'outline-primary'}
          onClick={() => handleTabChange('CANCELLED')}
        >
          CANCELLED
        </Button>
        <Button
          variant={activeTab === 'COMPLETED' ? 'primary' : 'outline-primary'}
          onClick={() => handleTabChange('COMPLETED')}
        >
          COMPLETED
        </Button>
      </ButtonGroup>

      <div className="d-flex justify-content-between mb-3">
        <div>
          <Form.Select onChange={handleEntriesChange} style={{ width: '80px' }}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </Form.Select>
        </div>
        <div>
          <Form.Control type="text" placeholder="Search" />
        </div>
      </div>

      <Table hover responsive>
        <thead>
          <tr style={{ backgroundColor: 'rgba(61, 85, 203, 0.15)' }}>
            {/* Applying the #3D55CB with 15% opacity */}
            <th>
              <Form.Check type="checkbox" />
            </th>
            <th>ID</th>
            <th>Username</th>
            <th>Link</th>
            <th>Quantity</th>
            <th>Service</th>
            <th>Charge</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user, index) => (
            <tr key={index}>
              <td>
                <Form.Check type="checkbox" />
              </td>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>
                <a href={user.link} target="_blank" rel="noopener noreferrer">
                  {user.link}
                </a>
              </td>
              <td>{user.quantity}</td>
              <td>{user.service}</td>
              <td>{user.charge}</td>
              <td>{user.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center">
        <p>
          Showing {currentPage} to {entriesPerPage} of {usersData.length} entries
        </p>
        <Pagination>
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          <Pagination.Item active>{currentPage}</Pagination.Item>
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default OrderTable;
