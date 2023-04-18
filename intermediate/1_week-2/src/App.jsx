import React from 'react';
import styled from 'styled-components';
import TestPage from './components/TestPage';
import GlobalStyle from './components/GlobalStyle'

// * GlobalStyles (전역 스타일링)
// SC는 해당 컴포넌트 내에서만 사용 가능하다.
// 프로젝트 전체를 아우르는 스타일을 적용할 때는 전역 스타일을 지정한다.

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
  //   <StContainer>
  //   {
  //     boxList.map(box => <StBox borderColor={box}>{getBoxName(box)}</StBox>)
  //   }
  // </StContainer>
    <>
      <GlobalStyle />
      <TestPage
        title="제목입니다"
        contents="내용입니다"
      />
    </>
  )
}

export default App