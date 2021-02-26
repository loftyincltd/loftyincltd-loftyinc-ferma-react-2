import React from 'react';
import { useDispatch } from 'react-redux';
import { OPEN_ASIDE } from '../../../redux/application/action';
import img4 from '../../../images/ava3.svg';
import cam from '../../../images/cam.svg';
import mic from '../../../images/mic.svg';
import smile from '../../../images/smile.svg';

const ChatAside = ({ data, Child }) => {
  const dispatch = useDispatch();
  const revealDetail = () =>
    dispatch(OPEN_ASIDE({ which: 'ContactAside', data: { user: 'Oghenekaro Okwe'} }));
  return (
    <div className="dashboard-aside p-0">
      <div className="ChatAside">
        <div className="ChatAside-header">
          <img src={img4} alt="k" onClick={revealDetail} />
          <p>Oghenekaro Okwe</p>
        </div>
        <div className="ChatAside-body">
      
        </div>
        <div className="ChatAside-footer">
        <img src={cam} alt="k" className='cam' />
          <input type="text" placeholder='Type something here…' />
          <img src={smile} alt="k" className='smile' />
          <img src={mic} alt="k" className='mic' />
        </div>
      </div>
    </div>
  );
};

export default ChatAside;
