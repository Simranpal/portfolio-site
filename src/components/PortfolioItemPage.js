import React from 'react';

const Item1 = (props) =>(
  <div>
      <h1>A thing I have done</h1>
      <a>This page is for the item with ID of {props.match.params.id}</a>
  </div>
);

export default Item1;