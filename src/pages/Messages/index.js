import React from 'react';
// import { Link } from 'react-router-dom';
 
import Search from '../../components/Search';
import TabsWidget from '../../components/widgets/TabsWidget';
import MessageLists from '../../components/lists/MessageLists';
import CardWidget from '../../components/widgets/CardWidget'; 
const Index = () => {
  return (
    <div className="dashboard-container-main">
    <TabsWidget type="b" />
    <Search />
    <CardWidget Child={MessageLists} /> 
  </div>
  );
};

export default Index;
