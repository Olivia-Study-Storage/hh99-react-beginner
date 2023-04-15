import React from 'react'

// 이와 같이 리액트는 컴포넌트끼리의 상호작용으로 개발된다.

function Son() {
  return <div>자식 컴포넌트</div>
}

function Mother() {
  return <Son/>
}

function Grandfather() {
  return <Mother/>
}

function App() {
  return <Grandfather />
}

export default App