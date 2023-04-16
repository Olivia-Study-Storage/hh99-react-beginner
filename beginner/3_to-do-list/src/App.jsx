import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form';
import List from './components/List';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="wrap">
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App