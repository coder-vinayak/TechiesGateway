import React from 'react';

const TopUsers = () => {
  const users = [
    { name: 'Alexandra Della', email: 'green.cute@outlook.com', followers: '678k' },
    { name: 'Archie Cantones', email: 'green.cute@outlook.com', followers: '457k' },
    { name: 'Malanie Hanvey', email: 'green.cute@outlook.com', followers: '270k' },
    // Add more users as needed
  ];

  return (
    <div className="card">
      <div className="card-header">Top Users</div>
      <div className="card-body">
        {users.map((user, index) => (
          <div key={index} className="d-flex align-items-center mb-3">
            <img
              src={`https://via.placeholder.com/50?text=${user.name.charAt(0)}`}
              alt={`${user.name}'s avatar`}
              className="rounded-circle me-3"
            />
            <div className="d-flex justify-content-between w-100">
              <div>
                <h6>{user.name}</h6>
                <p className="text-muted">{user.email}</p>
              </div>
              <span>{user.followers}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUsers;
