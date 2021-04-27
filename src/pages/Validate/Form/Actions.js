import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Spin } from 'antd';
import { HANDLE_CHANGE, WORKER_ADD, CLEAR } from '../../../redux/usersetup/action'; 
import { useLocation, useHistory } from 'react-router-dom';

const Actions = ({ prevStep, changeStep, nextStep }) => {
  const { user, filter_type, current_project } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [loadingf, setloadingf] = useState(false)
  const history = useHistory();
  const { user_token } = useSelector((state) => state.app);
  const token = window.localStorage.getItem('user_token') || null;
  const { form, } = useSelector((state) => state.usersetup);
  const uploadWorker = function(){
    if(form &&form.fingerprint ){//fingerprint valud
      const f ={loading: true}
      setloadingf(true)
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
        className={form && form.fingerprint ?'primary btn' : 'disabled btn' }
        style={{width:'100px', margin:'0 5px'}} onClick={uploadWorker}>
          {form.loading?<i className="fa fa-spinner fa-spin" style={{marginRight:'10px'}}></i>:<></>}
          {loadingf ? <Spin size="large" /> : "Submit"}
        </button>
        
      </div>
    </div>
  );
};
export default Actions;
