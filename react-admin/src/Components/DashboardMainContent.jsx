// DashboardMainContent.js
import React from 'react';
import Cardsofdashboard from './Cardsofdashboard';
import { FaDollarSign } from "react-icons/fa6";
import './Cardsofdashboard.css'
const DashboardMainContent = () => {
  return (
    <div className="container-fluid p-4">
      <div className="row2 row">
        <Cardsofdashboard
          amt="40,000"
          title="Total users"
          icon={<FaDollarSign/>}
        />
        <Cardsofdashboard
          amt="40,000"
          title="Total users"
          icon={<FaDollarSign/>}
        />
        <Cardsofdashboard
          amt="40,000"
          title="Total users"
          icon={<FaDollarSign/>}
          
        />
        <Cardsofdashboard
          amt="40,000"
          title="Total users"
          icon={<FaDollarSign/>}
        />
        <Cardsofdashboard
          amt="40,000"
          title="Total users"
          icon={<FaDollarSign/>}
        />
        <Cardsofdashboard
          amt="40,000"
          title="Total users"
          icon={<FaDollarSign/>}
        />
        <Cardsofdashboard
          amt="40,000"
          title="Total users"
          icon={<FaDollarSign/>}
        />
        <Cardsofdashboard
          amt="40,000"
          title="Total users"
          icon={<FaDollarSign/>}
        />
      </div>
    </div>
  );
};

export default DashboardMainContent;
