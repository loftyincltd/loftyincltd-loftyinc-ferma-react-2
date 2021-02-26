import React from 'react';
import AvatarTag from '../AvatarTag';
import { Progress } from 'antd';

const AvatarImages = ({ user, person }) => {
  return (
    <div className="ava-image">
    <AvatarTag user={user} />
   
  </div>
  );
};
 

export default AvatarImages;
