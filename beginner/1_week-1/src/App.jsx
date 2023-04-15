import React from 'react';

export default function App() {
  const number = 1;
  // 스타일을 변수로 선언하여 재사용 가능하도록 할 수 있다.
  const pTagStyle = {
    color: 'tomato',
  };

  return (
    <div className="test-class">
      {/* 주석을 사용하는 방법 */}

      {/* 변수를 사용하지 않고 스타일을 지정하는 법 */}
      {/* <p
        style={{
          color: 'salmon',
        }}
      > */}
      
      {/* 변수를 사용하여 스타일을 지정하는 법 */}
      <p style={pTagStyle}> 안녕하세요 리액트입니다.</p>
      <p>
        {
          number > 10
            ? number + '은 10보다 크다'
            : number + '은 10보다 작다'
        }
      </p>
    </div>
  )
}