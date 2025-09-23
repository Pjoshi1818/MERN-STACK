import React, { useState } from 'react'

function Hooks() {
    const [count , setCount] = useState(0);
    const incout = ()=>{
        setCount(count +1 )
    }
    const deccout = ()=>{
setCount(count -1)
    }

      const style = {
        display : "flex",
        color : "red"
      }


  return (
    <div style={style}>
                <button onClick={incout}> inc. count</button>
                <p>count : {count}</p>
                <button onClick={deccout}> dec.. count </button>

    </div>
  )
}

export default Hooks
