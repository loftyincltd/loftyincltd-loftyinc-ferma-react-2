import React from 'react';
import { useDispatch } from 'react-redux';
import { HANDLE_CHANGE } from '../../../redux/usersetup/action'; 
import image from '../../../images/storeaa.svg'; 

const StoreName = () => {
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    const form = {};
    form[name] = value;
    dispatch(HANDLE_CHANGE(form));
  };

  return (
    <div>
       <h4 style={{width:'100%', textAlign:'left', paddingLeft:'15px', paddingBottom: '10px'}}>Description: </h4>
           <div   style={{width:'100%'}} className="input">
           
        <textarea
        style={{width:'89%',minWidth:'300px', margin: 20, border:0, borderRadius:10}}
          className="override"
          type="text"
          name="description"
          onChange={handleChange}
     
        />
      </div>
    </div>
  );
};

 
export default StoreName;

