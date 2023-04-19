import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function Form({ todos, setTodos }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onTitleChange = (event) => setTitle(event.target.value);
  const onBodyChange = (event) => setBody(event.target.value);

  const onSubmitClick = (event) => {
    event.preventDefault();

    if(title === '' || body === '') {
      alert('투 두 리스트를 입력해주세요.');
      return;
    }

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

  return (
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
  )
}

export default Form