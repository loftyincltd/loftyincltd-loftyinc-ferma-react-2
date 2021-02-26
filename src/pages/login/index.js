import React from 'react'; 
// import { Link } from 'react-router-dom';

import OnboardingFormContainer from './LoginForm';
import Talk from '../../images/union.svg';

const Index = () => {
  return (
    <div className="onboarding">
      <SideBar />
      <OnboardingFormContainer />
    </div>
  );
};
const SideBar = () => {
  return (
    <div className="onboarding-sidebar" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div className="words">
        <h1>Project Roadmap</h1>
        <h2></h2>
      </div>

    </div>
  );
};

export default Index;
