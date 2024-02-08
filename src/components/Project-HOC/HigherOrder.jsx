import React,{useState} from 'react';

const HigherOrder = (OriginalComponent) => {
    const newComponent = () => {
        const [count,setCount] = useState(0);
        const handleCount = () => {
          setCount((prev) => prev+1)
        }

      return <OriginalComponent handleCount={handleCount} count={count}/>


    }
  
  return newComponent
}

export default HigherOrder;
