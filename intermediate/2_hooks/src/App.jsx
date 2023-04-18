import React, { useState, useEffect } from 'react';

// * useEffect란?
// 리액트 '컴포넌트가 렌더링될 때마다' 특정 작업을 수행하도록 설정할 수 있는 hook

// * useEffect는 언제 사용하는지?
// 1. 어떤 컴포넌트가 화면에 보여졌을 때 내가 무언가를 실행하고 싶을 때
// 2. 어떤 컴포넌트가 화면에서 사라졌을 때(return) 무언가를 실행하고 싶을 때

// * 의존성 배열(dependency array)이란?
// useEffect(() => { ... }, [ ...dependency array... ]);
// 이 배열에 값을 넣으면 그 값이 바뀔 때만 useEffect를 실행하도록 함
// 어떤 함수를 컴포넌트가 렌더링될 때 단 한번만 실행하고 싶으면 의존성 배열을 [] 빈 상태로 넣는다.

function App() {
  const [value, setValue] = useState('');

  // * 1. 처음에 화면에 렌더링 될 때의 예시
  // useEffect(() => console.log('hello useEffect!'));

  // * 2. 리렌더링될 때마다 useEffect가 실행될 때의 예시
  // * 의존성배열을 하지 않았을 때 useEffect의 흐름
  // 1. input에 값을 입력
  // 2. value, 즉 state가 변경
  // 3. state가 바뀌었기 때문에 App 컴포넌트가 리렌더링
  // 4. 리렌더링되었기 때문에 useEffect가 다시 실행됨
  // 5. 3~4번 반복
  // useEffect(() => console.log('hello useEffect!'));

  // * 3. 의존성배열을 주입했을 때의 예시
  // 의존성 배열에 아무 값도 입력하지 않았기 때문에 (조건이 없기 때문에)
  // 맨 처음 렌더링되었을 때만 useEffect가 동작
  useEffect(() => console.log('dependency array is null'), []);

  // ? 그렇다면 의존성배열에 특정 값을 넣었을 때는?
  // value가 바뀔 때마다 useEffect를 실행하도록 하는 예시
  // 최초 렌더링될 때 위, 아래 useEffect가 모두 실행되고 value값이 변경되면 아래의 useEffect만 실행됨
  useEffect(() => console.log('dependency array -> value'), [value]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </div>
  )
}

export default App