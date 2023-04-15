import React from 'react'

// ! 지금까지 배운 내용 정리

// ! [Component]
// * 리액트의 핵심 빌딩 블록 중 하나로,
// * UI 요소를 표현하는 최소한의 단위이며 화면의 특정 부분이 어떻게 생길지 정하는 '선언체'이다.
// App이라는 컴포넌트 하위에 여러가지 하위 컴포넌트가 있고, 이 모든 것들이 부모와 자식 컴포넌트로 구성된다.
// 그것들이 다 props로 부모에서 자식으로 state 형태로써 데이터를 내려준다.
// 리액트의 컴포넌트기반 개발 이전에는 직접 DOM 객체를 조작해야 했다. -> '명령형' 프로그래밍
//  ex. querySelector, ...
// * 명령형은 어떻게(how)를 중요시 여겨 프로그램 제어의 흐름과 같은 방법을 제시하고 목표를 명시하지 않는다.
// ex. const header = document.createElement('h1');
//     header.appendChild('Hello World');
// * 선언형은 무엇(what)을 중요시 여겨 제어의 흐름보다는 원하는 목적을 중요시 여긴다.
// ex. const header = <h1>Hello World</h1>;
//     ReactDOM.render(header, document.getElementById('root'));


// ! [Rendering]
// * 리액트에서 렌더링이란 컴포넌트가 '현재 props와 state의 상태에 기초하여'
// * UI를 어떻게 구성할지 컴포넌트에게 요청하는 작업을 말한다.
// UI를 음식 / 컴포넌트를 주방장 / 리액트를 웨이터로 비교해보자면
// 1. 렌더링을 일으키는 것(triggering)은 : UI를 주문하고 주방으로 전달하는 것
// 2. 렌더링한다는 것은(rendering) : 주방에서 컴포넌트가 UI를 만들고 준비하는 것
// 3. 렌더링 결과를 실제 DOM에 커밋한다는 것은(commit) : 리액트가 준비된(done) UI를 손님 테이블에 올려놓는 것


// ! [Re-Rendering]
// * 첫 렌더링이 끝난 이후에 추가로 렌더링을 트리거하려면 setState,
// * 또는 나중에 추가로 배울 다른 함수들을 이용해 상태를 변경해주면 된다.
// 다시 음식에 비교해보자면
// 1. 리렌더링은 손님이 첫 주문 이후에 갈증이 생겨 추가 음료를 주문하거나 음식이 마음에 들지 않아 새 메뉴를 주문하는 것과 같다.
// 2. 새로운 주문(리렌더링)이 일어나면 리액트가 변경 내용을 주방의 컴포넌트에게 전달하고 컴포넌트는 새로운 요리(UI)를 만든다.
// 3. 새롭게 만들어진 요리(렌더링 결과)는 리액트에 의해 다시 손님 테이블에 올려진다. (DOM에 반영(commit))

function App() {
  return (
    <><h1>Component & Rendering</h1></>
  )
}

export default App