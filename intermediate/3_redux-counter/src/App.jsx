import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ! Redux의 흐름
// 1. View에서 액션이 일어난다.
// 2. dispatch에서 action이 일어난다. (dispatch가 action 객체를 store에 던진다.)
//　　- action은 type과 payload를 가지고 있다.
//　　- store는 action 객체에 있는 type에 따라 state를 변경해주는 작업을 한다.
// 3. action에 의한 reducer 함수가 실행되기 전에 middleware가 작동한다.
// 4. middleware에서 명령을 내린 일을 수행하고 난 뒤, reducer 함수를 실행한다.
// (3, 4번은 아직 몰라도 됨)
// 5. reducer의 실행결과 store에 새로운 값을 저장한다.
// 6. store의 state에 subscribe하고 있던 UI에 변경된 값을 준다.

function App() {
  const counter = useSelector((state) => {
    return state.counter;
  });

  // dispatch 가져오기
  const dispatch = useDispatch();

  return (
    <>
      <div>
        현재 카운트 : {counter.number}
      </div>
      <button
        onClick={() => {
          dispatch({
            type: 'PLUS_ONE',
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'MINUS_ONE',
          });
        }}
      >
        -
      </button>
    </>
  )
}

export default App