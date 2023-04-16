import React, { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const nameChangeHandler = (event) => setName(event.target.value);
  const ageChangeHandler = (event) => setAge(event.target.value);
  const btnClickHandler = () => {
    const newUsers = {
      id: users.length + 1,
      age,
      name,
    };
    setUsers([...users, newUsers]);
  }

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
        <button
          onClick={btnClickHandler}
        >추가</button>
      </div>
      <br />
      <div id="content">
        {users.map((item) => {
          return (
            <section key={item.id}>
              {item.age} - {item.name}
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default App