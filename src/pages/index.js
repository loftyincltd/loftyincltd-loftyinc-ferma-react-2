import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="welcome-page">
      <h1>Project Roadmap</h1>
      <Link to={'login'} className="btn warning">
        Continue
      </Link>
    </div>
  );
};
export default Index;
