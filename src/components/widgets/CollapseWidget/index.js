import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const CollapseWidget = () => {
  return (
    <div className="CollapseWidget">
      <Collapse accordion>
        <Panel header='Company' key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="Requests" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="Agents" key="3">
          <p>{text}</p>
        </Panel>
        <Panel header='Riders' key="4">
          <p>{text}</p>
        </Panel>
        <Panel header="Stores" key="5">
          <p>{text}</p>
        </Panel>
        <Panel header="Refunds" key="6">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default CollapseWidget;
