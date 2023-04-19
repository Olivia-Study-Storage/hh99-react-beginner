import React, { useState } from 'react'
import './App.css'

function App() {  
  let [num, setNum] = useState(0);
  const plusHandler = () => setNum(num + 1);
  const minusHandler = () => setNum(num - 1);
  return (
    <div id="wrap">
      <h1>{num}</h1>
      <button
        onClick={plusHandler}
      >
        +
      </button>
      <button
        onClick={minusHandler}
      >
        -
      </button>
    </div>
  )
}

export default App