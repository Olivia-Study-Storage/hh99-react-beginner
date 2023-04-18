import React, { useState, useRef } from 'react';

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

const style = {
  border: '1px solid black',
  margin: '10px',
  padding: '10px',
}

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  // count의 숫자가 증가될 때마다 리렌더링이 일어난다.
  const plusStateCountBtnHandler = () => setCount(count + 1);
  // countRef.current의 값은 계속 증가되고 있지만 리렌더링은 일어나지 않는다.
  const plusRefCountBtnHandler = () => {
    countRef.current++;
    console.log(countRef.current);
  }

  return (
    <>
      <div style={style}>
        state 영역입니다. {count}
        <br />
        <button
          onClick={plusStateCountBtnHandler}
        >
          state 증가
        </button>
      </div>

      <div style={style}>
        {/* countRef라는건 객체이기 때문에 그 안에 있는 초기값에 접근하려면 .current로 들어가야 한다. */}
        ref 영역입니다. {countRef.current}
        <br />
        <button
          onClick={plusRefCountBtnHandler}
        >
          ref 증가
        </button>
      </div>
    </>
  )
}

export default App