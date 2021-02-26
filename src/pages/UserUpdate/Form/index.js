import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
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
import { HANDLE_CHANGE, USER_ADD, CLEAR } from '../../../redux/usersetup/action'; 

const Container = () => {
  const { user, current_user } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    step: 0,
  }); 
  useEffect(() => {
    dispatch(CLEAR())
    dispatch(HANDLE_CHANGE(current_user));
    
  }, []);
  const changeStep = (step) => setState({ step });

  const prevStep = () => {
    if (state.step > 0) changeStep(state.step - 1);
  };

  const nextStep = () => changeStep(state.step + 1);

  return (
    <div className="onboarding-form-container">
      <div className="onboarding-form">
        <div className="msg" >
          <h5 style={{fontSize:'22px', paddingBottom:'0px'}}>Update User</h5>
        </div>

        <div className="FormType">
        <form id="add-admin-form">
          <br/>
           {/**<FormType state={state} nextStep={nextStep} prevStep={prevStep} changeStep={changeStep} />**/}
           <Firstname  current_user={current_user} />
           <Lastname current_user={current_user}  />
           <Phone current_user={current_user}  />
           <Date current_user={current_user}  />
           <Gender current_user={current_user}  />
           <Occupation current_user={current_user}   />
           <Address current_user={current_user}   />

           <Bank />
           <Nin />
          
           {
user.super?
<State  />:<div></div>
           }
           <br/>
             <LGA current_user={current_user}  />

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
