import React from 'react';
import { useDispatch } from 'react-redux';
import { HANDLE_CHANGE } from '../../../redux/authentication/action';
import User from '../../../images/ip.svg';
import Lock from '../../../images/lock.svg';
import Email from '../../../images/email.svg'; 

const OnboardingForm = () => {
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    const form = {type:'admin'};
    form[name] = value;
    dispatch(HANDLE_CHANGE(form));
  };

  return (
    <div className="form-group">
      <div className="input">

        <i className='fa fa-user' style={{ color:'rgba(154, 159, 191, 0.5)', fontSize: 23, position: 'relative', left: 22,zIndex:2, top:2}}></i>
        <input
          type="username"
          name="username"
          className="override"
          onChange={handleChange}
          placeholder="e.g. admin"
        />
      </div>
      <div className="input">
      <i className='fa fa-lock' style={{ color:'rgba(154, 159, 191, 0.5)', fontSize: 23, position: 'relative', left: 22,zIndex:2, top:2}}></i>
        <input
          className="override"
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
    </div>
  );
};

export default OnboardingForm;
