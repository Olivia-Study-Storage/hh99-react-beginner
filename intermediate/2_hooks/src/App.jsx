import React from 'react';
import HeavyComponent from './components/HeavyComponent';

// ! useMemo
// 동일한 값을 반환하는 함수를 계속 호출해야 한다면, 필요할 때마다 다시 함수를 호출해 계산하는게 아니라
// 이미 저장한 '값(value)'을 단순히 꺼내와서 (캐싱해서) 재사용한다.

// * useMemo 사용 방법
/*
  const value = useMemo(() => {
    return 반환할함수()
  }, [dependencyArray]);

  dependencyArray값이 변경될 때만 반환할함수()가 호출되고
  그 외의 경우에는 메모이제이션해놨던 값을 가져오기만 한다.
*/

// * React.memo로 Box1.jsx를 메모이제이션했는데도 리렌더링이 되는 이유
// 함수형 컴포넌트를 사용하기 때문이고, 리렌더링되면서 initCount도 다시 만들어지기 때문이다.
// JS에서는 함수도 객체의 한 종류이기 때문에 다시 만들어지면 그 주솟값이 달라지고
// 이에 따라 하위 컴포넌트인 Box1.jsx는 props가 변경됐다고 인식한다.

// ! useMemo를 남발하게 되면 별도의 메모리 확보를 너무 많이 하게 되기 때문에 오히려 성능이 악화될 수 있다.
// 따라서 필요할 떄만 쓰는게 좋다.

// heavy work라는 엄청 무거운 작업이라는 가정하에 진행
function App() {
  return <>
    <nav style={{
      backgroundColor: 'salmon',
      marginBottom: '30px',
    }}>
      네비게이션 바
    </nav>
    <HeavyComponent />
    <footer style={{
      backgroundColor: 'tan',
      marginBottom: '30px',  
    }}>
      푸터 영역
    </footer>
  </>
}

export default App