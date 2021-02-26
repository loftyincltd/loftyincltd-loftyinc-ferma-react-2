import React from 'react'; 
import ActionWidget from '../../widgets/ActionWidget';
import AvatarTag from '../../AvatarTag'; 
import CardList from '../../lists/CardLists';

const ContactAside = ({ data, Child }) => {
  return (
    <div className="dashboard-aside">
      <div className="ContactAside-user">
        <AvatarTag user='David Ukauwa' />
      </div>

      <ActionWidget type="b" />
      <CardList />
    </div>
  );
};


export default ContactAside;
