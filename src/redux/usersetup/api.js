import axios from 'axios';
import { errorNotification, successNotification } from '../store';

const FileDownload = require('js-file-download');



const api = (user) => (next) => async (action)  => {

  let response;
  async function post(url, body, callback)  {
    delete body.loading;
    const token = window.localStorage.getItem('user_token');
    const  config={
        headers: {
          'Authorization': 'Bearer '+token
        }
      }
    callback = typeof callback === 'function'?
    callback: function(){};
    try {
      const response = await axios.post(
        'http://3.138.202.26:3075/v1' + url,
        body, config
      ); 
      return callback(false, response);
    } catch (error) {
      callback(error);
    }
  }
  async function put(url, body, callback)  {
    delete body.loading;
    const token = window.localStorage.getItem('user_token');
    const  config={
        headers: {
          'Authorization': 'Bearer '+token
        }
      }
    callback = typeof callback === 'function'?
    callback: function(){};
    try {
      const response = await axios.put(
        'http://3.138.202.26:3075/v1' + url,
        body, config
      ); 
      return callback(false, response);
    } catch (error) {
      callback(error);
    }
  }

  async function get(url, body,  callback)  {
    callback = typeof callback === 'function'?
    callback: function(){};
    let token ='';
       console.log(body)
    if(!body.q ){
      delete body.q;
    }
    delete body.loading 
    let config ={ params: body,};
 
      token = window.localStorage.getItem('user_token');
      config={
        params: body,
        headers: {
          'Authorization': 'Bearer '+token
        }
      
    }
    try {
      const response = await axios.get(
        'http://3.138.202.26:3075/v1' + url, config
       
      ); 
      return callback(false, response);
    } catch (error) {
      callback(error);
    }
  }

  async function del(url, body,  callback)  {
    callback = typeof callback === 'function'?
    callback: function(){};
    let token ='';
    let config ={ params: body,};
    

      token = window.localStorage.getItem('user_token');
      config={
        params: body,
        headers: {
          'Authorization': 'Bearer '+token
        }
      
    }
    try {
      const response = await axios.delete(
        'http://3.138.202.26:3075/v1' + url, config
       
      ); 
      return callback(false, response);
    } catch (error) {
      callback(error);
    }
  }

  async function del2(url, body,  callback)  {
    callback = typeof callback === 'function'?
    callback: function(){};
    let token ='';
       console.log(body)
    if(!body.q ){
      delete body.q;
    }
    delete body.loading 
    let config ={ params: body,};
 
      token = window.localStorage.getItem('user_token');
      config={
        params: body,
        headers: {
          'Authorization': 'Bearer '+token
        }
      
    }
    try {
      const response = await axios.delete(
        'http://3.138.202.26:3075/v1' + url, config
       
      ); 
      return callback(false, response);
    } catch (error) {
      callback(error);
    }
  }

  switch (action.type) {

    case 'USER_ADD':
      const data = user.getState().usersetup.form;
      data.type ='customer'
    return post('/auth/user/signup', data, function(error, response){
    
         if(error){
          if(error.message.toLowerCase() === "network error"){
           return  {error:"network"};
      
          }else{
            errorNotification( 'Server Errror');
            return {error};
          }
         
        
         } else{
        
          if(!response.data.error) { 
           // window.localStorage.setItem('user_token', response.data['user_token']);
          //  next(GET_MY_DETAILS());
          return  {success:response.data.success};
          }else {
            errorNotification(response.data.error || 'Wrong user type');
            return  {error:response.data.error};

          }
    
         }
      }); 

      case 'USER_ADD_Q':
        const data_q = user.getState().usersetup.q_form;
        data_q.type ='customer'
      return post('/auth/user/signup', data_q, function(error, response){
      
           if(error){
            if(error.message.toLowerCase() === "network error"){
             return  {error:"network"};
        
            }else{
              errorNotification( 'Server Errror');
              return {error};
            }
           
          
           } else{
          
            if(!response.data.error) { 
             // window.localStorage.setItem('user_token', response.data['user_token']);
            //  next(GET_MY_DETAILS());
            return  {success:response.data.success};
            }else {
              errorNotification(response.data.error || 'Wrong user type');
              return  {error:response.data.error};
  
            }
      
           }
        }); 

      case 'USER_UPDATE':
        const data2 = user.getState().usersetup.form;
      return put('/auth/user', data2, function(error, response){
           if(error){
            errorNotification( 'Server Errror');
             console.log(error);
             return
           } else{
          
            if(!response.data.error) { 
               console.log(user.data)
             // window.localStorage.setItem('user_token', response.data['user_token']);
            //  next(GET_MY_DETAILS());
            return  {success:response.data.success};
            }else {
              errorNotification(response.data.error || 'Wrong user type');
              return  {error:response.data.error};
  
            }
      
           }
        }); 

      case 'PASSWORD_CHANGE':
        const da = user.getState().usersetup.form;
        let b ={old: da.old,password: da.password }
      return post('/auth/user/changePass', b, function(error, response){
           if(error){
            errorNotification( 'Server Errror');
             console.log(error);
             return
           } else{
          
            if(!response.data.error) { 
               console.log(user.data)
             // window.localStorage.setItem('user_token', response.data['user_token']);
            //  next(GET_MY_DETAILS());
            return  {success:response.data.success};
            }else {
              errorNotification(response.data.error || 'Wrong user type');
              return  {error:response.data.error};
  
            }
      
           }
        }); 
  

      case 'ADMIN_ADD':
        const data1 = user.getState().usersetup.form;
        data1.type ='admin'
        console.log(data1)
         return post('/auth/user/signup', data1, function(error, response){
             if(error){
              errorNotification( 'Duplicate Username or Server Error');
               return
             } else{
            
              if(!response.data.error) { 
               // window.localStorage.setItem('user_token', response.data['user_token']);
              //  next(GET_MY_DETAILS());
              return  {success:response.data.success};
              }else {
                errorNotification(response.data.error || 'Wrong user type');
                return  {error:response.data.error};
    
              }
        
             }
          }); 

          case 'PROJECT_ADD':
             return post('/api/project',  user.getState().usersetup.form, function(error, response){
                 if(error){
                  errorNotification( 'Server Error');
                   return
                 } else{
                
                  if(!response.data.error) { 
                   // window.localStorage.setItem('user_token', response.data['user_token']);
                  //  next(GET_MY_DETAILS());
                  return  {success:response.data.success};
                  }else {
                    errorNotification(response.data.error || 'Wrong user type');
                    return  {error:response.data.error};
        
                  }
            
                 }
              }); 

              case 'WORKER_ADD':
                return post('/api/worker',  user.getState().usersetup.form, function(error, response){

                    if(error){
                     errorNotification( 'This user is already added to this project');
                      return
                    } else{
                   
                     if(!response.data.error) { 
                      // window.localStorage.setItem('user_token', response.data['user_token']);
                     //  next(GET_MY_DETAILS());
                     return  {success:response.data.success};
                     }else {
                       errorNotification(response.data.error || 'Wrong user type');
                       return  {error:response.data.error};
           
                     }
               
                    }
                 }); 
                 case 'WORKER_VERIFY':
                  return post('/api/worker',  user.getState().usersetup.form, function(error, response){
                      if(error){
                       errorNotification( 'Server Error');
                        return
                      } else{
                     
                       if(!response.data.error) { 
                        // window.localStorage.setItem('user_token', response.data['user_token']);
                       //  next(GET_MY_DETAILS());
                       return  {success:response.data.success};
                       }else {
                         errorNotification(response.data.error || 'Wrong user type');
                         return  {error:response.data.error};
             
                       }
                 
                      }
                   }); 
                 case 'FINGERPRINT_ADD':
                  return post('/api/worker',  user.getState().usersetup.form, function(error, response){
                      if(error){
                       errorNotification( 'Server Error');
                        return
                      } else{
                     
                       if(!response.data.error) { 
                        // window.localStorage.setItem('user_token', response.data['user_token']);
                       //  next(GET_MY_DETAILS());
                       return  {success:response.data.success};
                       }else {
                         errorNotification(response.data.error || 'Wrong user type');
                         return  {error:response.data.error};
             
                       }
                 
                      }
                   }); 
    
          case 'FETCH_ADMIN':
            const t= user.getState().usersetup.form;
                t.type='admin'
            return get('/auth/user/all', t, function(error, response){
                 if(error){
               //   errorNotification( 'Server Errror');
                   console.log(error);
                   return
                 } else{
                  if(!response.data.error) { 
                
                  return  {success:response.data.success};
                  }else {
                    errorNotification(response.data.error || 'Wrong user type');
                    return  {error:response.data.error};
        
                  }
            
                 }
              }); 
              case 'FETCH_USER':
                const f= user.getState().usersetup.form;
                f.type='customer'
               if(!f.download){
                  delete f.download;
                  console.log(f)
               }

            return get('/auth/user/all',f,  function(error, response){
                 if(error){
                  //errorNotification( 'Server Errror');
                   console.log(error);
                   return
                 } else{
                  if(!response.data.error) { 
                    if(response.data.success){
                      return  {success:response.data.success};
                    }else{
                      FileDownload(response.data, 'users.csv');
                    }
               
                  }else {
                    errorNotification(response.data.error || 'Wrong user type');
                    return  {error:response.data.error};
        
                  }
            
                 }
              }); 

              case 'FETCH_PROJECT':

            return get('/api/project/all',{},  function(error, response){
                 if(error){
              //    errorNotification( 'Server Errror');
                   console.log(error);
                   return
                 } else{
                  if(!response.data.error) { 
                
                  return  {success:response.data.success};
                  }else {
                    errorNotification(response.data.error || 'Wrong user type');
                    return  {error:response.data.error};
        
                  }
            
                 }
              }); 

              case 'FETCH_WORKER':
                const project= user.getState().app.current_project;
                const q={project_id: project._id,
                }
            
                if( user.getState().usersetup.form.download){
                      q.download = true
                      
                }
                if(project && project._id){
                  return get('/api/worker/all',q,  function(error, response){
                    if(error){
                    // errorNotification( 'Server Errror');
                      console.log(error);
                      return
                    } else{
                     if(!response.data.error) { 
                   
                      if(response.data.success){
                        return  {success:response.data.success};
                      }else{
                        FileDownload(response.data, 'workers.csv');
                      }
                     }else {
                       errorNotification(response.data.error || 'Wrong user type');
                       return  {error:response.data.error};
           
                     }
               
                    }
                 }); 
                }else{
                  return {error:'Please select project'};
                }
                

              case 'DELETE_ADMIN':
                return del('/auth/user/', user.getState().usersetup.form, function(error, response){
                     if(error){
                      errorNotification( 'Server Errror');
                       console.log(error);
                       return
                     } else{
                      if(!response.data.error) { 
                    
                      return  {success:response.data.success};
                      }else {
                        errorNotification(response.data.error || 'Wrong user type');
                        return  {error:response.data.error};
            
                      }
                
                     }
                  }); 

                  case 'DELETE_WORKER':
                    return del2('/api/worker/', user.getState().usersetup.form, function(error, response){
                         if(error){
                          errorNotification( 'Server Errror');
                           console.log(error);
                           return
                         } else{
                          if(!response.data.error) { 
                        
                          return  {success:response.data.success};
                          }else {
                            errorNotification(response.data.error || 'Wrong user type');
                            return  {error:response.data.error};
                
                          }
                    
                         }
                      }); 
              case 'SEARCH_ADMIN':
                return get('/api/user/search', user.getState().usersetup.form, function(error, response){
                     if(error){
                      errorNotification( 'Server Errror');
                       console.log(error);
                       return
                     } else{
                    
                      if(!response.data.error) { 
                         console.log(user.data)
                      return  {success:response.data.success};
                      }else {
                        errorNotification(response.data.error || 'Wrong user type');
                        return  {error:response.data.error};
            
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