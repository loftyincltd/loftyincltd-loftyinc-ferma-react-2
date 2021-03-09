import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { HANDLE_CHANGE, FETCH_ADMIN, CLEAR } from '../../redux/usersetup/action'; 
import search from '../../images/search.svg';
import { SET_ADMINS } from '../../redux/application/action'; 

const Search = () => {
  const dispatch = useDispatch();
  const { form, } = useSelector((state) => state.usersetup);
  const handleChange = ({ target: { name, value } }) => {
    form[name] = value;
    dispatch(HANDLE_CHANGE(form));
  };

  return (
    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <div className="Search" style={{width: '70%'}}>
      <img src={search} alt="k" />
      <input placeholder='Search'
                name="q"
                onChange={handleChange}
      />
    </div>
    <button
        className={'btn'}
        style={{  background:'blue', height: '56px', maxWidth:'100px'}} onClick={()=>{
        
          const form2 = {
            type: 'admin', 
            all: true, download: false
          }
          if(form.q){
             form2. q = form.q;
          }
          const f ={loading: true}
        //  dispatch(CLEAR())
          dispatch(HANDLE_CHANGE(f));
          dispatch(HANDLE_CHANGE(form2));
           dispatch(FETCH_ADMIN(form2)).then((resp)=>{
            const f ={loading: false}
            dispatch(HANDLE_CHANGE(f));
            if(resp &&resp.success){
          //    dispatch(CLEAR())
              dispatch(SET_ADMINS(resp.success));
      
            }
          }); 
        
        }}>
       {(!form.q||(form.q && form.q.trim()==""))?'Refresh':'Search'}

        </button>

    </div>
    
  );
};

export default Search;
