import React from 'react';
// import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { HANDLE_CHANGE, PASSWORD_CHANGE, CLEAR } from '../../redux/usersetup/action'; 

   
const Index = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { user,  } = useSelector((state) => state.app);
  const handleChange = ({ target: { name, value } }) => {
    const form = {};
    form[name] = value;
    dispatch(HANDLE_CHANGE(form));
    
  };

  const { form, } = useSelector((state) => state.usersetup);
  const changePass= function(){
    if(form && form.password && form.confirm && (form.old&& form.password===form.confirm)){
      const f ={loading: true}
      dispatch(HANDLE_CHANGE(f));
      dispatch(PASSWORD_CHANGE(form)).then((resp)=>{
        const f ={loading: false}
        dispatch(HANDLE_CHANGE(f));
        if(resp &&resp.success){
          dispatch(CLEAR(form))
         document.getElementById("set-form").reset();
          history.push('/dashboard')
        }
      });
    }
    
  }

  return (
    <div className="dashboard-container-main"> 

     <div style={{ 
            background: '#FFFFFF',
            borderRadius: '10px',
            padding: '15px',
            boxShadow: '0px 3px 12px 0px rgb(0 0 0 / 10%)',
            marginBottom: '24px',
            
      }}>
          <h5 >First name: {user.first_name}</h5>
          <h5>Last name: {user.last_name}</h5>
          <h5>Username: {user.username}</h5>
          <div style={{borderBottom:1}}>

          </div>
          <br/>
          <form id="set-form">
          <div>
       <h4 style={{width:'100%', textAlign:'left', paddingLeft:'15px', paddingBottom: '10px'}}>Old Password: </h4>
          <input
     //   style={{width:'89%',minWidth:'300px'}}
          className="override"
          type="password"
          name="old"
          onChange={handleChange}
       
        />
        </div>
        <div>
       <h4 style={{width:'100%', textAlign:'left', paddingLeft:'15px', paddingBottom: '10px'}}>New Password: </h4>
          <input
       // style={{width:'89%',minWidth:'300px'}}
          className="override"
          type="password"
          name="password"
          onChange={handleChange}
          
        />
        </div>
        <div>
       <h4 style={{width:'100%', textAlign:'left', paddingLeft:'15px', paddingBottom: '10px'}}>Confirm Password: </h4>
          <input
     //   style={{width:'89%',minWidth:'300px'}}
          className="override"
          type="password"
          name="confirm"
          onChange={handleChange}
        
        />
        </div>
            </form>
            <br/>
            <button 
              className={(form.password&& form.confirm && form.old&& (form.password ===form.confirm))?'primary btn'  : 'disabled btn'}
             onClick=
                       {changePass}
            >
              Update Password
        </button>
         <br/>
        <button style={{background:'red'}}
              className={true?'primary btn' : 'disabled btn'}
             onClick={()=>{
               localStorage.removeItem('user_token');
               localStorage.removeItem('persist:root');
               history.push('/login');
                 
             }}
            >
              Logout
        </button>
   
      </div>
    </div>
  );
};

export default Index;
