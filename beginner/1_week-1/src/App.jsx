import React, { useState } from 'react'

function App() {
  // ! State를 사용하는 목적 : UI를 변경하기 위해 (렌더링을 위해서) 별도로 상태를 관리하는 것!
  // * useState : 괄호를 열고 닫으면 동작하는 hook (함수)
  // 사용법 : useState('initial value');
  // return : [state, setState] (state와 state를 다룰 수 있는 메서드) 배열
  // 이 두 가지를 구조분해할당으로 다음과 같이 사용 가능하다.
  // const [value, setValue] = useState('initial value');

  // ex.
  // const [count, setCount] = useState(0);
  // const [todoList, setTodoList] = useState([]);

  const [name, setName] = useState('김민지');
  const [fruit, setFruit] = useState('');

  return (
    <>
      <div>
        {name}&nbsp;
        <button onClick={function() {
          setName('강해린');
        }}>
          클릭
        </button>
      </div>

      <br />

      <div>
        {/* input 안에 입력되는 값을 fruit와 매칭시키려면 value와 onChange를 사용하면 된다 */}
        {/* onChange에는 항상 evnet가 매개변수로 딸려온다 */}
        과일 :&nbsp;
        <input
          value={fruit}
          onChange={(event) => setFruit(event.target.value)}
        />
        <br />
        {fruit}
      </div>
    </>
  )
}

export default App