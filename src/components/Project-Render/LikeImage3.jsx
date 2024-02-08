import React from 'react';

function LikeImage3(props) {
  return (
    <div>
      <div>
      <button onClick={props.handleCount}>Like Image {props.count}</button>
    </div>
    </div>
  );
}

export default LikeImage3;
