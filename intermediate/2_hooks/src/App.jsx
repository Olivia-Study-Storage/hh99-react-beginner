import React, { useState } from 'react';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';

// * 리렌더링의 발생 조건
// 1. 컴포넌트에서 state가 바뀌었을 때
// 2. 컴포넌트가 내려받은 props가 변경되었을 때
// 3. 부모 컴포넌트가 리렌더링된 경우 자식 컴포넌트는 모두 리렌더링

// * 최적화(Optimization)
// 시스템을 수정하여 어떠한 면의 작업이 더 효과적으로, 또는 자원을 덜 사용하도록 만드는 작업
// 리액트에서는 불필요하거나 잦은 리렌더링이 일어나지 않도록 비용(cost)을 최대한 줄이는 작업을 말한다.
// 대표적인 방법으로 memo(React.memo, 컴포넌트를 캐싱), useCallback(함수를 캐싱), useMemo(값을 캐싱)이 있다.

// ? 메모이제이션 (memoization)
// 이전에 계산된 결과를 캐싱(메모리에 임시적으로 저장)하여
// 다음에 동일한 입력이 제공될 때 다시 계산하지 않는 최적화 기술이다.
// 즉, 함수의 결과를 저장해두고, 같은 입력값이 들어올 때 이전에 계산된 결과를 사용하여 중복 계산을 방지한다.
// -> 함수의 실행 속도를 향상시킬 수 있다.
// 반복적으로 계산되는 계산량이 많은 함수나, 동일한 입력값에 대해 자주 호출되는 함수 등에서 유용하게 쓰인다.

// ! React.memo
// 컴포넌트를 메모이제이션하는데 사용되는 함수다.
// props가 변경되지 않았을 때 이전에 렌더링된 결과를 재사용하여 불필요한 렌더링을 방지한다.
// 이는 불필요한 렌더링을 줄여 성능을 향상시키는데 도움이 된다.

// * export default를 React.memo()로 감싸준다.

function App() {
  console.log('App 컴포넌트가 렌더링 되었습니다!');
  const [count, setCount] = useState(0);

  const onPlusBtnClickHandler = () => setCount(count + 1);
  const onMinusBtnClickHandler = () => setCount(count - 1);

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
        <Box1 />
        <Box2 />
        <Box3 />
      </div>
    </>
  )
}

export default App