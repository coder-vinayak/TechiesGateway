// DashboardMainContent.js
import React from 'react';
import Cardsofdashboard from './Cardsofdashboard';
import { FaDollarSign } from "react-icons/fa6";
import { CiWallet } from "react-icons/ci";
import { IoCubeSharp } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { IoTicket } from "react-icons/io5";
import './Cardsofdashboard.css'
const DashboardMainContent = () => {
  return (
    <div className="container-fluid p-4">
      <div className="row2">
        <Cardsofdashboard
          amt="40,000"
          title="Total users"
          icon={<FaDollarSign color='#8280FF' size={16}/>}
          dc="FF"
        />
        <Cardsofdashboard
          amt="10,567"
          title="Total Amount Received"
          icon={<CiWallet color='#FF9871' size={16}/>}
          dc="FF9871"
        />
        <Cardsofdashboard
          amt="10,567"
          title="Total orders"
          icon={<IoCubeSharp color='#FEC53D' size={16}/>}
          dc="FEC53D"
        />
        <Cardsofdashboard
          amt="10,567"
          title="Total Tickets"
          icon={<IoTicket color='#FF9871' size={16}/>}
          dc="FF9871"
        />
        <Cardsofdashboard
          amt="10,567"
          title="Total User’s Balance"
          icon={<CiWallet color='#2FCE42' size={16}/>}
          dc="FCE42"
        />
        <Cardsofdashboard
          amt="10,567"
          title="Total Provider Balance"
          icon={<CiWallet color='#C83DCA' size={16}/>}
          dc="C83DCA"
        />
        <Cardsofdashboard
          amt="10,567"
          title="Total Profit today"
          icon={<BsGraphUp color='#4AD991' size={16}/>}
          dc="AD991"
        />
        <Cardsofdashboard
          amt="10,567"
          title="Total Profit this month"
          icon={<BsGraphUp color='#CE9429' size={16}/>}
          dc="CE9429"
        />
      </div>
    </div>
  );
};

export default DashboardMainContent;
