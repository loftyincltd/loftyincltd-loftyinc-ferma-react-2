import React, {useEffect }  from 'react';
 import { Link } from 'react-router-dom';
 import { HANDLE_CHANGE, FETCH_PROJECT, CLEAR } from '../../redux/usersetup/action'; 
import { SET_PROJECTS } from '../../redux/application/action'; 
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../components/Search';
import ProductLists from '../../components/lists/ProductLists';
import CardWidget from '../../components/widgets/CardWidget'; 
const addProduct= () => {
 
//
};

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
     dispatch(FETCH_PROJECT(form)).then((resp)=>{
      const f ={loading: false}
      dispatch(HANDLE_CHANGE(f));
      if(resp &&resp.success){
        dispatch(CLEAR(form))
        dispatch(SET_PROJECTS(resp.success));

      }
    });
    
  }, []);

  return (
    <div className="dashboard-container-main">
      
             
          <Link to={'/projectsetup'} style={{ color:'#fff'}}>


          <button
              className={true?'primary btn' : 'disabled btn'}
             
            >
              New Project
        </button>
     

  
    </Link>
          
            <CardWidget Child={ProductLists} />
          </div>
  );
};

export default Index;
