import React, { useState } from 'react'

// ! [불변성] 메모리에 있는 값을 변경할 수 없는 것

// ? 데이터의 선언
// * 원시데이터 : 숫자, 문자, 불리언, ...
// 변수명은 다르지만 메모리에서는 같은 값을 바라보고 있다.
let number = 1;
let secondNumber = 1;
console.log(`number와 secondNumber 일치하나요? ${number === secondNumber}`); // true

// * 원시데이터가 아닌 것들 : 배열, 객체, 함수, ..
// obj1의 name이 'kim'인 것을 바로 바라보는 것이 아니라
// 어떤 한 공간에 name이 'kim'이라는 별도의 공간을 만들고 obj1은 그 주소값을 바라본다.
let obj1 = {
  name: 'kim',
}
let obj2 = {
  name: 'kim',
}
console.log(`obj1과 obj2가 일치하나요? ${obj1 === obj2}`);  // false
// -> 두 값은 같아보이지만 obj1을 재사용하는 것이 아니라 별도의 공간에 새로 저장한다.


// ? 데이터의 수정
// * 원시데이터는 '불변성이 있다'
// 원시데이터 number의 값을 2로 수정하면 2라는 값의 주소가 새로 생성되므로 secondNumber에는 영향이 없다.
number = 2;

// * 객체는 '불변성이 없다'
// obj1은 name이 kim -> park으로 바뀌었음에도 여전히 이전과 같은 주소값을 바라보고 있다.
obj1.name = 'park';


// ! 정리
// 원시데이터는 수정을 했을 때 메모리에 저장된 값 자체를 바꿀 수 없다.
// 대신 새로운 저장 공간을 만들고 그 주소값을 바라본다.

// 원시데이터가 아닌 것들은 기존에 저장되어있던 공간의 값 자체를 바꿔버린다.


// ! 그렇다면 리액트에서 이 개념이 왜 중요한가?
// 리액트에서는 컴포넌트가 화면에 그려지기 위해서 렌더링을 한다.
// 렌더링이 되는 조건은 'state'값이 바뀌는 것이다.
// 따라서 변수 값이 바뀌더라도 state값을 바꿔주지 않는다면 렌더링이 일어나지 않는다.
// * => 리액트는 화면을 렌더링할지를 state의 변화에 따라 결정한다. 따라서 단순 변수는 무시한다.


// ! 불변성과 state
// 우리가 name을 kim -> park으로 바꿔도 obj1은 이전과 동일한 주소값을 보고있기 때문에 리렌더링이 일어나지 않는다.
// 따라서 불변성(메모리에 있는 값을 변경할 수 없는 것)을 지켜주는 것이 너무나도 중요하다.


// ? 그렇다면 불변성을 지켜주는 방법은? -> 순수함수를 사용한다
// ! [순수함수] 하나 이상의 인자를 받고, 인자를 변경하지 않고, 참조하여 새로운 값을 반환하는 함수
// 아래의 예시를 통해 살펴보자.
function App() {
  const [obj, setObj] = useState({
    name: 'hansol',
    age: 35,
  });

  return (
    <div>
      <h1>불변성</h1>
      <p>{obj.name}</p>
      <button onClick={() => {
        // 이렇게 코드를 작성했다면, obj.name의 값은 olivia로 바뀌었지만 리렌더링은 되지 않는다.
        obj.name = 'olivia';
        console.log(obj.name);
        setObj(obj);

        // 해결 방법은? 새로운 객체를 만들어줘야 한다! (아예 다른 주소값을 바라보게 해야 한다)
        const newObj = {...obj};
        setObj(newObj);
      }}>변경</button>
    </div>
  )
}

export default App