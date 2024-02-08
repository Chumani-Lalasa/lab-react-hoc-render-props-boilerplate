import React from 'react'
import HigherOrder from './HigherOrder'

const LikeImage= (props) => {
  const {count,handleCount} = props
  return (
    <div>
      <button onClick={handleCount}>Like Image {count}</button>
    </div>
  )
}
export default HigherOrder(LikeImage)
