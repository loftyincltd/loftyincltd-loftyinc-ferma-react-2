import React from 'react';
import ShowIf from '../../../common/ShowIF';

const CardWidget = ({ hasTitle, title, Action, Child }) => {
    
  return (
    <div className="CardWidget">
      <ShowIf show={hasTitle} props={{title, Action}} Child={Title} />
      <div className="CardWidget-body">
          <Child />
      </div>
    </div>
  );
};

const Title = ({title, Action = () => ''}) => {
    console.log('{title, action}',{title, Action})
  return (
    <div className="CardWidget-title">
      <h3>{title || ''}</h3>
        <div className="CardWidget-Action">
            <Action />
        </div>
    </div>
  );
};

export default CardWidget;
