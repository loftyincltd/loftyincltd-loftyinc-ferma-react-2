import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { HANDLE_CHANGE } from '../../../redux/usersetup/action'; 
import image from '../../../images/storeaa.svg'; 
import { FingerprintReader, QualityCode, ErrorOccurred } from '@digitalpersona/devices';

const StoreName = () => {
  const dispatch = useDispatch();
 let reader=null;
 const [state, setState] = useState({
  step: 0,devices:[]
}); 
const isReaderConnected = false;
  useEffect(() => {
    reader = new  FingerprintReader();
    reader.onDeviceConnected = async (device) => {
         const devices = await reader.enumerateDevices();
         console.log(devices);
         setState({
           devices: devices,
         })

  };
  reader.onDeviceDisconnected = async (device) => {
    const devices = await reader.enumerateDevices();
    console.log(devices);
    setState({
      devices: devices,
    })
  };
  reader.onQualityReported = async (quality) => {
    const devices = await this.reader.enumerateDevices();
    console.log(devices)
    console.log(quality.quality)
  };
  reader.onSamplesAcquired = async (data) => {
     // await this.submit(data.samples);
      //this.$scope.$applyAsync();
      console.log(data.samples)
  };
  reader.onErrorOccurred = (reason) => {
    console.log(reason)
  };
    
  }, []);
  const handleChange = ({ target: { name, value } }) => {
    const form = {};
    form[name] = value;
    dispatch(HANDLE_CHANGE(form));
  };

  return (
    <div>
      {
        state.devices &&      state.devices.length === 0?
        <h6 style={{fontSize:'22px', paddingBottom:'0px', color:'red'}}>Fingerprint Device Disconnected</h6>: 
          <h6 style={{fontSize:'22px', paddingBottom:'0px', color:'green'}}>Fingerprint Device Connected</h6>
       
      }
      

           <div   style={{width:'100%'}} className="input">
           <i className='fa fa-user' style={{ color:'rgba(154, 159, 191, 0.5)', fontSize: 23, position: 'relative', left: 22,zIndex:2, top:2}}></i>
        <input
        style={{width:'89%',minWidth:'300px'}}
          className="override"
          type="text"
          name="phone"
          onChange={handleChange}
          placeholder="e.g. 07086968916"
        />
      </div>
    </div>
  );
};

 
export default StoreName;

