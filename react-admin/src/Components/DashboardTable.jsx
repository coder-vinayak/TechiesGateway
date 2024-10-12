// import React, { useState } from 'react';

// const DashboardTable = () => {
//   const data = Array(10).fill({
//     id: '#321456',
//     username: 'GreenCute',
//     link: 'https://techiesgateway.com/',
//     quantity: 67,
//     service: 'Google maps reviews | 20 Reviews Package | Text Review only (Read Description) 🔥',
//     charge: '₹6k',
//     date: '2023-01-02, 10:36AM',
//     status: 'Completed',
//     start: 567,
//     remain: 0,
//   });

//   const [entries] = useState(10); // Number of entries to show per page
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = entries;

//   // Pagination logic
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <h2 className="text-lg font-semibold mb-4">Recent Order</h2>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="border px-4 py-2">
//               <input type="checkbox" />
//             </th>
//             <th className="border px-4 py-2">ID</th>
//             <th className="border px-4 py-2">USERNAME</th>
//             <th className="border px-4 py-2">LINK</th>
//             <th className="border px-4 py-2">QUANTITY</th>
//             <th className="border px-4 py-2">SERVICE</th>
//             <th className="border px-4 py-2">CHARGE</th>
//             <th className="border px-4 py-2">DATE</th>
//             <th className="border px-4 py-2">STATUS</th>
//             <th className="border px-4 py-2">START</th>
//             <th className="border px-4 py-2">REMAIN</th>
//             <th className="border px-4 py-2">ACTIONS</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentItems.map((item, index) => (
//             <tr key={index} className="hover:bg-gray-100">
//               <td className="border px-4 py-2">
//                 <input type="checkbox" />
//               </td>
//               <td className="border px-4 py-2">{item.id}</td>
//               <td className="border px-4 py-2">{item.username}</td>
//               <td className="border px-4 py-2">
//                 <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//                   {item.link}
//                 </a>
//               </td>
//               <td className="border px-4 py-2">{item.quantity}</td>
//               <td className="border px-4 py-2">{item.service}</td>
//               <td className="border px-4 py-2">{item.charge}</td>
//               <td className="border px-4 py-2">{item.date}</td>
//               <td className="border px-4 py-2">
//                 <span className={`px-2 py-1 rounded ${item.status === 'Completed' ? 'bg-green-200 text-green-800' : 'bg-gray-200'}`}>
//                   {item.status}
//                 </span>
//               </td>
//               <td className="border px-4 py-2">{item.start}</td>
//               <td className="border px-4 py-2">{item.remain}</td>
//               <td className="border px-4 py-2">
//                 <button className="text-gray-500">...</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-4">
//         <p>Showing {startIndex + 1} to {startIndex + currentItems.length} of {data.length} entries</p>
//         <nav className="inline-flex">
//           <button
//             className={`px-3 py-1 ${currentPage === 1 ? 'text-gray-400' : 'text-blue-500 hover:text-blue-700'}`}
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             Previous
//           </button>
//           <button
//             className={`px-3 py-1 ${currentPage === 1 ? 'text-blue-500 font-semibold' : 'text-gray-500'}`}
//             onClick={() => handlePageChange(1)}
//           >
//             1
//           </button>
//           <button
//             className={`px-3 py-1 ${currentPage === 1 ? 'text-gray-400' : 'text-blue-500 hover:text-blue-700'}`}
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === 1}
//           >
//             Next
//           </button>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default DashboardTable;


import React, { useState } from 'react';
import { Table, Form, Pagination, Dropdown } from 'react-bootstrap';
import { BsThreeDots } from 'react-icons/bs'; // Import the 3 horizontal dots icon

const DashboardTable = () => {
  // Dummy data for the table
  const ordersData = Array.from({ length: 10 }, (_, index) => ({
    id: `#${index + 321456}`,
    username: `GreenCute`,
    link: 'https://techiesgateway.com/',
    quantity: 67,
    service: 'Google maps reviews | 20 Reviews Package | Text Review only (Read Description) 🔥',
    charge: '₹6k',
    date: '2023-01-02, 10:36AM',
    status: 'Completed',
    start: 567,
    remain: 0,
  }));

  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const totalPages = Math.ceil(ordersData.length / entriesPerPage);

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
    <div className="container mt-4 ">
      {/* Container for the entire component with white background and rounded borders */}
      <div className="bg-white rounded shadow p-3">
        <h2 className="text-lg font-semibold mb-4">Recent Order</h2>
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

        <div style={{ overflowX: 'auto' }}>
          <Table hover responsive className="table" style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0', borderRadius: '8px' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(61, 85, 203, 0.15)' }}>
                <th className="px-4 py-2">
                  <input type="checkbox" />
                </th>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Link</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Service</th>
                <th className="px-4 py-2">Charge</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Start</th>
                <th className="px-4 py-2">Remain</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ordersData.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage).map((order, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-2 font-bold">{order.id}</td>
                  <td className="px-4 py-2">{order.username}</td>
                  <td className="px-4 py-2">
                    <a href={order.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      {order.link}
                    </a>
                  </td>
                  <td className="px-4 py-2">{order.quantity}</td>
                  <td className="px-4 py-2">{order.service}</td>
                  <td className="px-4 py-2">{order.charge}</td>
                  <td className="px-4 py-2">{order.date}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded ${order.status === 'Completed' ? 'bg-green-200 text-green-800' : 'bg-gray-200'}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">{order.start}</td>
                  <td className="px-4 py-2">{order.remain}</td>
                  <td className="px-4 py-2">
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
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <p>
            Showing {(currentPage - 1) * entriesPerPage + 1} to {Math.min(currentPage * entriesPerPage, ordersData.length)} of {ordersData.length} entries
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
    </div>
  );
};

export default DashboardTable;
