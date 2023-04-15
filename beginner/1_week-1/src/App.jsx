import React from 'react'
import Child from './Child';

function App() {
  /*
  // * 구조분해할당(Destructuring) : 구조를 분해해서 다시 할당한다
  // -> 구조분해할당을 알아야 props를 나눌 수 있다
  const peopleObj = {
    name: 'hansol',
    age: '35',
    company: 'Sparta',
  };
  const {name, age, company} = peopleObj;
  */

  const name = 'hansol';
  return <Child age={35} name={name}>이름</Child>;
}

export default App