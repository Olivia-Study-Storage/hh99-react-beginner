import React, { useState } from 'react';
import Button from './components/Button';
import User from './components/User';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const nameChangeHandler = (event) => setName(event.target.value);
  const ageChangeHandler = (event) => setAge(event.target.value);
  const addClickHandler = () => {
    const newUsers = {
      id: users.length + 1,
      age,
      name,
    };
    setUsers([...users, newUsers]);
  };
  const removeClickHandler = (id) => {
    // 아래 한 줄만 적으면 필터링한 값을 useState에 반영하지 않았기 때문에 리렌더링 되지 않는다
    const filterUsers = users.filter(user => user.id !== id);
    setUsers(filterUsers);
  };

  return (
    <div id="wrap">
      <div>
        <label htmlFor="name">
          이름 :&nbsp;
          <input 
            type="text"
            id="name"
            value={name}
            onChange={nameChangeHandler}
           />
        </label>
        <br />
        <label htmlFor="age">
          나이 :&nbsp;
          <input 
            type="text"
            id="age"
            value={age}
            onChange={ageChangeHandler}
           />
        </label>
        <br />
        <Button addClickHandler={addClickHandler}>추가</Button>
      </div>
      <br />
      <div id="content">
        {users.map((item) => {
          return (
            <User 
              key={item.id}
              item={item} 
              removeClickHandler={removeClickHandler} 
            />
          )
        })}
      </div>
    </div>
  )
}

export default App