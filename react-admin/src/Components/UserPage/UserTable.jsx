// import React, { useState } from 'react';
// import { Table, Form, Pagination, Button } from 'react-bootstrap';

// const UserTable = () => {
//   // Dummy data for the table
//   const usersData = Array.from({ length: 10 }, (_, index) => ({
//     name: 'Nancy Elliot',
//     username: 'Nancy_Elliot',
//     email: 'Nancy@techiesgateway.com',
//     balance: '₹678k',
//     spend: '₹678k',
//     created: '2023-04-05, 00:05PM',
//     lastAuto: '2023-04-05, 00:05PM',
//     status: 'Set custom discount',
//   }));

//   const [entriesPerPage, setEntriesPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);

//   // Pagination logic (assumes only 1 page of 10 entries)
//   const totalPages = Math.ceil(usersData.length / entriesPerPage);

//   const handleEntriesChange = (e) => {
//     setEntriesPerPage(Number(e.target.value));
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="container mt-4">
//       <div className="d-flex justify-content-between mb-3">
//         <div>
//           <Form.Select onChange={handleEntriesChange} style={{ width: '80px' }}>
//             <option value="10">10</option>
//             <option value="25">25</option>
//             <option value="50">50</option>
//           </Form.Select>
//         </div>
//         <div>
//           <Form.Control type="text" placeholder="Search" />
//         </div>
//       </div>

//       <Table hover responsive>
//         <thead>
//           <tr>
//             <th style={{ backgroundColor: '#3D55CB26' }}>User</th>
//             <th style={{ backgroundColor: '#3D55CB26' }}>Username</th>
//             <th style={{ backgroundColor: '#3D55CB26' }}>Email</th>
//             <th style={{ backgroundColor: '#3D55CB26' }}>Balance</th>
//             <th style={{ backgroundColor: '#3D55CB26' }}>Spend</th>
//             <th style={{ backgroundColor: '#3D55CB26' }}>Created</th>
//             <th style={{ backgroundColor: '#3D55CB26' }}>Last Auto</th>
//             <th style={{ backgroundColor: '#3D55CB26' }}>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {usersData.map((user, index) => (
//             <tr key={index}>
//               <td>{user.name}</td>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>{user.balance}</td>
//               <td>{user.spend}</td>
//               <td>{user.created}</td>
//               <td>{user.lastAuto}</td>
//               <td>
//                 <Button variant="success" size="sm">
//                   {user.status}
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Pagination */}
//       <div className="d-flex justify-content-between align-items-center">
//         <p>
//           Showing {currentPage} to {entriesPerPage} of {usersData.length} entries
//         </p>
//         <Pagination>
//           <Pagination.Prev
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//           />
//           <Pagination.Item active>{currentPage}</Pagination.Item>
//           <Pagination.Next
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//           />
//         </Pagination>
//       </div>
//     </div>
//   );
// };

// export default UserTable;


import React, { useState } from 'react';
import { Table, Form, Pagination, Dropdown } from 'react-bootstrap';
import { BsThreeDots } from 'react-icons/bs'; // Import the 3 horizontal dots icon

const UserTable = () => {
  // Dummy data for the table
  const usersData = Array.from({ length: 10 }, (_, index) => ({
    name: 'Nancy Elliot',
    username: 'Nancy_Elliot',
    email: 'Nancy@techiesgateway.com',
    balance: '₹678k',
    spend: '₹678k',
    created: '2023-04-05, 00:05PM',
    lastAuto: '2023-04-05, 00:05PM',
    status: 'Set custom discount',
  }));

  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic (assumes only 1 page of 10 entries)
  const totalPages = Math.ceil(usersData.length / entriesPerPage);

  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const CustomToggle = React.forwardRef(({ onClick }, ref) => (
    <button
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="p-2 bg-light border rounded-circle"
      style={{
        borderRadius: '50%',
        border: '1px solid #ddd',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <BsThreeDots />
    </button>
  ));

  return (
    <div className="container mt-4">
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
          <tr>
            <th style={{ backgroundColor: '#3D55CB26' }}>User</th>
            <th style={{ backgroundColor: '#3D55CB26' }}>Username</th>
            <th style={{ backgroundColor: '#3D55CB26' }}>Email</th>
            <th style={{ backgroundColor: '#3D55CB26' }}>Balance</th>
            <th style={{ backgroundColor: '#3D55CB26' }}>Spend</th>
            <th style={{ backgroundColor: '#3D55CB26' }}>Created</th>
            <th style={{ backgroundColor: '#3D55CB26' }}>Last Auto</th>
            <th style={{ backgroundColor: '#3D55CB26' }}>Status</th>
            <th style={{ backgroundColor: '#3D55CB26' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.balance}</td>
              <td>{user.spend}</td>
              <td>{user.created}</td>
              <td>{user.lastAuto}</td>
              <td>
                <button className="btn btn-success btn-sm">{user.status}</button>
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">View</Dropdown.Item>
                    <Dropdown.Item href="#">Edit</Dropdown.Item>
                    <Dropdown.Item href="#">Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
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

export default UserTable;
