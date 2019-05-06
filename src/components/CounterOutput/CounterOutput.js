import React from 'react';

import './CounterOutput.css';

const counterOutput = props => (
  <div className="CounterOutput">
    <div className="container">
      <label>Current Counter:</label>
      <h1>{props.value}</h1>
    </div>
  </div>
);

export default counterOutput;
