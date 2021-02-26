import React from 'react';
// import { Link } from 'react-router-dom';

import DashboardMap from '../../components/DashboardMap';
import OngoingRequests from '../../components/lists/OngoingRequests';
import ContactAside from '../../components/asides/ContactAside';

const DashboardContainer = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-container-body">
        <div className="dashboard-container-main">
          <DashboardMap />
          <OngoingRequests />
        </div>
      </div>
      <ContactAside />
    </div>
  );
};

export default DashboardContainer;
