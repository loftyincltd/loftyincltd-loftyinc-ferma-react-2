import React, { useState, useEffect } from 'react';
import Actions from './Actions';
import Project from './Project';
import Fingerprint from './Fingerprint';
import {useSelector} from 'react-redux'

const Container = () => {
  const { user, current_user } = useSelector((state) => state.app);
  const [state, setState] = useState({
    step: 0,
  }); 

  const changeStep = (step) => setState({ step });

  const prevStep = () => {
    if (state.step > 0) changeStep(state.step - 1);
  };

  const nextStep = () => changeStep(state.step + 1);

  return (
    <div className="onboarding-form-container">
      <div className="onboarding-form">
        <div className="msg" >
          <h5 style={{fontSize:'22px', paddingBottom:'0px'}}>Validate User</h5>
        </div>

        <div className="FormType">
        <form id="add-admin-form">
           {/**<FormType state={state} nextStep={nextStep} prevStep={prevStep} changeStep={changeStep} />**/}
           <Project  current_user={current_user} />

           <Fingerprint current_user={current_user}  />


           </form>

        </div>
       
      </div>
      <Actions prevStep={prevStep} nextStep={nextStep} changeStep={changeStep} />
    </div>
  );
};



export default Container;
