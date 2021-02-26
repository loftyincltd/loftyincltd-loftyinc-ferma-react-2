import React from 'react';
import CardWidget from '../widgets/CardWidget';
import edit from '../../images/edit.svg';
import _delete from '../../images/delete_outline.svg';
import done from '../../images/done.svg';
import FlatList from '../../common/FlatList';
import ShowIf from '../../common/ShowIF';

const MissionSteps = () => (
  <CardWidget title={'Steps'} hasTitle Action={()=> <p>2/6 steps completed</p>} Child={MissionStepBody} />
);

const MissionStepBody = () => {
  return (
    <div className="MissionSteps"> 
      <FlatList data={data} Child={MissionStepItem} />
    </div>
  );
};
const MissionStepItem = ({ isDone, title }) => {
  return (
    <div className="MissionSteps-Item">
      <div className="check-box">
        <ShowIf show={isDone} Child={() => <img src={done} alt="k" />} />
      </div>
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="actions">
        <img src={_delete} alt="k" />
        <img src={edit} alt="k" />
      </div>
    </div>
  );
};

const data = [
  {
    isDone: true,
    title: 'Fringilla ut morbi tincidunt augue',
  },
  {
    isDone: true,
    title: 'In fermentum posuere urna nec',
  },
  {
    isDone: false,
    title: 'Suspendisse sed nisi lacus sed',
  },
  {
    isDone: false,
    title: 'In fermentum posuere urna nec',
  },
  {
    isDone: false,
    title: 'Fringilla ut morbi tincidunt augue',
  },
];
export default MissionSteps;
