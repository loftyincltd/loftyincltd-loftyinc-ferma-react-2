import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_ASIDE } from '../../redux/application/action';
import FlatList from '../../common/FlatList';
import { Radio, Input } from 'antd';
import { SET_FILER_TYPE } from '../../redux/application/action'; 

const RadioOptions = ({ data , default_val }) => {
  const { filter_type } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  // const revealDetail = () => dispatch(OPEN_ASIDE({ which, data: props }));
  const onChange = (e) => {
     dispatch(SET_FILER_TYPE(e.target.value))
  };
  return (
    <div className="RadioOptions" > 
      <Radio.Group onChange={onChange} value={filter_type ||'search'} style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap'}}>
        <FlatList data={data} Child={RadioOptionsItem} />
      </Radio.Group>
    </div>
  );
};

const RadioOptionsItem = (props) => {
  const { title, value } = props;
  return (
    <div className="RadioOptionsItem" style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}} >
      <Radio value={value} >
        <h5>{title}</h5>
      </Radio>
    </div>
  );
};

export default RadioOptions;
