import React, { UseState } from 'react'
import "./Counter.css"

const components = () => {
  const[count , setcount] = UseState(0);
  return (
    <div className="counter_container">
      <div className="click">THIS IS A CLICK APP</div>
      <div className = "num"
      > CLICK = {count}</div>
    <div className="btn">
    <button className="Plus-btn" onClick={() => {setcount(count+1)}}>INC</button>
    <button className="minus-btn" onClick={() => {setcount(count-1)}}>DEC</button>
    </div>
    </div>
  )
}

export default components