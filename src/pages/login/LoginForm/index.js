import React, { useState, useEffect } from 'react';
import { Progress } from 'antd';
import OnboardingFormActions from './LoginFormActions';
import OnboardingForm from './LoginForm'; 
const OnboardingFormContainer = () => {
  return (
    <div className="onboarding-form-container">
      <div className="progress">
        <Progress percent={100} showInfo={false} />
      </div>

      <div className="onboarding-form">
        <div className="msg">
          <h5>Login to your Account</h5>
        </div>
        <OnboardingForm />
      </div>
      <OnboardingFormActions />
    </div>
  );
};

export default OnboardingFormContainer;
