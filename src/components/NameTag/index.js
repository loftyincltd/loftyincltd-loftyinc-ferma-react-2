import React from 'react';

const colors = {
  magenta: {
    a: '#EB2F96',
    b:
      'radial-gradient(50% 50% at 50% 50%, rgba(235, 47, 150, 0) 57.29%, rgba(235, 47, 150, 0.2) 100%)',
  },
  cyan: {
    a: '#13C2C2',
    b:
      'radial-gradient(50% 50% at 50% 50%, rgba(19, 194, 194, 0) 57.29%, rgba(19, 194, 194, 0.2) 100%)',
  },
  blue: {
    a: '#1890FF',
    b:
      'radial-gradient(50% 50% at 50% 50%, rgba(247, 153, 41, 0) 57.29%, rgba(249, 168, 25, 0.2) 100%)',
  },
  gold: {
    a: '#FAAD14',
    b:
      'radial-gradient(50% 50% at 50% 50%, rgba(247, 153, 41, 0) 57.29%, rgba(249, 168, 25, 0.2) 100%)',
  },
};
const NameTag = ({ name, variant }) => {
  return (
    <div
      className="name-tag"
      style={{ background: colors[variant || 'magenta']['b'] }}
    >
      <div
        className="title"
        style={{ background: colors[variant || 'magenta']['a'] }}
      >
        <p>{name || 'A'}</p>
      </div>
    </div>
  );
};

export default NameTag;
