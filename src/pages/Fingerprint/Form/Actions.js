import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import { HANDLE_CHANGE, FINGERPRINT_ADD, CLEAR } from '../../../redux/usersetup/action'; 
import { useLocation, useHistory } from 'react-router-dom';

const Actions = ({ prevStep, changeStep, nextStep }) => {
  const dispatch = useDispatch();

  const history = useHistory();
  const { current_user } = useSelector((state) => state.app);
  const [loadingf, setloadingf] = useState(false)
  const token = window.localStorage.getItem('user_token') || null;
  const { form, } = useSelector((state) => state.usersetup);
  const uploadFingerprint = function(){
    if(form &&  form.fingerprint){
      form.user_id =  current_user._id;
      const f ={loading: true}
setloadingf(true)
      dispatch(HANDLE_CHANGE(f));
      dispatch(FINGERPRINT_ADD(form)).then((resp)=>{
        console.log("in the gates");

        const f ={loading: false}
        dispatch(HANDLE_CHANGE(f));
        if(resp &&resp.success){
          console.log("success");
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
        className={form && form.fingerprint ?'primary btn' : 'disabled btn' }
        style={{width:'100px', margin:'0 5px'}} onClick={uploadFingerprint}>
          {form.loading?<i className="fa fa-spinner fa-spin" style={{marginRight:'10px'}}></i>:<></>}
        
        {loadingf ? <Spin size="large" /> : "Submit"}
        </button>
      </div>
    </div>

    
  );
};
export default Actions;
