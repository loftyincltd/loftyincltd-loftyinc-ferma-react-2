import React from 'react';

import { useDispatch ,useSelector} from 'react-redux';
import { HANDLE_CHANGE, DELETE_ADMIN, FETCH_USER, CLEAR } from '../../../redux/usersetup/action'; 
import { CLOSE_ASIDE,SET_USERS, SET_USER, SET_ADMIN } from '../../../redux/application/action';
import {useHistory} from 'react-router-dom'
import moment from 'moment';


const OrderInfoAside = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
 let { last_name, first_name, username, state, district,_id, dob, gender, occupation, lga, nin, account, bank, account_name, phone } = props;
  return (
    <div className="dashboard-aside" style={{ margin: 'auto'}}>
         <br/>
         <br/>
         <h5>First Name:  {first_name}</h5>
         <br/>
        <h5>Last Name: {last_name} </h5>
        <br/>
        <h5>Phone: {phone} </h5>
        <br/>
        <h5 >State: {state} </h5>
        <br/>
        <h5 >DOB: {dob} </h5>
        <br/>
        <h5 >Gender: {gender} </h5>
        <br/>
        <h5 >Occupation: {occupation} </h5>
        <br/>
        <h5 >District: {district} </h5>
        <br/>
        <h5 >LGA: {lga} </h5>
        <br/>
        {
          nin? <div>
             <h5 >Nin: {nin} </h5>
            <br/>
            </div>: <></>
        }

      {
         account? <div>
             <h5 >Bank: {bank} </h5>
            <br/>
            <h5 >Account Number: {account} </h5>
            <br/>
            <h5 >Account Name: {account_name} </h5>
            <br/>
            </div>: <></>
        }
       

        <button
       className={'btn'}
        style={{ margin:'0 5px', background:'green'}} onClick={()=>{

          dispatch(SET_USER(props));
          history.push('/fingerprint');
          dispatch(CLOSE_ASIDE());

        }}>
       
          Register Fingerprint
        </button>
        <br/>
        <button
    className={'btn'}
        style={{ margin:'0 5px', background:'blue'}} onClick={()=>{
          dispatch(SET_USER(props));
          history.push('/validate');
                dispatch(CLOSE_ASIDE());

        }}>
       
          Verify User
        </button>
<br/>

<button
            className={'btn'}
        style={{ margin:'0 5px', background:'blue'}} onClick={()=>{
          dispatch(SET_USER(props));
          history.push('/userupdate');
          dispatch(CLOSE_ASIDE());

        }}>
       
          Update  Details
        </button>
<br/>


      <button
           className={'btn'}
        style={{ margin:'0 5px', background:'red'}} onClick={()=>{
          if (window.confirm("Do you really want to delete this admin?")) {
            const form = {
              user_id: _id 
            }
            const f ={loading: true}
            dispatch(HANDLE_CHANGE(f));
            dispatch(HANDLE_CHANGE(form));
            dispatch(DELETE_ADMIN(form)).then((resp)=>{
              const f ={loading: false}
              dispatch(HANDLE_CHANGE(f));
              if(resp &&resp.success){
                dispatch(CLEAR(form))
                 
                dispatch(CLOSE_ASIDE());
                dispatch(FETCH_USER(form)).then((resp)=>{
                  const f ={loading: false}
                  dispatch(HANDLE_CHANGE(f));
                  if(resp &&resp.success){
                    dispatch(CLEAR(form))
                    dispatch(SET_USERS(resp.success));
            
                  }
                });
              }
            });
          }
        }}>
       
          Delete User
        </button>

    </div>
  );
};
export default OrderInfoAside;
