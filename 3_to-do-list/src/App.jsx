import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form';
import ListWorking from './components/ListWorking';
import ListDone from './components/ListDone';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="wrap">
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <ListWorking todos={todos} setTodos={setTodos} />
      <ListDone todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App