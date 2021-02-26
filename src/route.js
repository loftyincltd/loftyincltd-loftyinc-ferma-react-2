import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { OPEN_ASIDE, LOGIN } from './redux/application/action';
import { SIGN_IN, GET_MY_DETAILS } from './redux/authentication/action';
// Components
import Index from './pages/';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Transactions from './pages/Transactions';
import Admins from './pages/Admins';
import Users from './pages/Users';
import Project from './pages/Project';
import Workers from './pages/Workers';
import Fingerprint from './pages/Fingerprint';
import Validate from './pages/Validate';
import Settings from './pages/Settings';
import AdminSetup from './pages/AdminSetup';
import UserSetup from './pages/UserSetup';
import UserUpdate from './pages/UserUpdate';
import ProjectSetup from './pages/ProjectSetup';
import SideBar from './components/sidebar';
import SwitchComponent from './common/SwitchComponent';
import ShowIF from './common/ShowIF';

//asides
import ContactAside from './components/asides/ContactAside';
import ChatAside from './components/asides/ChatAside';
import AdminInfoAside from './components/asides/AdminInfoAside';
import UserInfoAside from './components/asides/UserInfoAside';
import WithdrawAside from './components/asides/payments/WithdrawAside';
import CreateVerifyAside from './components/asides/Verify/CreateVerifyAside';

//images
import close from './images/closeclose.svg';
const Main = () => {
  let { user_token } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  if (user_token === null) {
    user_token = window.localStorage.getItem('user_token');
    if (user_token !== null) {
      user_token = window.localStorage.getItem('user_token');
      if(user_token){
        dispatch(
          GET_MY_DETAILS()
        )
      }
    }
  }

  // dispatch(GET_BALANCE());

  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/dashboard" Child={Dashboard} />
        <ProtectedRoute path="/settings" Child={Settings} />
        <ProtectedRoute path="/adminsetup" Child={AdminSetup} />
        <ProtectedRoute path="/usersetup" Child={UserSetup} />
        <ProtectedRoute path="/users" Child={Users} />
        <ProtectedRoute path="/projects" Child={Project} />
        <ProtectedRoute path="/workers" Child={Workers} />
        <ProtectedRoute path="/fingerprint" Child={Fingerprint} />
        <ProtectedRoute path="/userupdate" Child={UserUpdate} />
        <ProtectedRoute path="/validate" Child={Validate} />
        <ProtectedRoute path="/transactions" Child={Transactions} />
        <ProtectedRoute path="/admins" Child={Admins} />
        <ProtectedRoute path="/projectsetup" Child={ProjectSetup} />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
};
const ProtectedRoute = ({ path, Child }) => {
  let { user } = useSelector((state) => state.app);
  const token = window.localStorage.getItem('user_token') || null;
  if (token === null) {
    return <Redirect to="/login" />;
  }else{
    if(user){
      return (
        <Route path={path}>
          <AppWrapper>
            <Child />
          </AppWrapper>
        </Route>
      );
    }else{
      return   
    }
   
  }

};
const AppWrapper = ({ children }) => {
  const {
    aside: { which, data },
  } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const closeDetail = () => dispatch(OPEN_ASIDE({ which: '', data: {} }));

  return (
    <SideBar>
      <div className="dashboard-container">
        <div
          className={
            which !== ''
              ? 'dashboard-container-body opened'
              : 'dashboard-container-body'
          }
        >
          {children}
        </div>
        <ShowIF
          show={which !== ''}
          Child={() => (
            <div onClick={closeDetail} className="close-aside">
             
              <i className='fa fa-close' style={{ color:'blue', fontSize: 23, cursor:'pointer'}}></i>
            </div>
          )}
        />
        <SwitchComponent case={which} data={data} components={asides} />
      </div>
    </SideBar>
  );
};
const asides = {
  ContactAside: {
    component: ContactAside,
  },
  ChatAside: {
    component: ChatAside,
  },
  AdminInfoAside: {
    component: AdminInfoAside,
  },
  UserInfoAside: {
    component: UserInfoAside,
  },
  WithdrawAside: {
    component: WithdrawAside,
  },
  CreateVerifyAside: {
    component: CreateVerifyAside,
  },
  '': {
    component: () => <></>,
  },
};
export default Main;
