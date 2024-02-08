import React from 'react'
import HigherOrder from './HigherOrder'

const LikePost= (props) => {
  const {count,handleCount} = props;
  return (
    <div>
      <button onClick={handleCount}>Like Post {count}</button>
    </div>
  )
}
export default HigherOrder(LikePost);

