import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HANDLE_CHANGE, CLEAR } from '../../../redux/usersetup/action'; 
import { FingerprintReader, QualityCode, SampleFormat } from '@digitalpersona/devices';


export default function Fingerprint() {
  const { form, } = useSelector((state) => state.usersetup);
  const [captured, setCaptured] = useState(false)
  const [b64, setB64] = useState("")
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
   form['fingerprint'] = data.samples[0];
   setCaptured(true)
   const b64 = Base64DecodeUrl('data:image/png;base64,'+data.samples[0]);
   setB64(b64);
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
 const Base64EncodeUrl= function(str){
    return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
  }
  const Base64DecodeUrl = function(str){
    str = (str + '===').slice(0, str.length + (str.length % 4));
    return str.replace(/-/g, '+').replace(/_/g, '/');
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      { captured && b64? <img src={b64} className="fingerprint-image" /> : <div/>}
      <button className={'btn'} style={{ width: '200px', margin: '0 auto', marginBottom: '30px', backgroundColor: 'green' }} onClick={click}>
        Reload Conection
      </button>
      <button className={'primary btn'} style={{ width: '200px', margin: '0 auto', marginBottom: '30px' }} onClick={capture}>
        Capture Fingerprint
      </button>
    </div>
  );
}
