import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Header from './components/Header'

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [todos, setTodos] = useState([]);

  const onTitleChange = (event) => setTitle(event.target.value);
  const onBodyChange = (event) => setBody(event.target.value);
  const onSubmitClick = (event) => {
    event.preventDefault();
    const newTodo = {
      id: nanoid(),
      title,
      body,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle('');
    setBody('');
  };
  const onStatusClick = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    let changeTodo = [...todos];
    [...todos][index].isDone = !([...todos][index].isDone);
    setTodos(changeTodo);
  }

  return (
    <div className="wrap">
      <Header />

      {/* Form */}
      <section className="form">
        <form className="form__area">
          <label htmlFor="form__title">
            <strong>제목</strong>
            <input 
              type="text"
              id="form__title"
              value={title}
              onChange={onTitleChange}
            />
          </label>
          <label htmlFor="form__body">
            <strong>내용</strong>
            <input
              type="text"
              id="form__body"
              value={body}
              onChange={onBodyChange}
            />
          </label>
          <button
            className="form__button"
            onClick={onSubmitClick}
          >
            <strong>추가하기</strong>
          </button>
        </form>
      </section>

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