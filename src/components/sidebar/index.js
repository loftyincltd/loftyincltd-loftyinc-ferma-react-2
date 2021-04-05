import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aramide from '../../images/aramide.svg';
import Store from '../../images/logo.jpeg';
import FlatList from '../../common/FlatList';
import { useSelector,useDispatch  } from 'react-redux';
import { useLocation, useHistory, } from 'react-router-dom';
import {SET_QUEUED_USERS, SET_QUEUED_FINGERPRINTS , CLOSE_ASIDE } from '../../redux/application/action'; 
import { Offline, Online } from "react-detect-offline";
import { HANDLE_CHANGE_Q, USER_ADD_Q, CLEAR_Q } from '../../redux/usersetup/action'; 


const SideBar = ({ children }) => {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
 const {  queued_users } = useSelector((state) => state.app);
  const current = menuItems.find(element => element.to == location.pathname);
  const [ isOpen, setIsOpen ] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    setInterval(() => {
       if(navigator.onLine){
         if(queued_users && queued_users.length>0){
           const a = queued_users;
          let cur = a.shift();
          dispatch(SET_QUEUED_USERS(a));
          console.log(queued_users.length)
          dispatch(HANDLE_CHANGE_Q(cur));
          dispatch(USER_ADD_Q(cur)).then((resp)=>{
            if(resp &&resp.success){
              dispatch(CLEAR_Q())

            }else{
     
                if(!Array.isArray(queued_users)){
                  queued_users = [];
                }
                let q= queued_users
                q.push(cur);
                  dispatch(SET_QUEUED_USERS(q))   ;
                 dispatch(CLEAR_Q())
      
      
            }
           
          });
          // console.log( queued_users, cur)  try to send this or push to the end of queue
         }
           //try to send the fir;
       }
    }, 1000);
  }, []);
  return (
    <div className="dashboard">
      <div className={`dashboard-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <img src={Store}  style={{display: 'flex',
    maxHeight: '80px'}}alt="k" />
        </div>
     
        <div className="dashboard-sidebar-items">
          <FlatList data={menuItems} Child={DashboardSidebarItem} />
        </div>
      </div>

      <div className={`dashboard-layout ${isOpen ? 'open' : ''}`} >
        <div className="dashboard-header">
          <div className="pager">
          <i className={current.className} style={{marginRight:'10px', color:'#1890FF', fontSize: 23}}></i>
             <p>{current.title}</p>
          </div>
         {/**  <div>
          <Online>Online &nbsp;<div style={{borderRadius: '50%', width:10, height: 10, background: 'green', display:'inline-block'}}></div></Online>
          <Offline>Offline &nbsp;<div style={{borderRadius: '50%', width:10, height: 10, background: 'red', display:'inline-block'}}></div></Offline>
         </div>**/}
          <Link to={'/dashboard'}  onClick={() => dispatch(CLOSE_ASIDE())}>
          <div className="user">
            <img src={Aramide} alt="k" />
          </div>
          </Link>
          
        </div>
        {children}
      </div>
    </div>
  );
};

const DashboardSidebarItem = ({ title, image, to, users,super_user, className }, i) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.app);
  const location = useLocation();
  return (

  (users.indexOf(user.type)>-1 && ((super_user && user.super)|| !super_user))?
    <Link to={to} onClick={() => dispatch(CLOSE_ASIDE())}>
      <div 
        key={i}
        className={`dashboard-sidebar-item ${location.pathname === to ? 'active' : ''}`}
      >
        
        <i className={className} style={{marginRight:'10px', color:location.pathname === to?
        '#2F54EB':'#9A9FBF', fontSize: 20}}></i>
        <p>{title}</p>
      </div>
    </Link>:
    <></>
  );
};

export default SideBar;

const menuItems = [
  {
    title: 'Dashboard',
    to: '/dashboard',
    className:'fa fa-home',
    users:['admin'],
    super_user: false
  },
  {
    title: 'Register User',
    to: '/usersetup',
    className:'fa fa-user-plus',
    users:['admin'],
    super_user: false
  },
  {
    title: 'All Users',
    to: '/users',
    className:'fa fa-users',
    users:['admin'],
    super_user: false
  },
  {
    title: 'Create Admin',
    to: '/adminsetup',
    className:'fa fa-user-plus',
    users:['admin'],
    super_user: true
  },
  {
    title: 'All Admins',
    to: '/admins',
    className:'fa fa-users',
    users:['admin'],
    super_user: true
  },
  {
    title: 'Projects',
    to: '/projects',
    className:'fa fa-briefcase',
    users:['admin'],
    super_user: false
  },
  {
    title: 'Settings',
    to: '/settings',
    className:'fa fa-cog',
    users:['admin'],
    super_user: false
  },

  {
    title: 'Add Project',
    to: '/projectsetup',
    className:'fa fa-briefcase',
    users:['none'],
    super_user: false
  },


  {
    title: 'Fingerprint',
    to: '/fingerprint',
    className:'fa fa-user-secret',
    users:['none'],
    super_user: false
  },

  {
    title: 'Validate',
    to: '/validate',
    className:'fa fa-check-square-o',
    users:['none'],
    super_user: false
  },

  {
    title: 'User Update',
    to: '/userupdate',
    className:'fa fa-user-circle',
    users:['none'],
    super_user: false
  },

  {
    title: 'Workers',
    to: '/workers',
    className:'fa fa-users',
    users:['none'],
    super_user: false
  },


];
