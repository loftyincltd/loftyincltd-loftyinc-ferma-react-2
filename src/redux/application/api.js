import axios from 'axios'; 
import { errorNotification } from '../store';

const api = (store) => (next) => async (action)  => {
  let response;
  async function post(url, body, callback)  {
    callback = typeof callback === 'function'?
    callback: function(){};
    try {
      const response = await axios.post(
        'http://3.138.202.26:3075/v1' + url,
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
  }
  switch (action.type) {
        

    case 'GET_MY_STORES':
    
      return    get('/api/stores/all', {mine: true},true, function(error, response){
          if(error){
           errorNotification( 'Server Errror');
            console.log(error);
            return
          } else{
         
           if(typeof response.data.error === 'undefined') { 
             //fetch store
             
            // window.localStorage.setItem('user_token', response.data['user_token']); 
            // return next(LOGIN(response.data)); 
           }else {
             errorNotification(response.data.error || 'Wrong user type');
             return
           }
     
          }
       }); 

       case 'GET_EXTERNAL_STORES':
    
        return    get('/api/stores/all', {mine: true},true, function(error, response){
            if(error){
             errorNotification( 'Server Errror');
              console.log(error);
              return
            } else{
           
             if(typeof response.data.error === 'undefined') { 
               //fetch store
               
              // window.localStorage.setItem('user_token', response.data['user_token']); 
              // return next(LOGIN(response.data)); 
             }else {
               errorNotification(response.data.error || 'Wrong user type');
               return
             }
       
            }
         }); 
    
    default:
      return next(action);
  }
};

export default  api;