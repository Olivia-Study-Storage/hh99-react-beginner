import React from 'react'

// function Child(props) {
// * 위의 props를 구조분해할당으로 아래와 같이 나눠서 데이터를 받아올 수 있다
// * 이렇게 구조분해할당을 하면 어떤 props가 쓰이는지를 직관적으로 알 수 있다
function Child({ age, name, children }) {
  // console.log(props);
  console.log(age);
  console.log(name);
  console.log(children);
  return (
    <div>Child</div>
  )
}

export default Child