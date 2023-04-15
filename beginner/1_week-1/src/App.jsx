import React from 'react';

// * props
// 컴포넌트 간의 정보 교류 방법
// 1. 반드시 위에서 아래 방향으로 흐른다. (부모 -> 자식의 단방향)
// 2. props는 반드시 읽기 전용으로 취급하며, 변경하지 않는다.

function App() {
  return <GrandFather />;
}

function GrandFather() {
  const name = '김박사';
  return <Mother grandFatherName={name}/>;
}

function Mother(props) {
	const name = `${props.grandFatherName}의 딸인 홍부인`;
  return <Child motherName={ name }/>;
}

// props로 값을 전달받아 화면에 렌더링
// * [prop drilling]
// 하위 컴포넌트로 전달하는 용도로만 쓰이는 컴포넌트를 거치면서
// React Component 트리의 한 부분에서 다른 부분으로 데이터를 전달하는 과정
function Child(props) {
  return <div>나는 { props.motherName }의 아들입니다.</div>;
}

export default App;