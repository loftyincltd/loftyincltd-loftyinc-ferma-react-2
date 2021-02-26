import React, {useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { HANDLE_CHANGE, FETCH_ADMIN, CLEAR } from '../../redux/usersetup/action'; 
import { SET_ADMINS } from '../../redux/application/action'; 
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';
import TabsWidget from '../../components/widgets/TabsWidget';
import Search from '../../components/Search';
import TransactionLists from '../../components/lists/TransactionLists';
import CardWidget from '../../components/widgets/CardWidget'; 



const Index = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const form = {
      type: 'admin', 
      all: true, download: false
    }
    const f ={loading: true}
    dispatch(CLEAR())
    dispatch(HANDLE_CHANGE(f));
    dispatch(HANDLE_CHANGE(form));
     dispatch(FETCH_ADMIN(form)).then((resp)=>{
      const f ={loading: false}
      dispatch(HANDLE_CHANGE(f));
      if(resp &&resp.success){
        dispatch(CLEAR(form))
        dispatch(SET_ADMINS(resp.success));

      }
    });
    
  }, []);
  return (
    <div className="dashboard-container-main" style={{marginBottom: '20px'}}>
    <Search />
    <CardWidget Child={TransactionLists} /> 
    <div>
    {/**<Pagination defaultCurrent={1} total={50} />**/}
    </div>
  
    <br/>
    <br/>
  </div>
  );
};

export default Index;
