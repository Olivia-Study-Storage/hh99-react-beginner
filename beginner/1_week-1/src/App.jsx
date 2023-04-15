import React from 'react';
import './App.css';

function App() {
  const vegetables = ["감자", "고구마", "오이", "가지", "옥수수"];

  return (
    <div id="wrap">
      {vegetables.filter(name => {
        return name !== '감자';
      })
      .map((item) => {
        return <section key="{item}">{item}</section>;
      })
      };
    </div>
  )
}

export default App