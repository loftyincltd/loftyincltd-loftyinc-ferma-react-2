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
      <div>
       <h4 style={{width:'100%', textAlign:'left', paddingLeft:'15px', paddingBottom: '10px'}}>Bank (Optional): </h4>
           <div   style={{width:'100%'}} className="input">
           <i className='fa fa-user' style={{ color:'rgba(154, 159, 191, 0.5)', fontSize: 23, position: 'relative', left: 22,zIndex:2, top:2}}></i>
        <input
        style={{width:'89%',minWidth:'300px'}}
          className="override"
          type="text"
          name="bank"
          onChange={handleChange}
          placeholder="e.g. 07086968916"
        />
      </div>
    </div>


    <div>
       <h4 style={{width:'100%', textAlign:'left', paddingLeft:'15px', paddingBottom: '10px'}}>Account Number (Optional): </h4>
           <div   style={{width:'100%'}} className="input">
           <i className='fa fa-user' style={{ color:'rgba(154, 159, 191, 0.5)', fontSize: 23, position: 'relative', left: 22,zIndex:2, top:2}}></i>
        <input
        style={{width:'89%',minWidth:'300px'}}
          className="override"
          type="text"
          name="account"
          onChange={handleChange}
          placeholder="e.g. 07086968916"
        />
      </div>
    </div>

    <div>
       <h4 style={{width:'100%', textAlign:'left', paddingLeft:'15px', paddingBottom: '10px'}}>Account Name (Optional): </h4>
           <div   style={{width:'100%'}} className="input">
           <i className='fa fa-user' style={{ color:'rgba(154, 159, 191, 0.5)', fontSize: 23, position: 'relative', left: 22,zIndex:2, top:2}}></i>
        <input
        style={{width:'89%',minWidth:'300px'}}
          className="override"
          type="text"
          name="account_name"
          onChange={handleChange}
          placeholder="e.g. 07086968916"
        />
      </div>
    </div>
      </div>
 
  );
};

 
export default StoreName;

