import React from 'react';
 import { useDispatch, useSelector } from 'react-redux';
 import { SET_PROJECT } from '../../../redux/application/action';
import FlatList from '../../../common/FlatList'; 
import prod from '../../../images/prod.svg';
import prod1 from '../../../images/prod1.svg';
import prod2 from '../../../images/prod2.svg';
import {useHistory} from 'react-router-dom';

const ProductLists = () => {

  const { projects } = useSelector((state) => state.app);
  return (
    <div className="ProductLists">
      <FlatList data={projects||[]} Child={ProductListItem} />
    </div>
  );
};

const ProductListItem = (props) => {
    const { title, description,id } = props;
    const dispatch = useDispatch();
    const history = useHistory();
  // const revealDetail = () =>
  //   dispatch(OPEN_ASIDE({ which: '', data: props }));

  return (
    <div className="ProductLists-Item" >
      <div className="detail">
        <h4>Name: {title}</h4>
        <small>Description: {description}
     
        </small>
      </div>
      <br/>
      <button      className={'btn primary'} style={{display:'block', width: 200, minWidth:200, height: 50}}
            onClick={()=>{
              dispatch(SET_PROJECT(props));
              history.push('/workers');
              
    
            }}
             
            >
              View Workers
        </button>
    </div>
  );
};
const data = [

];
export default ProductLists;
