import React, { useState } from 'react'

// ! 실습
// 아이디에 및 비밀번호에 값을 입력하고 [로그인] 버튼을 누르면 alert로 고객이 입력한 값 알려주기
// alert -> `고객님이 입력하신 아이디는 ${입력아이디}이며, 비밀번호는 ${입력비밀번호}입니다.`

// ! 다음 사항을 준수할 것
// 1. id와 pwd 필드의 값을 state로 관리하고, 변경이 일어날 때마다 setState로 동기화시킬 것
// 2. alert를 띄운 이후에는 id와 pwd값 빈 값으로 초기화
// 3. pwd는 보여지면 안됨

function App() {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const idChangeHandler = (event) => setId(event.target.value);
  const pwdChangeHandler = (event) => setPwd(event.target.value);
  const onClickHandler = () => {
    alert(`고객님이 입력하신 아이디는 ${id}이며, 비밀번호는 ${pwd}입니다.`);
    setId('');
    setPwd('');
  }

  return (
    <div>
      <label htmlFor="id">
        아이디 :&nbsp;
        <input
          type="text"
          id="id"
          value={id}
          onChange={idChangeHandler}
        />
      </label>
      <br />
      <label htmlFor="pwd">
        비밀번호 :&nbsp;
        <input
          type="password"
          id="pwd"
          value={pwd}
          onChange={pwdChangeHandler}
        />
      </label>
      <br />
      <button
        onClick={onClickHandler}
      >
        로그인
      </button>
    </div>
  )
}

export default App