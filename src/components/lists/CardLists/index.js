import React from 'react';
import CardWidget from '../../widgets/CardWidget';
import FlatList from '../../../common/FlatList';

const CardLists = () => (
  <CardWidget title={'Steps'}  Child={CardListBody} />
);

const CardListBody = () => {
  return (
    <div className="CardLists"> 
      <FlatList data={data} Child={CardListItem} />
    </div>
  );
};
const CardListItem = ({ title, value }) => {
  return (
    <div className="CardLists-Item">
      <h6>{title}</h6>
      <p>{value}</p>
    </div>
  );
};

const data = [
  {
    title: 'Email Address',
    value: 'babajideoloko@email.com',
  },
  {
    value: '+234 80 1234 5678',
    title: 'Phone Number',
  },
  {
    value: 'Tier 1',
    title: 'Agent Tier',
  },
];
export default CardLists;
