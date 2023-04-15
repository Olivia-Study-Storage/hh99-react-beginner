import React from 'react';
function App() {

  // <---- 자바스크립트 영역 ---->
  // function clickHandler() {
  //   alert('클릭!');
  // }

  // 화살표 함수로 표현하기
  const clickHandler = () => {
    alert('클릭!');
  }

  return (
  /* <---- HTML/JSX 영역  ---->*/
    <div
      // JSX 문법 안에서 태그에 스타일을 부여하기 위해서는
      // key-value 페어로 되어있는 '객체'를 JS 문법으로 넣어주면 된다.
      style={{
        height: '100vh',
        display: ' flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>이것은 내가 만든 App 컴포넌트 입니다.</p>
      <button onClick={clickHandler}>클릭!</button>
    </div>
  );
}

export default App;