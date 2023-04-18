import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <div>Number State : {number}</div>
      {/* 함수형 업데이트 방식 사용해보기 */}
      <button
        onClick={() => {
          // ! 기존 업데이트 방법
          // setNumber를 3번 반복했음에도 버튼 클릭 시 1만 증가된다.
          // setNumber(number + 1);
          // setNumber(number + 1);
          // setNumber(number + 1);
          
          // ? 왜? 배치성으로 처리되기 떄문이다! (배치 업데이트)
          // 리액트에서는 렌더링을 하기 위해 state를 파악하는데 파악 방법이 바로 배치 업데이트다.
          // 한꺼번에 변경된 내용을 모아서 한 번만 반영을 하기 때문에
          // setNumber를 세 번 해도 동일한 것에 대해서는 모아서 한 개로 간주한다!

          // ! 함수형 업데이트 방식 사용해보기
          // 3번 작성하면 버튼 클릭 시 3만큼 증가된다.

          // ? 왜? 명령들을 모아서 순차적으로 한 번씩 실행시키기 떄문이다!
          // 함수형 업데이트에는 인자 부분에 현재의 state가 들어온다.
          // 그 후 식을 처리하고 변경된 state를 반환한다.
          // 그 다음 줄에서는 이전 식에서 처리한 현재의 state를 반영하기 때문에 최신 값으로 반영되는 것이다.
          setNumber((currentNumber) => currentNumber + 1);
          setNumber((currentNumber) => currentNumber + 1);
          setNumber((currentNumber) => currentNumber + 1);
        }}
      >
        누르면 UP
      </button>
    </>
  )
}

// ? [React는 왜 배치성으로 배치 업데이트가 되도록 만들었을까?]
// 리액트 환경 안에서 렌더링이 잦은 것은 좋지 않다. -> 성능에 이슈가 있는 것!
// 따라서 불필요한 렌더링을 피하기 위해 한꺼번에 요청사항을 모아서 한 번만 처리하여 렌더링을 줄인다.
// 그렇기 때문에 리액트에서는 배치 업데이트 방식을 사용하는 것이다.

// ex. 손님, 웨이터, 주방
// 손님 : 피자, 콜라, 피클
// 웨이터는 손님이 세 가지 주문을 모두 말했을 때 주문을 들고 주방으로 간다. (그래야 동선이 절약됨)

// ! 최종 정리
// 1. useState의 업데이트 방식은 2가지로, 각각 다르게 동작한다.
//  -> 기본형, 함수형
// 2. useState로 원시데이터가 아닌 데이터를 변경할 때는 '불변성'을 유지해야 한다.

export default App