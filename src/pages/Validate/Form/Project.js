import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HANDLE_CHANGE } from '../../../redux/authentication/action';
import FlatList from '../../../common/FlatList'; 
const district = require('../../../dist.json')

const State = () => {
  const { form } = useSelector((state) => state.auth);
  const { projects, current_user } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    state: '',
  });
  useEffect(() => {
    if (current_user && projects && projects.length>0 ) {
         const fir = projects[0]
         setState({project_id:fir._id })
         dispatch(HANDLE_CHANGE({project_id:fir._id, user_id: current_user._id}));
    }
  }, []);
  const handleChange = ({ target: { name, value } }) => {
    const form = {};
    form[name] = value;
 
    dispatch(HANDLE_CHANGE(form));
  };
  const OptionListItem = (data) => {
    return (
        <option value={data._id}>{data.title}</option>
    );
  };

  return (
    <div>
           <h4 style={{width:'100%', textAlign:'left', paddingLeft:'15px', paddingBottom: '10px'}}>Project: </h4>
           <select   id={'store'} 
                style={{width:'89%',minWidth:'300px'}}
          value={form.project_id||''}
          onClick={() => {
           
          }}
        onChange={handleChange} name="project_id"
          className={'active'}>
          <option disabled>Select Project</option>
          <FlatList data={projects} Child={OptionListItem} />
        
        </select>
    </div>
  );
};



export default State;
