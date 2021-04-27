import React, { useEffect, useState } from 'react';

export default function Fingerprent() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <button className={'btn'} style={{ width: '200px', margin: '0 auto', marginBottom: '30px', backgroundColor: 'green' }}>
        New Connection
      </button>
      <button className={'primary btn'} style={{ width: '200px', margin: '0 auto', marginBottom: '30px' }} >
        Capture Fingerprint
      </button>
      <button className={'btn'} style={{ width: '200px', margin: '0 auto', marginBottom: '30px', background: 'red' }} >
        Clear Fingerprint
      </button>
    </div>
  );
}
