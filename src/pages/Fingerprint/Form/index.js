import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Actions from './Actions';
import Fingerprent from './Fingerprent';
import Iframe from 'react-iframe';

const Container = () => {



  return (
    <div className="onboarding-form-container">
      <div className="onboarding-form">
        <div className="FormType">
          <form id="add-admin-form">
            
<Fingerprent />
          </form>
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
};

export default Container;
