import React from 'react';
import styled from 'styled-components';

// * CSS in JS
// js 코드로 css 코드를 작성해 컴포넌트를 꾸미는 방식
// * styled-components
// 리액트에서 CSS in JS 방식으로 컴포넌트를 꾸밀 수 있게 도와주는 패키지
// * 패키지란?
// 리액트에는 없지만 추가로 가져와서 사용할 수 있는 어떤 외부 라이브러리 (third-party)
// * SC 기본 원리
// 꾸미고자 하는 컴포넌트를 SC의 방식대로 먼저 만들고, 그 안에 스타일 코드 작성

// style. 뒤에는 항상 html 요소가 온다.
const StContainer = styled.div`
  display: flex;
`;

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${props => props.borderColor};
  margin: 20px;
`;

const boxList = ['red', 'blue', 'green', 'pink'];

// 색을 넣으면 이름을 반환
const getBoxName = (color) => {
  switch (color) {
    case 'red':
      return '빨간 박스';
    case 'green':
      return '초록 박스';
    case 'blue':
      return '파란 박스';
    default:
      return '검정 박스';
  }
}

function App() {
  return (
    <StContainer>
      {/* <StBox borderColor="red">박스</StBox>
      <StBox borderColor="blue">박스</StBox>
      <StBox borderColor="green">박스</StBox> */}
      {
        boxList.map(box => <StBox borderColor={box}>{getBoxName(box)}</StBox>)
      }
    </StContainer>
  )
}

export default App

// * 조건부 스타일링이란?
// classname으로 구현하기 까다로운 조건부 스타일링을 SC를 사용하면 간편하게 가능하다.
// if, switch, 삼항연산자 등...