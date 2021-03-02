import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'
import { HANDLE_CHANGE, CLEAR } from '../../../redux/usersetup/action'; 
import image from '../../../images/storeaa.svg'; 
import { FingerprintReader, QualityCode, ErrorOccurred, SampleFormat } from '@digitalpersona/devices';

const StoreName = () => {

  const { form, } = useSelector((state) => state.usersetup);
  const dispatch = useDispatch();
 let reader=null;
 const [state, setState] = useState({
  step: 0,devices:[]
}); 
const isReaderConnected = false;
reader = new  FingerprintReader();
reader.onDeviceConnected = async (device) => {
     const devices = await reader.enumerateDevices();
     setState({
       devices: devices,
     })

};
reader.onDeviceDisconnected = async (device) => {
const devices = await reader.enumerateDevices();
setState({
  devices: devices,
})
};
reader.onQualityReported = async (quality) => {
console.log(quality.quality)
};
reader.onSamplesAcquired = async (data) => {
 // await this.submit(data.samples);
  //this.$scope.$applyAsync();
  console.log(data.samples)
  const form = {};
  form['fingerprint_data'] = data.samples[0];
  dispatch(HANDLE_CHANGE(form));

  /** try {
            const samples = event.samples;
            const api = new FingerprintsAuth( );
            const token = await (
                this.identity ? 
                    api.authenticate(this.identity, samples):
                    api.identify(samples));
          
            this.notifyOnToken(token);
        }
        catch (error) {
           console.log(error)
        }**/

};

reader.onErrorOccurred = (reason) => {
console.log(reason)
};
  useEffect(() => {
 
    
  }, []);
  const handleChange = ({ target: { name, value } }) => {
    const form = {};
    form[name] = value;
    dispatch(HANDLE_CHANGE(form));
  };
const capture = function () {
  reader.startAcquisition(SampleFormat.PngImage);
}
const clear = function () {
  reader.startAcquisition(SampleFormat.PngImage);
}
  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center',
    flexDirection:'column'}}>
      {
        state.devices &&      state.devices.length === 0?
        <h6 style={{fontSize:'22px', paddingBottom:'0px', color:'red'}}>Fingerprint Device Disconnected</h6>: 
          <h6 style={{fontSize:'22px', paddingBottom:'0px', color:'green'}}>Fingerprint Device Connected</h6>
       
      }

{
        ((state.devices &&      state.devices.length != 0) && !form.fingerprint_data) ?
        <button
        className={'primary btn'}
        style={{width:'200px', margin:'0 auto', marginBottom: '30px'}} onClick={capture}>
          {form.loading?<i className="fa fa-spinner fa-spin" style={{marginRight:'10px'}}></i>:<></>}
           Capture Fingerprint
        </button>
       : 
          <div/>
       
      }


{
       ( (state.devices &&      state.devices.length != 0) && form.fingerprint_data)?
        <button
        className={'btn'}
        style={{width:'200px', margin:'0 auto', marginBottom: '30px', background:'red'}} onClick={clear}>
          {form.loading?<i className="fa fa-spinner fa-spin" style={{marginRight:'10px'}}></i>:<></>}
           Clear Fingerprint
        </button>
       : 
          <div/>
       
      }

         {
           form && form.fingerprint_data?
           <h6 style={{fontSize:'22px', paddingBottom:'0px', color:'blue'}}>Fingerprint Data Captured</h6>: <div/>
         }
    </div>
  );
};

 
export default StoreName;

