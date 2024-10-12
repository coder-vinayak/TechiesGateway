import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = Array(10).fill({
  id: '#321456',
  category: 'Select category',
  apiCategoryName: 'Instagram Followers (Starting Price: ₹15)'
});

const ServiceImportTable = () => {
  const [entries, setEntries] = useState(10); // Number of entries to show

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = entries;

  const handleEntriesChange = (e) => {
    setEntries(parseInt(e.target.value));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Calculate the data to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container">
      <div className="d-flex justify-content-between mb-3 align-items-center">
        {/* Entries dropdown */}
        <div className="form-group d-flex align-items-center">
  <label className="mb-0">Show</label>
  <select 
    className="form-select mx-2 d-inline-block w-auto" 
    style={{ paddingRight: '1.5rem' }} // Adjust padding as needed
    value={entries} 
    onChange={handleEntriesChange}
  >
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="15">15</option>
  </select>
  <span>entries</span>
</div>

        {/* Search input */}
        <div className="w-25">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </div>

      <table className="table table-hover align-middle">
        <thead>
        <tr style={{ backgroundColor: 'rgba(61, 85, 203, 0.15)' }}>
            <th>
              <input type="checkbox" />
              
            </th>
            <th>ID</th>
            <th>Select Category</th>
            <th>API Category Name</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{item.id}</td>
              <td>
                <select className="form-select">
                  <option>{item.category}</option>
                  {/* Additional categories can be added here */}
                </select>
              </td>
              <td>{item.apiCategoryName}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center">
        <p className="mb-0">Showing {startIndex + 1} to {startIndex + currentItems.length} of {data.length} entries</p>
        <nav>
          <ul className="pagination mb-0">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
            </li>
            <li className="page-item">
  <button 
    className="page-link" 
    onClick={() => handlePageChange(1)} 
    style={{ backgroundColor: '#3454D1', color: '#fff' }} 
  >
    1
  </button>
</li>

            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ServiceImportTable;


// import React, { useState } from 'react';
// // import 'tailwindcss/tailwind.css'; // Ensure Tailwind is imported

// const serviceData = [
//   {
//     id: '#321456',
//     category: 'Select category',
//     apiName: 'Instagram Followers (Starting Price: ₹15)',
//   },
//   {
//     id: '#321457',
//     category: 'Select category',
//     apiName: 'Instagram Likes (Starting Price: ₹30)',
//   },
//   {
//     id: '#321458',
//     category: 'Select category',
//     apiName: 'Instagram Comments (Starting Price: ₹25)',
//   },
//   // Add more services as needed
// ];

// const  ImportServiceTable = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const entriesPerPage = 10;

//   const totalPages = Math.ceil(serviceData.length / entriesPerPage);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   const startIndex = (currentPage - 1) * entriesPerPage;
//   const currentItems = serviceData.slice(startIndex, startIndex + entriesPerPage);

//   return (
//     <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr style={{ backgroundColor: 'rgba(61, 85, 203, 0.15)' }}>
//             <th className="p-3 border-b border-gray-300">
//               <input type="checkbox" />
//             </th>
//             <th className="p-3 border-b border-gray-300">ID</th>
//             <th className="p-3 border-b border-gray-300">Select Category</th>
//             <th className="p-3 border-b border-gray-300">API Category Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentItems.map((service, index) => (
//             <tr key={index} className="hover:bg-gray-50">
//               <td className="p-3 border-b border-gray-300">
//                 <input type="checkbox" />
//               </td>
//               <td className="p-3 border-b border-gray-300">{service.id}</td>
//               <td className="p-3 border-b border-gray-300">
//                 <select className="form-select w-full">
//                   <option>{service.category}</option>
//                   {/* Add additional options here */}
//                 </select>
//               </td>
//               <td className="p-3 border-b border-gray-300">{service.apiName}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-4">
//         <p>
//           Showing {startIndex + 1} to {Math.min(startIndex + entriesPerPage, serviceData.length)} of {serviceData.length} entries
//         </p>
//         <nav>
//           <ul className="flex space-x-2">
//             <li>
//               <button
//                 className={`bg-blue-500 text-white px-4 py-2 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 onClick={() => handlePageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//               >
//                 Previous
//               </button>
//             </li>
//             <li>
//               <button className="bg-blue-500 text-white px-4 py-2 rounded">{currentPage}</button>
//             </li>
//             <li>
//               <button
//                 className={`bg-blue-500 text-white px-4 py-2 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 onClick={() => handlePageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//               >
//                 Next
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default ImportServiceTable;
