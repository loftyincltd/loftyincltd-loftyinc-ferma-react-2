import React, { useEffect, useState } from 'react';
import { FingerprintReader, QualityCode, SampleFormat } from '@digitalpersona/devices';
export default function Fingerprent() {
  const reader = new FingerprintReader();
  const updateReaderStatus = async () => {
    try {
      const devices = await reader.enumerateDevices();
      console.log(devices);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };
reader.onSamplesAcquired = (data) => {
    const png = data.samples[0];
    console.log(png)
   console.log(png.Data);
}
  const capture = async (event) => {
    event.preventDefault();
    try {
      await reader.startAcquisition(SampleFormat.PngImage);
    } catch (err) {
      console.log(err);
    }
  };

  const click = function (event) {
    event.preventDefault();
    updateReaderStatus();
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <button className={'btn'} style={{ width: '200px', margin: '0 auto', marginBottom: '30px', backgroundColor: 'green' }} onClick={click}>
        New Connection
      </button>
      <button className={'primary btn'} style={{ width: '200px', margin: '0 auto', marginBottom: '30px' }} onClick={capture}>
        Capture Fingerprint
      </button>
      <button className={'btn'} style={{ width: '200px', margin: '0 auto', marginBottom: '30px', background: 'red' }} onClick={click}>
        Clear Fingerprint
      </button>
    </div>
  );
}
