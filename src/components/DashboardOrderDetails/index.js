import React from 'react';

const colors = {
  magenta: {
    a: '#EB2F96',
    b:
      'radial-gradient(50% 50% at 50% 50%, rgba(235, 47, 150, 0) 57.29%, rgba(235, 47, 150, 0.2) 100%)',
  },
};
const NameTag = ({ name, variant }) => {
  return (
    <div className="name-tag" >
      <div className="title"> {name || 'A'}</div>
    </div>
  );
};

export default NameTag;
