
import React from 'react';
import { useDispatch } from 'react-redux';
import { OPEN_ASIDE } from '../../redux/application/action';
import FlatList from '../../common/FlatList';
import monetization_on2 from '../../images/monetization_on2.svg'; 
import bank from '../../images/bank.svg'; 
import credit_card from '../../images/credit_card.svg'; 
import account_balance_wallet from '../../images/account_balance_wallet.svg'; 
import send from '../../images/send.svg'; 

const PaymentOptions = () => {
    
  return (
    <div className="PaymentOptions">
      <FlatList data={data} Child={PaymentOptionsItem} />
    </div>
  );
};

const PaymentOptionsItem = (props) => { 
  const {title, image, aside: which} = props;
  const dispatch = useDispatch();
  const revealDetail = () =>
    dispatch(OPEN_ASIDE({ which, data: props }));
    
  return (
    <div className="PaymentOptionsItem" onClick={revealDetail}>
      <div className="image">
       <img src={image} alt="k" /> 
      </div>
      <h3>{title}</h3> 
    </div>
  );
};

const data = [
  // {
  //   title: 'Top Up',
  //   image: monetization_on2,
  //   aside: 'WithdrawAside'
  // },
  {
    title: 'Send Money',
    image: send,
    aside: 'WithdrawAside'
  },
  {
    title: 'Withdraw',
    image: account_balance_wallet,
    aside: 'WithdrawAside'
  },
  {
    title: 'Banks',
    image: bank,
    aside: 'WithdrawAside'
  },
  // {
  //   title: 'Debit Cards',
  //   image: credit_card,
  //   aside: 'WithdrawAside'
  // },
]
export default PaymentOptions;
