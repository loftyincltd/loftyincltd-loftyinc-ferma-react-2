import React from 'react';
import ActionWidget from '../../widgets/ActionWidget'
import AvatarImages from '../../AvatarImages'
import CardWidget from '../../widgets/CardWidget';
import MissionStep from '../../MissionSteps';
import img4 from '../../../images/edit.svg';
import { useDispatch ,useSelector} from 'react-redux';
import { HANDLE_CHANGE, DELETE_ADMIN, FETCH_ADMIN, CLEAR } from '../../../redux/usersetup/action'; 
import { CLOSE_ASIDE,SET_ADMINS } from '../../../redux/application/action';

const OrderInfoAside = (props) => {
  const dispatch = useDispatch();
  const { last_name, first_name, username, state, district,_id } = props;
  return (
    <div className="dashboard-aside" style={{ margin: 'auto'}}>
         <br/>
         <br/>
         <h5>First Name:  {first_name}</h5>
         <br/>
        <h5>Last Name: {last_name} </h5>
        <br/>
        <h5 style={{color:'green'}}>Username: {username} </h5>
        <br/>
        <h5 style={{color:'black'}}>State: {state} </h5>
        <br/>
        <h5 style={{color:'red'}}>District: {district} </h5>
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
                 
                dispatch(CLOSE_ASIDE(f));
                dispatch(FETCH_ADMIN(form)).then((resp)=>{
                  const f ={loading: false}
                  dispatch(HANDLE_CHANGE(f));
                  if(resp &&resp.success){
                    dispatch(CLEAR(form))
                    dispatch(SET_ADMINS(resp.success));
            
                  }
                });
              }
            });
          }
        }}>
       
          Delete Admin
        </button>


    </div>
  );
};
export default OrderInfoAside;
