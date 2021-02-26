import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector,} from 'react-redux'
import { HANDLE_CHANGE, FETCH_USER, CLEAR } from '../../redux/usersetup/action'; 
import search from '../../images/search.svg';
import { SET_FILTERED_USERS } from '../../redux/application/action'; 
import FlatList from '../../common/FlatList'; 
const district = require('../../dist.json');

const OptionListItem = (data) => {
  data =Object.values(data).join('')
  return (
      <option value={data}>{data}</option>
  );
};
const Filter = () => {
  const dispatch = useDispatch();
  const { form, } = useSelector((state) => state.usersetup);
  const [state, setState] = useState({
    state: '',
  });
  const handleChange = ({ target: { name, value } }) => {
    const form = {};
    form[name] = value;
    if(name == 'state'){
      const cur = district[value.toString()];
      dispatch(HANDLE_CHANGE({state: value, district:cur[0], type:'customer'}));
   //   form['district']= 
      
    }
    dispatch(HANDLE_CHANGE(form));
  };
  useEffect(() => {
      if(!form.state){
        const fir = Object.keys(district)[0]
        dispatch(HANDLE_CHANGE({state: fir, district:district[fir][0], type:'customer'}));
       console.log(form)
      }  
      
      if(!form.district){
        if(form.state){
          dispatch(HANDLE_CHANGE({state: form.state, district:district[form.state][0], type:'customer'}));
        }else{
          const fir = Object.keys(district)[0]
          dispatch(HANDLE_CHANGE({state: fir, district:district[fir][0], type:'customer'}));
        }
    
      }
   
      console.log(form)
  }, []);
  return (
    <div style={{}}>
            <form id="filter-form">
            <div>
           <h4 style={{width:'100%', textAlign:'left', paddingLeft:'15px', paddingBottom: '10px'}}>State: </h4>
           <select   id={'store'} 
                style={{width:'89%',minWidth:'300px', marginBottom:10}}
          value={form.state||''}
          onClick={() => {
           
          }}
        onChange={handleChange} name="state"
          className={'active'}>
          <option disabled>Select State</option>
          <FlatList data={Object.keys(district)} Child={OptionListItem} />
        
        </select>

        {
          form.state?
          <div style={{marginTop: 10}}>
          <h4 style={{width:'100%', textAlign:'left', paddingLeft:'15px', paddingBottom: '10px'}}>Senetorial District: </h4>
          <select   id={'store'} 
      // style={{width: "89%", color:'#000'}}
       style={{width:'89%',minWidth:'300px'}}
         value={form.district||''}
         onClick={() => {
             //
         }}
       onChange={handleChange} name="district"
         className={'active'}>
         <option disabled>Senetorial District</option>
         <FlatList data={district[form.state]} Child={OptionListItem} />
       
       </select>
       </div>:
       <></>
        }
    </div>
    <div style={{padding:0}}>
       <h4 style={{width:'100%', textAlign:'left', paddingLeft:'15px', paddingBottom: '10px'}}>Occupation: </h4>
           <div   style={{width:'100%'}} className="input">
           <i className='fa fa-user' style={{ color:'rgba(154, 159, 191, 0.5)', fontSize: 23, position: 'relative', left: 22,zIndex:2, top:2}}></i>
        <input
        style={{width:'89%',minWidth:'300px'}}
          className="override"
          type="text"
          name="occupation"
          onChange={handleChange}
          placeholder="e.g. John"
        />
      </div>
    </div>

            </form>
      

    <button
     className={'btn'}
        style={{  background:'blue', height: '56px'}} onClick={()=>{
        
          const form2 = {
            type: 'customer', 
            all: true, download: false
          }
          if(form.occupation  && form.occupation.trim()!==""){
             form2. occupation = form.occupation;
          }
          if(form.state){
            form2.state = form.state;
         }
         if(form.district){
          form2. district = form.district;
         }
          const f ={loading: true}
        //  dispatch(CLEAR())
          dispatch(HANDLE_CHANGE(f));
          dispatch(HANDLE_CHANGE(form2));
           dispatch(FETCH_USER(form2)).then((resp)=>{
            const f ={loading: false}
            dispatch(HANDLE_CHANGE(f));
            if(resp &&resp.success){
          //    dispatch(CLEAR())
              dispatch(SET_FILTERED_USERS(resp.success));
      
            }
          }); 
        
        }}>
        Filter

        </button>
        <br/>

    </div>
    
  );
};

export default Filter;
