import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'
import Actions from './Actions';
import Fingerprint from './Fingerprint';

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
          <h5 style={{fontSize:'22px', paddingBottom:'0px'}}>Create User</h5>
        </div>

        <div className="FormType">
        <form id="add-admin-form">
          <br/>
           {/**<FormType state={state} nextStep={nextStep} prevStep={prevStep} changeStep={changeStep} />**/}
           <Fingerprint current_user={current_user}  />
          

           </form>

        </div>
       
      </div>
      <Actions prevStep={prevStep} nextStep={nextStep} changeStep={changeStep} />
      <br/>
      <br/>
      <br/>
    </div>
  );
};



export default Container;
