import React, { useState, useEffect } from 'react';

  // ! useEffect의 clean up
  // 컴포넌트가 화면에서 사라졌을 때 무언가를 어떻게 실행하는지의 과정을 클린 업(clean up)이라고 한다.

  // * clean up 하는 방법
  // useEffect 안에 return을 해주고 이 부분에 실행되길 원하는 함수를 넣는다.

  // ? chatGPT에게 질문 : 아래 코드에서 input에 값을 입력할 때마다 clean up이 실행되는 이유는 뭐야?
  // 이 코드에서 clean up은 useEffect 혹은 value 변수가 변경될 때마다 실행된다.
  // 컴포넌트가 처음 마운트될 때 useEffect가 실행되고, 이때 반환된 함수가 클린업 함수이다.
  // 클린업 함수는 컴포넌트가 마운트 해제될 때 호출된다.

  // 그리고 사용자가 input 엘리먼트에 값을 입력할 때마다 value 상태가 변경된다.
  // value 값이 변경될 때마다 useEffect가 실행되며, 이전 실행에서 반환된 클린업 함수가 호출되기 전에 새로운 실행이 일어난다.

  // 따라서 return 안의 콘솔은 value가 변경되어 useEffect가 새로 실행될 때마다 출력된다.
  // ! 이것은 클린업 함수가 호출되는 것이 아니라 useEffect 자체가 새로운 실행을 하기 전에 이전 실행에서 반환된 클린업 함수를 호출하는 것이다.


function App() {
  const [value, setValue] = useState('');

  // clean up
  useEffect(() => {
    console.log('hello useEffect!');

    return () => {
      console.log('나 사라져요...!');
    };
  }, [value]);


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