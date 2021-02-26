import React from 'react';
import { useDispatch } from 'react-redux';
import { OPEN_ASIDE } from '../../../redux/application/action';
import cancel from '../../../images/cancel.svg';
import local_phone from '../../../images/local_phone.svg';
import message from '../../../images/message.svg';
import user from '../../../images/user.svg';
import FlatList from '../../../common/FlatList';

const data = {
  a: [
    { image: local_phone, title: 'Call' },
    { image: message, title: 'Message' },
    { image: user, title: 'Profile' },
    { image: cancel, title: 'Cancel' },
  ],
  b: [
    { image: local_phone, title: 'Call' },
    { image: message, title: 'Message' },
  ],
};
const ActionWidget = ({ type }) => {
  return (
    <div className="ActionWidget">
      <FlatList data={data[type || 'a']} Child={ActionWidgetItem} />
    </div>
  );
};
const ActionWidgetItem = ({ image, title }) => {
  const dispatch = useDispatch();
  const sendMessage = () =>
    dispatch(OPEN_ASIDE({ which: 'ChatAside', data: {} }));

  const actions = {
    'Message': sendMessage
  } 
  return (
    <div className="ActionWidget-item" onClick={actions[title]}>
      <span>
        <img src={image} alt="k" />
      </span>
      <p> {title}</p>
    </div>
  );
};

export default ActionWidget;
