import React from 'react';

function App() {
  const wrapStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '10px',
  };
  
  const eachStyle = {
    width: '100px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid green',
    borderRadius: '10px',
  }

  return (
    <div style={wrapStyle}>
      <section style={eachStyle}>감자</section>
      <section style={eachStyle}>고구마</section>
    </div>
  )
}

export default App