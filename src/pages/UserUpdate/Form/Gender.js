import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HANDLE_CHANGE } from '../../../redux/usersetup/action'; 
import image from '../../../images/storeaa.svg'; 

const StoreName = () => {
  const dispatch = useDispatch();
  const { form, } = useSelector((state) => state.usersetup);
  const handleChange = ({ target: { name, value } }) => {
    const form = {};
    form[name] = value;
    dispatch(HANDLE_CHANGE(form));
  };

  return (
    <div>
       <h4 style={{width:'100%', textAlign:'left', paddingLeft:'15px', paddingBottom: '10px'}}>Gender: </h4>
           <div   style={{width:'100%'}} className="input">
           <i className='fa fa-user' style={{ color:'rgba(154, 159, 191, 0.5)', fontSize: 23, position: 'relative', left: 22,zIndex:2, top:2}}></i>
           <select 
                style={{width:'89%',minWidth:'300px'}}
          className="override"    
         value={form.gender||''}
        onChange={handleChange} name="gender"
           >
          <option>Select Gender</option>
          <option value="male">Male</option>
          <option  value="female">Female</option>
        </select>
      </div>
    </div>
  );
};

 
export default StoreName;


