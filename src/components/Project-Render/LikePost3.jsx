import React from 'react';

function LikePost3(props) {
  return (
    <div>
      <div>
      <button onClick={props.handleCount}>Like Post {props.count}</button>
    </div>
    </div>
  );
}

export default LikePost3;
