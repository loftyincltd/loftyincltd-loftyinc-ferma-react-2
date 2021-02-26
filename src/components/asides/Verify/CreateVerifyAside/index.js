import React from 'react';
import shopping_bag from '../../../../images/shopping_bag.svg';

const CreateProductsAside = () => {
  return (
    <div className="dashboard-aside">
      <div className="payment-side">
        <div className="header-title">
          <p>New Product</p>
          <h4>What is the name of your product</h4>
        </div>
        <div className="body">
          <div className="input-group">
            <img src={shopping_bag} alt="k" />
            <input type="text" placeholder='E.g Bananas' />
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

export default CreateProductsAside;
