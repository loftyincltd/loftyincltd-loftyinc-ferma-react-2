import React, {useEffect} from 'react';
// import { Link } from 'react-router-dom';
import { HANDLE_CHANGE, FETCH_USER, CLEAR } from '../../redux/usersetup/action'; 
import { SET_USERS } from '../../redux/application/action'; 
import { useDispatch, useSelector } from 'react-redux';
import RecentUsers from '../../components/lists/RecentUsers';
import ContactAside from '../../components/asides/ContactAside';

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const form = {
      type: 'admin', 
      all: true
    }
    const f ={loading: true}
    dispatch(CLEAR())
    dispatch(HANDLE_CHANGE(f));
    dispatch(HANDLE_CHANGE(form));
     dispatch(FETCH_USER(form)).then((resp)=>{
      const f ={loading: false}
      dispatch(HANDLE_CHANGE(f));
      if(resp &&resp.success){
        dispatch(CLEAR(form))
        dispatch(SET_USERS(resp.success));

      }
    });
    
  }, []);
  const { user } = useSelector((state) => state.app);
  const download= () => {
    const form = {
      type: 'admin', 
      all: true,
      download: true
    }
    const f ={loading: true}
    dispatch(CLEAR())
    dispatch(HANDLE_CHANGE(f));
    dispatch(HANDLE_CHANGE(form));
     dispatch(FETCH_USER(form)).then((resp)=>{
      const f ={loading: false}
      dispatch(HANDLE_CHANGE(f));
      console.log(resp)
      if(resp &&resp.success){
        dispatch(CLEAR(form))
        console.log(resp.success)
     //   dispatch(SET_USERS(resp.success));

      }
    });
    //
    };
  return (
    
    <div className="dashboard-container-main">
       
      <RecentUsers />
            {user.super?
               <button
              className={true?'primary btn' : 'disabled btn'}
              onClick={
                download
              }
            >
            Download Users
            </button>:<></>

            }
    </div>
  );
};

export default Index;
