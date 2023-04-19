import React, { useState, useCallback } from 'react';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';

// ! useCallback
// 함수형 컴포넌트에서 사용되며, 콜백 함수(인자로 들어오는 함수 자체)를 메모이제이션하여 성능을 최적화하는데 사용한다.
// 메모이제이션 할 콜백 함수, 의존성배열(콜백 함수 내에서 참조되는 모든 변수를 포함해야 함)을 매개변수로 받는다.
// 의존성 배열 내의 값이 변경될 때만 메모이제이션된 함수를 업데이트하고, 그렇지 않으면 이전에 생성된 함수를 반환한다.

function App() {
  console.log('App 컴포넌트가 렌더링 되었습니다!');
  const [count, setCount] = useState(0);

  // +, - 버튼 클릭 시 count 증/감소
  const onPlusBtnClickHandler = () => setCount(count + 1);
  const onMinusBtnClickHandler = () => setCount(count - 1);

  // * count를 초기화해주는 함수 (useCallback 적용 전)
  // const initCount = () => setCount(0);
  
  // initCount 함수는 app 컴포넌트가 리렌더링될 때마다 다시 만들어진다.
  // 또한 props로 내려주어 Box1 안에 있는 onClick={initCount} 부분도
  // initCount가 다시 만들어졌기 때문에 props로 새로운 값을 전달 받았다고 여겨진다.
  // 하지만 initCount 자체는 setCount를 0으로 만든다는 것 외에 바뀐게 없다!
  // * 그런데 왜 Box1이 props로 내려온 initCount값이 바뀌었다고 판단했을까?

  // -> 리액트가 state가 바뀌었는지를 인지하기 위해 객체나 함수같은 것들은
  // 꼭 불변성을 유지해주는 방법을 이용해 바꿔줘야 했다.
  // 함수도 자바스크립트에서는 객체다. (일급 객체)
  // 그렇기 때문에 메모리에 직접적으로 저장되는게 아니라 별도의 공간을 바라보고 있는 주소값을 저장한다.
  // 함수형 컴포넌트가 다시 리렌더링이 되면서 함수들이 다시 만들어질 때 이전 함수는 그대로 있고 
  // initCount를 새로운 공간에 저장을 하면서 새로운 주소를 다시 return한다.
  // * -> 즉, initCount는 계속 새로운 주소를 props로 내려주기 때문에 Box1 입장에서는 props가 바뀌었다고 판단하는 것!
  // ! 따라서 함수 자체를 메모이제이션하는 방법이 필요하다. => useCallback
  // initCount 함수를 별도 메모리 공간에 저장을 해놓고 특정 조건이 아닌 경우에는 아예 변경되지 않도록 막아야 한다.

  // * useCallback 적용 후
  const initCount = useCallback(() => {
    console.log(`${count}에서 0으로 변경되었습니다.`);
    setCount(0);
    // 의존성배열을 넣어주지 않으면 0에서 0으로 변경되었습니다. 라고 나온다!
    // 왜? 의존성 배열이 빈 배열이면 맨 처음 렌더링될 때의 값(그때 당시의 스냅샷)을 저장하고 있기 때문이다.
  }, [count]);

  // * useCallback에서의 의존성배열
  // useCallback 훅은 메모이제이션을 적용할 함수, 해당 콜백 함수가 의존하는 값의 배열을 매개변수로 받는다.
  // 의존성 배열은 콜백 함수가 의존하는 값의 목록을 지정한다.
  // 콜백 함수 내에서 이 값들이 변경되어을 때에만 메모이제이션이 유지되도록 보장한다.
  // 만약 의존성 배열이 빈 배열이면 콜백 함수는 한 번만 생성된다.

  const style = {
    display: 'flex',
    marginTop: '10px',
  }

  return (
    <>
      <h3>count 예제입니다.</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusBtnClickHandler}>+</button>
      <button onClick={onMinusBtnClickHandler}>-</button>
      <div style={style}>
        <Box1 initCount={initCount}/>
        <Box2 />
        <Box3 />
      </div>
    </>
  )
}

export default App