import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HANDLE_CHANGE } from '../../../redux/usersetup/action'; 
import image from '../../../images/storeaa.svg'; 
import {DatePicker} from 'antd';
import moment from 'moment';


const StoreName = () => {
  const dispatch = useDispatch();
  const { form, } = useSelector((state) => state.usersetup);
  const handleChange = (date, dateString) => {
    const form = {};
    console.log(date, dateString)
   // console.log(d);
    form['dob'] = date;
    dispatch(HANDLE_CHANGE(form));
  };

  return (
    <div className={'antd'}>
       <h4 style={{width:'100%', textAlign:'left', paddingLeft:'15px', paddingBottom: '10px'}}>Date of birth: </h4>
           <div   style={{width:'100%'}} >
           <i className='fa fa-calendar' style={{ color:'rgba(154, 159, 191, 0.5)', fontSize: 23, position: 'relative', left: 20,zIndex:2, top:5}}></i>
           <DatePicker
                style={{width:'89%',minWidth:'300px', paddingLeft: 50, paddingTop:10,
                borderRadius:10,marginLeft:-20,height:50, marginBottom: 20 }}
    showTime
    format="YYYY-MM-DD"
    placeholder="Set Date of birth"
    value={ moment(form.dob)}
    //defaultValue={moment()} //moment(deadline) returns valid moment date objcect
   // onChange={handleChange}
    onChange={(date, dateString) => handleChange(date, dateString, 1)}
    name={'dob'}
/>
      </div>
    </div>
  );
};

 
export default StoreName;

