import React from 'react';
// import { Link } from 'react-router-dom';
 
import TabsWidget from '../../components/widgets/TabsWidget';
import Search from '../../components/Search';
import TransactionLists from '../../components/lists/TransactionLists';
import CardWidget from '../../components/widgets/CardWidget'; 

const Index = () => {
  return (
    <div className="dashboard-container-main">
    <TabsWidget type="a" />
    <Search />
    <CardWidget Child={TransactionLists} /> 
  </div>
  );
};

export default Index;
