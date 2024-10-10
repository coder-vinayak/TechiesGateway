// DashboardMainContent.js
import React from 'react';
import Card from './Cardsofdashboard';

const DashboardMainContent = () => {
  return (
    <div className="container-fluid p-4 ">
      <div className="row">
        <Card
          icon="feather-dollar-sign"
          count={45}
          total={76}
          title="Invoices Awaiting Payment"
          amount="$5,569"
          percentage={56}
          progressColor="bg-primary"
        />
        <Card
          icon="feather-cast"
          count={48}
          total={86}
          title="Converted Leads"
          amount="52 Completed"
          percentage={63}
          progressColor="bg-warning"
        />
        <Card
          icon="feather-briefcase"
          count={16}
          total={20}
          title="Projects In Progress"
          amount="16 Completed"
          percentage={78}
          progressColor="bg-success"
        />
        <Card
          icon="feather-activity"
          count={46.59}
          total={100}
          title="Conversion Rate"
          amount="$2,254"
          percentage={46}
          progressColor="bg-danger"
        />
           <Card
          icon="feather-activity"
          count={46.59}
          total={100}
          title="Conversion Rate"
          amount="$2,254"
          percentage={46}
          progressColor="bg-danger"
        />
           <Card
          icon="feather-activity"
          count={46.59}
          total={100}
          title="Conversion Rate"
          amount="$2,254"
          percentage={46}
          progressColor="bg-danger"
        />
           <Card
          icon="feather-activity"
          count={46.59}
          total={100}
          title="Conversion Rate"
          amount="$2,254"
          percentage={46}
          progressColor="bg-danger"
        />
           <Card
          icon="feather-activity"
          count={46.59}
          total={100}
          title="Conversion Rate"
          amount="$2,254"
          percentage={46}
          progressColor="bg-danger"
        />
      </div>
    </div>
  );
};

export default DashboardMainContent;
