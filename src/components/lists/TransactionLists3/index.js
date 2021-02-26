import React, {} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { OPEN_ASIDE, } from '../../../redux/application/action';
import FlatList from '../../../common/FlatList';
import AvatarTag from '../../AvatarTag';
import { HANDLE_CHANGE, DELETE_WORKER, FETCH_WORKER, CLEAR } from '../../../redux/usersetup/action'; 
import { SET_WORKERS, SET_USER,  } from '../../../redux/application/action';


const typeTags = {
  admin: {
    title: 'Admin',
    color: '#52C41A',
  },

  customer: {
    title: 'User',
    color: '#FA541C',
  },
  project: {
    title: 'Project',
    color: '#722ED1',
  },
};
 
const TransactionLists = () => {
  const { users,filtered_users, filter_type, workers } = useSelector((state) => state.app);
  return (
    <div className="TransactionLists">
      <FlatList data={workers} Child={TransactionListItem} />
    </div>
  );
};
const TransactionListItem = (props) => {
  const { last_name, first_name, occupation, state, district, } = props.user;
  const dispatch = useDispatch();
  const revealDetail = () =>
    dispatch(OPEN_ASIDE({ which: 'UserInfoAside', data: props }));

  return (
    <div className="TransactionLists-Item" style={{}} //onClick={revealDetail}
    >
      <div className="detail">
      
        <h5>First Name:  {first_name}</h5>
        <h5>Last Name: {last_name} </h5>
        <h5 style={{color:'black'}}>State: {state} </h5>
        <h5 style={{color:'red'}}>District: {district} </h5>
        <h5 style={{color:'red'}}>Occupation: {occupation} </h5>
      </div>
      <br/>
      <button
           className={'btn'}
        style={{ margin:'0 5px', background:'red', width:'100px'}} onClick={()=>{
          if (window.confirm("Do you really want to remove this user?")) {
            const form = {
              worker_id: props._id , 
            }
            const f ={loading: true}
            dispatch(HANDLE_CHANGE(f));
            dispatch(HANDLE_CHANGE(form));
            dispatch(DELETE_WORKER(form)).then((resp)=>{
              const f ={loading: false}
              dispatch(HANDLE_CHANGE(f));
              if(resp &&resp.success){
                dispatch(CLEAR(form))
                 
                dispatch(FETCH_WORKER(form)).then((resp)=>{
                  const f ={loading: false}
                  dispatch(HANDLE_CHANGE(f));
                  if(resp &&resp.success){
                    dispatch(CLEAR(form))
                    dispatch(SET_WORKERS(resp.success));
            
                  }
                });
              }
            });
          }
        }}>
       
          Remove
        </button>
    </div>
  );
};
const Tags = ({ type, status }) => {
  return (
    <div className="tags">
      <div
        className="tag"
        style={{
          backgroundColor: typeTags[type].color + '' + 61,
          color: typeTags[type].color,
        }}
      >
        {typeTags[type].title}
      </div>

    </div>
  );
};

export default TransactionLists;
