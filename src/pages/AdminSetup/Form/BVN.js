import React from 'react';
import { useDispatch } from 'react-redux';
import { HANDLE_CHANGE } from '../../../redux/authentication/action'; 
import image from '../../../images/storeaa.svg'; 

const BVN = () => {
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    const form = {};
    form[name] = value;
    dispatch(HANDLE_CHANGE(form));
  };

  return (
    <div>
           <div className="input">
        <img src={image} alt="k" />
        <input
          className="override"
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="e.g. 22312345678"
        />
      </div>
    </div>
  );
};

 
export default BVN;

