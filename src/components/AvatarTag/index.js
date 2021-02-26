import React from 'react';
import { useDispatch } from 'react-redux';
import { OPEN_ASIDE } from '../../redux/application/action';
import img1 from '../../images/aramide.svg';
import img2 from '../../images/ava1.svg';
import img3 from '../../images/ava2.svg';
import img4 from '../../images/ava3.svg'; 
import NameTag from '../NameTag';

const foo = ['gold', 'cyan', 'blue', 'magenta']; 
const foo2 = ['H', 'A', 'B', 'G','T','F']; 
const image = [img1,img2,img3,img4];

const AvatarTag = ({ user = ''}) => {
  const dispatch = useDispatch();
  const revealDetail = () =>
    dispatch(OPEN_ASIDE({ which:'ContactAside', data: user }));
  return (
    <div className="AvatarTag" onClick={revealDetail}>
      <NameTag variant={foo[Math.floor(Math.random() * 4)] || 'magenta' } name={foo2[Math.floor(Math.random() * 7)] || 'N' }  />
      <img src={image[Math.floor(Math.random() * 4)] || img4 } alt="k" />
      <p>{user}</p>
    </div>
  );
};

export default AvatarTag;
