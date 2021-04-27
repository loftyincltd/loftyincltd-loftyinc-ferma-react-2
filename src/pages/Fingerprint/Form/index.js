import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Actions from './Actions';
import Fingerprent from './Fingerprent';
import Iframe from 'react-iframe';

const Container = () => {
  const { user, current_user } = useSelector((state) => state.app);

  const [state, setState] = useState({
    step: 0
  });
  

// useEffect(() => {
//   const frame = document.getElementsByClassName('fingerprint')[0];
//   return () => {
//     frame.contentWindow.postMessage(current_user, 'http://3.8.182.114:9002/');
//   }
// }, [])
  const changeStep = (step) => setState({ step });

  const prevStep = () => {
    if (state.step > 0) changeStep(state.step - 1);
  };

  const nextStep = () => changeStep(state.step + 1);

  return (
    <div className="onboarding-form-container">
      <div className="onboarding-form">
        <div className="FormType">
          <form id="add-admin-form">
            {/**<FormType state={state} nextStep={nextStep} prevStep={prevStep} changeStep={changeStep} />**/}
<Fingerprent />
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
