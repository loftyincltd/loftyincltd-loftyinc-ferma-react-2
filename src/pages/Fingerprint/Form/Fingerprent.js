import React, { useEffect, useState } from 'react';

export default function Fingerprent() {
  const click = function(event){
    event.preventDefault()
    
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <button className={'btn'} style={{ width: '200px', margin: '0 auto', marginBottom: '30px', backgroundColor: 'green' }} onClick={click}> 
        New Connection
      </button>
      <button className={'primary btn'} style={{ width: '200px', margin: '0 auto', marginBottom: '30px' }} onClick={click}>
        Capture Fingerprint
      </button>
      <button className={'btn'} style={{ width: '200px', margin: '0 auto', marginBottom: '30px', background: 'red' }}onClick={click} >
        Clear Fingerprint
      </button>
    </div>
  );
}
