import React from 'react';
import { useDispatch } from 'react-redux';
import { OPEN_ASIDE } from '../../../redux/application/action';
import FlatList from '../../../common/FlatList';
import AvatarTag from '../../AvatarTag';

const MessageLists = () => {
  return (
    <div className="MessageLists">
      <FlatList data={data} Child={MessageListItem} />
    </div>
  );
};
const MessageListItem = (props) => {
  const { order, user, message, time, unread } = props;
  const dispatch = useDispatch();
  const revealDetail = () =>
    dispatch(OPEN_ASIDE({ which: 'ChatAside', data: props }));
  return (
    <div className="MessageLists-Item" onClick={revealDetail}>
      <div className="detail">
        <AvatarTag />
        <div className="info">
          <small>{order}</small>
          <h5>{user}</h5>
          <p>{message}</p>
        </div>
      </div>
      <div className="time">
        <small>{time}</small>
        <span>{unread}</span>
      </div>
    </div>
  );
};
const data = [
  {
    order: 'Indomie Order',
    user: 'Oghenekaro Okwe',
    message: 'The guy is on his way',
    time: 'now',
    unread: '4',
  },
  {
    order: 'Sodiq Oyebola',
    user: 'KFC Order',
    message: 'I don buy am',
    time: 'now',
    status: 'ongoing',
    unread: '2',
  },
  {
    order: 'Staple Documents',
    user: 'Nina Moronkola',
    message: 'I dey come',
    time: 'now',
    status: 'successful',
    unread: '3',
  },
  {
    order: 'Pick up sister',
    user: 'Sola Moronkola',
    message: 'Okay I’ll see you there !',
    time: 'now',
    status: 'ongoing',
    unread: '6',
  },
  {
    order: 'Something Different',
    user: 'Babajide Oloko',
    message: 'Okay I’ll see you there !',
    time: 'now',
    status: 'successful',
    unread: '3',
  },
  {
    order: 'School Confirmation',
    user: 'Ifeoluwa Onigbinde',
    message: 'I dey come',
    time: 'now',
    status: 'unsuccessful',
    unread: '6',
  },
];
export default MessageLists;
