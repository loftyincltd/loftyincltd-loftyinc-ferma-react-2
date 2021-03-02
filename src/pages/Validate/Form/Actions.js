import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { HANDLE_CHANGE, WORKER_ADD, CLEAR } from '../../../redux/usersetup/action'; 
import { useLocation, useHistory } from 'react-router-dom';

const Actions = ({ prevStep, changeStep, nextStep }) => {
  const { user, filter_type, current_project } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const history = useHistory();
  const { user_token } = useSelector((state) => state.app);
  const token = window.localStorage.getItem('user_token') || null;
  const { form, } = useSelector((state) => state.usersetup);
  const uploadWorker = function(){
    if(form &&form.fingerprint_data ){//fingerprint valud
      const f ={loading: true}
      dispatch(HANDLE_CHANGE(f));
      dispatch(WORKER_ADD(form)).then((resp)=>{
        const f ={loading: false}
        dispatch(HANDLE_CHANGE(f));
        if(resp &&resp.success){
          dispatch(CLEAR())
       
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
        className={form// &&form.validated
           ?'btn primary' : 'btn disabled'}
        style={{width:'100px', margin:'0 5px'}} onClick={uploadWorker}>
          {form.loading?<i className="fa fa-spinner fa-spin" style={{marginRight:'10px'}}></i>:<></>}
        Submit
        </button>
      </div>
    </div>
  );
};
export default Actions;
