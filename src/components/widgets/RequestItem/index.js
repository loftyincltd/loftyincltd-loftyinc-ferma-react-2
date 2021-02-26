import React from 'react';
import { useDispatch } from 'react-redux';
import { OPEN_ASIDE } from '../../../redux/application/action';
import AvatarImages from '../../AvatarImages';

const foo = ['#FAAD14', '#1890FF', '#13C2C2', '#EB2F96', '#52C41A'];

const RequestItem = (props) => {
  const { first_name, last_name, state, lga, person, title, address, occupation,phone } = props;
  const color = foo[Math.floor(Math.random() * 5)] || '#52C41A';
  const dispatch = useDispatch();
  const revealDetail = () =>
    dispatch(OPEN_ASIDE({ which: 'UserInfoAside', data: props }));

  return (
    <div className="RequestItem" onClick={revealDetail}>
      <h4>{first_name } {last_name}</h4>
      <h4 style={{color:'grey'}}> Occupation: {occupation}</h4>
      <h4 style={{color:'red'}}>Phone: {phone}</h4>
      <h4 style={{color:'#000'}}>Address: {address}</h4>
    </div>
  );
};

export default RequestItem;
