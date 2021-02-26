import React,{useState, useEffect} from 'react';
import FlatList from '../../../common/FlatList';
import { CHANGE_CURRENT_TAB } from '../../../redux/application/action'
import { useDispatch, useSelector } from 'react-redux';

const TabsWidget = ({ type = 'b' }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const f ={list:data[type], current:0 }
    dispatch(CHANGE_CURRENT_TAB(f));
  }, [])

  return (
    <div className="TabsWidget">
      <FlatList data={data[type]} Child={TabsWidgetItem} />
    </div>
  );
};

const TabsWidgetItem = ({ title, key }, ind) => {
  const dispatch = useDispatch();
  const { tab } = useSelector((state) => state.app);
  const index = tab.list.findIndex(element=> element.title === title)
  console.log(index, tab)
  return (
    <div className={`TabsWidget-Item ${index == tab.current ? 'active' : ''}`} onClick={
      ()=>{
      //  const a = data.find()
    
        const f ={current:index}
        dispatch(CHANGE_CURRENT_TAB(f));
      }
    }>
      <h6>{title}</h6>
    </div>
  );
};

const data = {
  a: [
    { title: 'All' },
    { title: 'Ongoing' },
    { title: 'Successful' },
    { title: 'Unsuccessful' },
  ],
  b: [{ title: 'All' }, { title: 'Unread' }, { title: 'Read' }],
  c: [{ title: 'Profile' }, { title: 'FAQ' }],
  d: [
    { title: 'Active' },
    { title: 'Pending Activation' },
  ],
};

export default TabsWidget;
