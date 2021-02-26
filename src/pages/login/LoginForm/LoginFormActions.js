import React,{ useState, useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_IN, GET_MY_DETAILS } from '../../../redux/authentication/action';
import { Link, Redirect } from 'react-router-dom';
const OnboardingFormActions = () => {
  const { user_token , user } = useSelector((state) => state.app);
  const token = window.localStorage.getItem('user_token') || null;

  const dispatch = useDispatch();

  const submit = () => {
    dispatch(SIGN_IN()).then(()=>{
      setTimeout(() => {
        const token = window.localStorage.getItem('user_token') || null;
      if(token){
        dispatch(GET_MY_DETAILS());
      }
      },0);
      
    });
  };
  useEffect(() => {
    if(token && !user){
      dispatch(GET_MY_DETAILS());
    } else if(user && user.email_verified){
      return <Redirect to="/dashboard" />;
    }
  }, []);
  
  if (token !== null && user && user.type=='admin') {  
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="onboarding-form-actions">
      <div className="back"></div>
      <div className="next">
        <button className={`${'primary btn'}`} onClick={submit}>
          Sign In
        </button>
      </div>
    </div>
  );
};
export default OnboardingFormActions;
