import React from 'react';
import './App.css';

function User(props) {
  return (
    <>
      <section>
        {props.user.age}살 - {props.user.name}
      </section>
    </>
  )
}

function App() {
  const users = [
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ];

  return (
    <div id="wrap">
      {/* 
        map 함수를 사용할 때는 key를 필수로 포함시켜야 한다!
        key는 리액트가 어떤 항목을 변경, 추가, 삭제할지 식별하는 것을 돕기 때문에
        엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 한다.
      */}
      {users.map(user => {
        return <User key={user.id} user={user} />
      })}
    </div>
  )
}

export default App