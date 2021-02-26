import React, { useState, useEffect } from 'react';
import Actions from './Actions';
import State from './State';
import Firstname from './Firstname';
import Lastname from './Lastname';
import Username from './Username';
import Password from './Password';

const Container = () => {
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
          <h5 style={{fontSize:'22px', paddingBottom:'0px'}}>Create Admin</h5>
        </div>

        <div className="FormType">
        <form id="add-admin-form">
           {/**<FormType state={state} nextStep={nextStep} prevStep={prevStep} changeStep={changeStep} />**/}
           <Firstname  />
           <Lastname  />
           <Username  />
           <Password  />
           <State  />

           </form>

        </div>
       
      </div>
      <Actions prevStep={prevStep} nextStep={nextStep} changeStep={changeStep} />
    </div>
  );
};



export default Container;
