import React from 'react';
import inputimg from '../../../../images/monetization_onpa.svg';

const WithdrawAside = ({ data, Child }) => {
  return (
    <div className="dashboard-aside">
      <div className="payment-side">
        <div className="header-title">
          <p>Top Up</p>
          <h4>Enter the amount you want to top up</h4>
        </div>
        <div className="body">
          <div className="input-group">
            <img src={inputimg} alt="k" />
            <input type="text" placeholder='Enter Amount' />
          </div>
        </div>
        <div className="footer">
          <div className="back">
            <button className="primary">{'<'}</button>
          </div>
          <div className="next">
            <button className={'primary'}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawAside;
