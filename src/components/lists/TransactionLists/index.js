import React, {} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { OPEN_ASIDE, } from '../../../redux/application/action';
import FlatList from '../../../common/FlatList';
import AvatarTag from '../../AvatarTag';


const typeTags = {
  admin: {
    title: 'Admin',
    color: '#52C41A',
  },

  user: {
    title: 'User',
    color: '#FA541C',
  },
  project: {
    title: 'Project',
    color: '#722ED1',
  },
};
 
const TransactionLists = () => {
  const { users, admins } = useSelector((state) => state.app);
  return (
    <div className="TransactionLists">
      <FlatList data={admins} Child={TransactionListItem} />
    </div>
  );
};
const TransactionListItem = (props) => {
  const { last_name, first_name, username, state, district, } = props;
  const dispatch = useDispatch();
  const revealDetail = () =>
    dispatch(OPEN_ASIDE({ which: 'AdminInfoAside', data: props }));

  return (
    <div className="TransactionLists-Item" onClick={revealDetail}>
      <div className="detail">
      
        <h5>First Name:  {first_name}</h5>
        <h5>Last Name: {last_name} </h5>
        <h5 style={{color:'green'}}>Username: {username} </h5>
        <h5 style={{color:'black'}}>State: {state} </h5>
        <h5 style={{color:'red'}}>District: {district} </h5>

        <Tags {...props}  />
      </div>

    </div>
  );
};
const Tags = ({ type, status }) => {
  return (
    <div className="tags">
      <div
        className="tag"
        style={{
          backgroundColor: typeTags[type].color + '' + 61,
          color: typeTags[type].color,
        }}
      >
        {typeTags[type].title}
      </div>

    </div>
  );
};

export default TransactionLists;
