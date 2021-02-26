import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { HANDLE_CHANGE, USER_UPDATE, CLEAR } from '../../../redux/usersetup/action'; 
import { useLocation, useHistory } from 'react-router-dom';

const Actions = ({ prevStep, changeStep, nextStep }) => {
  const dispatch = useDispatch();

  const history = useHistory();
  const token = window.localStorage.getItem('user_token') || null;
  const { form, } = useSelector((state) => state.usersetup);
  const uploadUser = function(){
    if(form &&  form.first_name&& form.last_name && form.lga && form.address  && form.occupation && form.gender && form.lga && form.dob){
      const f ={loading: true}
      dispatch(HANDLE_CHANGE(f));
      dispatch(USER_UPDATE(form)).then((resp)=>{
        const f ={loading: false}
        dispatch(HANDLE_CHANGE(f));
        if(resp &&resp.success){
          dispatch(CLEAR(form))
         document.getElementById("add-admin-form").reset();
          history.push('/users')
        }
      });
    }
    
  }
 


  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center',
     flexDirection:'row', margin:'10px auto'}}>
    
      <div className="next">
        <button
        className={form && form.first_name&& form.last_name && form.address && form.occupation && form.gender && form.lga && form.dob ?'primary btn' : 'disabled btn'}
        style={{width:'100px', margin:'0 5px'}} onClick={uploadUser}>
          {form.loading?<i className="fa fa-spinner fa-spin" style={{marginRight:'10px'}}></i>:<></>}
        Submit
        </button>
      </div>
    </div>
  );
};
export default Actions;
