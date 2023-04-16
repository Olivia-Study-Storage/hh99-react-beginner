import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form';

function App() {
  const [todos, setTodos] = useState([]);

  const onDeleteClick = (id) => {
    const deleteTodo = todos.filter(todo => todo.id !== id);
    setTodos(deleteTodo);
  };

  const onStatusClick = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    let changeTodo = [...todos];
    [...todos][index].isDone = !([...todos][index].isDone);
    setTodos(changeTodo);
  };

  return (
    <div className="wrap">
      <Header />
      <Form todos={todos} setTodos={setTodos} />

      {/* List */}
      <section className="list">
        <div className="list__working">
          <h1>🔥Working🔥</h1>
          <div className="list__area">
          {
            todos.filter((todo) => {
              return !todo.isDone
            })
            .map((todo) => {
              return (
                <div className="todo" key={todo.id}>
                  <h1>{todo.title}</h1>
                  <p>{todo.body}</p>
                  <div className="btn">
                    <button
                      className="btn__delete"
                      onClick={() => onDeleteClick(todo.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="btn__check"
                      onClick={() => onStatusClick(todo.id)}
                    >
                      {!todo.isDone ? '완료' : '취소'}
                    </button>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
        <div className="list__done">
          <h1>🎉Done🎉</h1>
          <div className="list__area">
          {
            todos.filter((todo) => {
              return todo.isDone
            })
            .map((todo) => {
              return (
                <div className="todo" key={todo.id}>
                  <h1>{todo.title}</h1>
                  <p>{todo.body}</p>
                  <div className="btn">
                    <button
                      className="btn__delete"
                      onClick={() => onDeleteClick(todo.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="btn__check"
                      onClick={() => onStatusClick(todo.id)}
                    >
                      {!todo.isDone ? '완료' : '취소'}
                    </button>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </section>
    </div>
  )
}

export default App