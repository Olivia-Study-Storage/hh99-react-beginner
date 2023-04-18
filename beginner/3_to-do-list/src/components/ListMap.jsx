import React from 'react';

function ListMap({ todos, setTodos, item }) {
  const onDeleteClick = (id) => {
    const deleteTodo = todos.filter(todo => todo.id !== id);
    setTodos(deleteTodo);
  };

  const onStatusClick = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    const changeTodo = [...todos];
    changeTodo[index].isDone = !(changeTodo[index].isDone);
    setTodos(changeTodo);
  };

  return (
    <div className="todo" key={item.id}>
      <h1>{item.title}</h1>
      <p>{item.body}</p>
      <div className="btn">
        <button
          className="btn__delete"
          onClick={() => onDeleteClick(item.id)}
        >
          삭제하기
        </button>
        <button
          className="btn__check"
          onClick={() => onStatusClick(item.id)}
        >
          {!item.isDone ? '완료' : '취소'}
        </button>
      </div>
    </div>
  )
}

export default ListMap