import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

const SettingSubSidebar = () => {
  // State to track the active item
  const [activeItem, setActiveItem] = useState('General');

  // List of sidebar items with corresponding colors
  const sidebarItems = [
    { name: 'General', color: '#3D55CB' }, // Blue
    { name: 'Providers', color: '#FDB62F' }, // Orange
    { name: 'Payments', color: '#33C5C0' }, // Cyan
    { name: 'Modules', color: '#EA3D2F' }, // Red
    { name: 'Integration', color: '#4CB562' }, // Green
    { name: 'Bonuses', color: '#33C5C0' }, // Cyan
    { name: 'Coupons', color: '#A97735' }, // Brown
    { name: 'Email Notification', color: '#C84CB5' }, // Pink
    { name: 'Sign up Form', color: '#8E2D2F' }, // Dark Red
  ];

  // Handler for clicking an item
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div style={{ width: '250px', backgroundColor: '#fff', padding: '20px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Setting</h3>
      <ListGroup as="ul">
        {sidebarItems.map((item) => (
          <ListGroup.Item
            as="li"
            key={item.name}
            action
            onClick={() => handleItemClick(item.name)}
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: activeItem === item.name ? 'rgba(61, 85, 203, 0.15)' : 'transparent',
              borderRadius: '8px',
              marginBottom: '10px',
              border: 'none',
              color: activeItem === item.name ? '#000' : '#6c757d',
            }}
          >
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: item.color,
                marginRight: '10px',
              }}
            ></span>
            {item.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default SettingSubSidebar;
