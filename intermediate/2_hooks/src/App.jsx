import React, { useState, useRef } from 'react';
import { useEffect } from 'react';

// * useRef란?
// DOM 요소에 접근할 수 있도록 하는 react hook
// ! 설정된 ref값은 컴포넌트가 계속해서 렌더링되어도 umount 전까지 값을 유지한다!

// * 이러한 특징으로 인해 useRef는 다음 2가지 용도로 사용됨
// 1. 저장공간으로서의 useRef
//    - state와 비슷한 역할을 한다. (다만, state는 변화가 일어나면 리렌더링이 되고 내부 변수들은 초기화된다.)
//    - ref에 저장한 값은 리렌더링을 일으키지 않는다. 따라서 ref의 값 변화가 일어나도 리렌더링으로 내부 변수가 초기화되지 않는다.
//    ! 따라서 state는 리렌더링이 꼭 필요한 값을 다룰 때 쓰면 된다.
//    ! 반면 ref는 리렌더링을 발생시키지 않는 값을 저장할 때 사용한다.
// 2. DOM 요소 접근 방법으로서의 useRef
//    - 렌더링되자마자 특정 input이 focusing되어야 한다면 useRef를 사용하면 된다.  


function App() {
  // TODO 퀴즈 -> id 필드가 10자리 입력되는 순간 비밀번호 필드로 포커스가 이동하도록 구현해보기
  const [id, setId] = useState('');

  const idRef = useRef('');
  const pwdRef = useRef('');

  const idChangeHandler = (event) => setId(event.target.value);

  // 화면이 렌더링될 때 어떤 작업을 하고 싶다면 useEffect 사용!
  useEffect(() => {
    idRef.current.focus();
  }, []);

  // ! id라는 state가 바뀔 때 해당 useEffect가 실행되어야 하므로 의존성 배열에 id를 넣는다.
  // * onChange가 아니라 useEffect를 쓰는 이유?
  // 리액트에서 state를 업데이트하는 방식이 '배치 업데이트'이다.
  // 따라서 id라는 state를 set하는 방식이 10자리가 되었다고 바로 set하는게 아니라
  // console.log로 확인해보면 11자리가 됐을 때 의도했던 대로 찍힐 것이다!
  // 그래서 useEffect를 사용하는 것이다.
  useEffect(() => {
    if(id.length >= 10) {
      pwdRef.current.focus();
    }
  }, [id])

  return (
    <>
      <div>
        아이디 :&nbsp;
        <input 
          type="text" 
          value={id}
          ref={idRef}
          onChange={idChangeHandler}
        />
      </div>
      <div>
        비밀번호 :&nbsp;
        <input 
          type="password" 
          ref={pwdRef} 
        />
      </div>
    </>
  )
}

export default App