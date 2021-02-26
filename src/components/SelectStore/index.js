import React from 'react';
import search from '../../images/search.svg';
import { useDispatch, useSelector } from 'react-redux';
import { HANDLE_CHANGE } from '../../redux/application/action';
import User from '../../images/ip.svg';
import { Link, Redirect } from 'react-router-dom';
import FlatList from '../../common/FlatList'; 


const OptionListItem = ({ name,value, message, image }) => {
    // const dispatch = useDispatch();
    // const revealDetail = () =>
    //   dispatch(OPEN_ASIDE({ which: '', data: props }));
  
    return (
        <option value={value}>{name}</option>
    );
  };
const SelectStore = () => {
    const { form } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const data =[{name:"Hi", value:0}, {name:"Hi DBDBDB",value:1},{name:"REMdmdm", value:2}]
    const data2 =[{name:"Hdlle", value:5}, {name:"Hi D33",value:3},{name:"wndndndn", value:4}]
    const handleChange = ({ target: { name , value}}) => {
        //  if(value && value.trim()!==""){
            const form = {};
            form[name] = value;
            dispatch(HANDLE_CHANGE(form));
        //  }
      
        };
  return (
    <div className="" style={{display:'flex', alignItems:'center',
     justifyContent:'space-between', padding:"0 10px", flexDirection:'row', }}>
       
        <select   id={'store'} 
        style={{width: "200px", color:'#000',marginTop:'10px' }}
          value={form.type||''}
          onClick={() => {
              //
          }}
        onChange={handleChange} name="type"
          className={'active'}>
          <option disabled>Select Store</option>
          <option disabled style={{paddingLeft:'20px', fontSize:'20px'}}>-------My Stores-------</option>
          <FlatList data={data} Child={OptionListItem} />
          <option disabled>-------External Stores-------</option>
          <FlatList data={data2} Child={OptionListItem} />
        
        </select>
        <Link style={{width: "60px", height:'48px', lineHeight:'48px', paddingTop:0, marginLeft: '10px',}} to={'/storesetup'}>+ Store</Link>
 
      </div>
  );
};

export default SelectStore;
