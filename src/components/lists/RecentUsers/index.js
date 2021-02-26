import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import Requests from '../../widgets/RequestItem';
import FlatList from '../../../common/FlatList';

const data = [

];
const RecentUsers = () => {
  const { users,  } = useSelector((state) => state.app);
  return (
    <div className="Ongoing-Requests">
      <div style={{ 
            background: '#FFFFFF',
            borderRadius: '10px',
            padding: '15px',
            boxShadow: '0px 3px 12px 0px rgb(0 0 0 / 10%)',
            marginBottom: '24px',
            
      }}>
      <h3 style={{lineHeight:'100%', marginBottom:'0px',color:'red'}}>Total Added Users: <span style={{color:'#002244'}}>{users.length}</span></h3>
      </div>
      
      <h3>Recently Added Users:</h3>
      <div className="Ongoing-Requests-main">
        <FlatList data={users.slice(0,5)} Child={Requests} />
      </div>
    </div>
  );
};

export default RecentUsers;
