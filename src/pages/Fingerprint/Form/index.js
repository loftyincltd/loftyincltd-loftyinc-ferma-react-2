import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Actions from './Actions';
import Fingerprint from './Fingerprint';
import Iframe from 'react-iframe';

const Container = () => {
  const { user, current_user } = useSelector((state) => state.app);

  const [state, setState] = useState({
    step: 0
  });
  
  const frame = document.getElementById('fingerprint');
  frame.contentWindow.postMessage(current_user, 'http://3.8.182.114:9002/');


  const changeStep = (step) => setState({ step });

  const prevStep = () => {
    if (state.step > 0) changeStep(state.step - 1);
  };

  const nextStep = () => changeStep(state.step + 1);

  return (
    <div className="onboarding-form-container">
      <div className="onboarding-form">
        <div className="msg">
          <h5 style={{ fontSize: '22px', paddingBottom: '0px' }}>Register Fingerprint</h5>
        </div>
        <br />
        <h5>
          {current_user.last_name} {current_user.first_name}
        </h5>

        <div className="FormType">
          <form id="add-admin-form">
            {/**<FormType state={state} nextStep={nextStep} prevStep={prevStep} changeStep={changeStep} />**/}
            <Iframe url="http://3.8.182.114:9002/" width="450px" height="450px" id="fingerprint" className="fingerprint" display="initial" position="relative" />
          </form>
        </div>
      </div>
      <Actions prevStep={prevStep} nextStep={nextStep} changeStep={changeStep} />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Container;
