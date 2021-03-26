import axios from 'axios';
import { LOGIN,  } from '../application/action';
import { SEND_OTP, GET_MY_DETAILS } from './action';
import { Redirect } from 'react-router-dom';
import { errorNotification, successNotification } from '../store';


const api = (store) => (next) => async (action)  => {
  let response;
  async function post(url, body, callback)  {
    callback = typeof callback === 'function'?
    callback: function(){};
    try {
      const response = await axios.post(
        'http://3.8.182.114:3003/v1' + url,
        body
      ); 
      return callback(false, response);
    } catch (error) {
      console.log(error)
      callback(error);
    }
  }

  async function get(url, body, with_token, callback)  {
    callback = typeof callback === 'function'?
    callback: function(){};
    let token ='';
    let config ={ params: body,};
    
    if(with_token){
      token = window.localStorage.getItem('user_token');
      config={
        params: body,
        headers: {
          'Authorization': 'Bearer '+token
        }
      }
    }
    try {
      const response = await axios.get(
        'http://3.8.182.114:3003/v1' + url, config
       
      ); 
      return callback(false, response);
    } catch (error) {
      console.log(error)
      callback(error);
    }
  }
  switch (action.type) {
    case 'SIGN_UP':
      return post('/auth/user/signup', { ...store.getState().auth.form}, function(error, response){
         if(error){
           errorNotification( 'A User has been registered with this email address, please try again with another one ');
           console.log(error);
         } else{
         window.localStorage.setItem('user_token', response.data['user_token']);
         next(GET_MY_DETAILS());
         return  response.data['user_token'];
         }
      });
      case 'RESEND_OTP':
       return post('/auth/user/resendverify', {email: action.payload.email, 
        type: action.payload.type}, function(error, response){
           if(error){
            errorNotification( 'Server Errror');
            return
           } else{
            //window.localStorage.setItem('user_token', response.data['user_token']);
          //  return next(SEND_OTP(response));
          if(response.data.success){
            successNotification( 'An otp has been sent to your email address ');
          }else{
            errorNotification( 'Unable to send Verification token');
          }
          
            return
           }
        });
      
      
       
    case 'VERIFY_OTP':
      return post('/auth/user/email', {email: action.payload.email, 
        token: action.payload.token, type: action.payload.type}, function(error, response){
        if(error){
          if(error.status === 403){
            errorNotification( 'Token is not valid');
          }else{
            errorNotification( 'Token is not valid');
          }
        
          console.log(error);
          return
        } else{
       
         if(typeof response.data.error === 'undefined') { 
          // window.localStorage.setItem('user_token', response.data['user_token']); 
           //return next(LOGIN(response.data));  

           if(response.data.user_token){
              return next(LOGIN(response.data));  
          }else{
            errorNotification( 'Unable to send Verification token');
          }
           return
         }else {
           errorNotification(response.data.error || 'Wrong user type');
           return
         }
   
        }
     }); 
    
       

    case 'SIGN_IN':
    return post('/auth/user/login', store.getState().auth.form, function(error, response){
      console.log( store.getState().auth.form)
         if(error){
          errorNotification( 'Server Errror');
           console.log(error);
           return
         } else{
        
          if(!response.data.error) { 

            window.localStorage.setItem('user_token', response.data['user_token']);
            next(GET_MY_DETAILS());
            return  response.data['user_token'];
          }else {
            errorNotification(response.data.error || 'Wrong user type');
            return
          }
    
         }
      }); 

    

    case 'GET_MY_DETAILS':
    
      return    get('/auth/user/login', {},true, function(error, response){
          if(error){
           errorNotification( 'Server Errror');
            console.log(error);
            return
          } else{
         
           if(typeof response.data.error === 'undefined') { 
             //fetch store
             
            // window.localStorage.setItem('user_token', response.data['user_token']); 
             return next(LOGIN(response.data)); 
           }else {
             errorNotification(response.data.error || 'Wrong user type');
             return
           }
     
          }
       }); 
    
      
     
      
      
    case 'LOGIN':
      return next(action);
    default:
      return next(action);
  }
};

export default  api;