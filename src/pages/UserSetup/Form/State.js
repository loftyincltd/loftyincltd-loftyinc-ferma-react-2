import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HANDLE_CHANGE } from '../../../redux/authentication/action';
import FlatList from '../../../common/FlatList'; 
const district = require('../../../dist.json')

const State = () => {
  const { form } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    state: '',
  });
  useEffect(() => {
    if (!state.state ) {
         const fir = Object.keys(district)[0]
         setState({state: fir, district:district[fir][0]})
         dispatch(HANDLE_CHANGE({state: fir, district:district[fir][0], type:'customer'}));
    }
  }, []);
  const handleChange = ({ target: { name, value } }) => {
    const form = {};
    form[name] = value;
    if(name == 'state'){
      const cur = district[value.toString()];
      setState({state: value, district:cur[0]})
      dispatch(HANDLE_CHANGE({state: value, district:cur[0], type:'customer'}));
   //   form['district']= 
      
    }
    dispatch(HANDLE_CHANGE(form));
  };
  const OptionListItem = (data) => {
    data =Object.values(data).join('')
    return (
        <option value={data}>{data}</option>
    );
  };

  return (
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
          state.state?
          <div style={{marginTop: 10}}>
          <h4 style={{width:'100%', textAlign:'left', paddingLeft:'15px', paddingBottom: '10px'}}>Senatorial District: </h4>
          <select   id={'store'} 
          default={-1}
      // style={{width: "89%", color:'#000'}}
       style={{width:'89%',minWidth:'300px'}}
         value={form.district||''}
         onClick={() => {
             //
         }}
       onChange={handleChange} name="district"
         className={'active'}>
         <option disabled>Senetorial District</option>
         <FlatList data={district[state.state]} Child={OptionListItem} />
       
       </select>
       </div>:
       <></>
        }
    </div>
  );
};

const data = [
  {
    title: 'Owner',
    value: 'owner',
  },
  {
    title: 'Proxy',
    value: 'proxy',
  },
];

export default State;
