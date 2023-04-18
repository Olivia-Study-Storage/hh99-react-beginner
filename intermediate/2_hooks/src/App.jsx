import React from 'react';
import GrandFather from './components/GrandFather';

// * useContext의 필요성
// 부모 컴포넌트 -> 자식 컴포넌트로 props를 사용하여 데이터를 전달한다.
// 이때, 넘기는 길이가 너무 깊어지면 prop drilling 현상이 일어난다.
// 1. 깊이가 너무 길어지면 이 prop이 어떤 컴포넌트로부터 왔는지 파악이 어렵다.
// 2. 어떤 컴포넌트에서 오류가 발생할 경우 추적이 힘들어지므로 대처가 늦을 수 밖에 없다.

// * context API 필수 개념
// 위와 같은 문제로 인해 등장한 것이 react context API이며,
// useContext hook을 통해 쉽게 '전역 데이터 관리'를 할 수 있다.
// 1. createContext : Context 생성
// 2. Consumer : context 변화 감지
// 3. Provider : 하위 컴포넌트로 context 전달

function App() {
  return <GrandFather />
}

export default App