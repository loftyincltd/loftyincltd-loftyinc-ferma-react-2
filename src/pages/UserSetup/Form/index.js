import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'
import Actions from './Actions';
import State from './State';
import Firstname from './Firstname';
import Gender from './Gender';
import Lastname from './Lastname';
import Phone from './Phone';
import Date from './Date';
import Occupation from './Occupation';
import LGA from './LGA';
import Bank from './Bank';
import Nin from './Nin';
import Address from './Address';

const Container = () => {
  const { user } = useSelector((state) => state.app);
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
        <form id="add-user-form">
          <br/>
           {/**<FormType state={state} nextStep={nextStep} prevStep={prevStep} changeStep={changeStep} />**/}
           <Firstname  />
           <Lastname  />
           <Phone  />
           <Date  />
           <Gender  />
           <Occupation  />
           <Address  />

           <Bank />
           <Nin />
          
           {
user.super?
<State  />:<div></div>
           }
           <br/>
             <LGA />

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
