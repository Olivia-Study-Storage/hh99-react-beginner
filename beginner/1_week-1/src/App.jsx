import React from 'react';

// 나중에 코드가 길어지면 일정한 부분들을 따로 빼서 컴포넌트화를 시킨다.
// 왜? 반복되는 로직이 생길 경우 효율적인 코드 작성을 위해 필요하다.

// 자식 컴포넌트 : 다른 컴포넌트 안에서 품어지는 컴포넌트
function Child() {
  return <div>나는 자식 컴포넌트입니다.</div>;
}

// 부모 컴포넌트 : 다른 컴포넌트를 품는 컴포넌트
function App() {
  return <Child />;
}

export default App;