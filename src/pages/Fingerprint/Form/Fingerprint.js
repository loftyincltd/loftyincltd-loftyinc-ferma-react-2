import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { HANDLE_CHANGE, CLEAR } from '../../../redux/usersetup/action'; 
import { FingerprintReader, QualityCode, SampleFormat } from '@digitalpersona/devices';
export default function Fingerprint() {
  const dispatch = useDispatch();
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


reader.onSamplesAcquired = async (data) => {
   const form = {};
   console.log(data.samples[0])
   form['fingerprint'] = data.samples[0].Data;
   console.log(form)
   dispatch(HANDLE_CHANGE(form));
 
 };
 
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
        Reload Conection
      </button>
      <button className={'primary btn'} style={{ width: '200px', margin: '0 auto', marginBottom: '30px' }} onClick={capture}>
        Capture Fingerprint
      </button>
    </div>
  );
}
