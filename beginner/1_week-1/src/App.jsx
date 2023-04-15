import React from 'react'

// * children을 쓰지 않고 데이터를 내려주는 법
// function App() {
//   const name = '상위 컴포넌트 이름';
//   return <User name={name}/>
// }
// function User(props) {
//   return <div>{props.name}</div>
// }

// * children을 써서 데이터를 내려주는 법
// 자식 컴포넌트는 여는 태그, 닫는 태그 사이에 어떤 값을 둔다면
// 그것은 children으로서 인식이 되어 <User children={~}></User>라고 쓰지 않아도 props라고 주어진다.

// ? children을 굳이 쓰는 이유?
// 만약 다른 페이지(예를 들어 footer)를 같이 쓴다면 해당 페이지를 children으로 편하게 불러올 수 있다.
function App() {
  return <User>안녕하세요!</User>
}

function User(props) {
  return <div>{props.children}</div>
}

export default App