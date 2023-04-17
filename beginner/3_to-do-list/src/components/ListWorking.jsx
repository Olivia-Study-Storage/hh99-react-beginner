import React from 'react';
import ListMap from './ListMap';

function ListWorking({ todos, setTodos }) {
  return (
    <section className="list__working">
      <h1>🔥Working🔥</h1>
      <div className="list__area">
      {
        todos
        .filter((todo) => !todo.isDone)
        .map((item) => <ListMap key={item.id} todos={todos} setTodos={setTodos} item={item} />)
      }
      </div>
    </section>
  )
}

export default ListWorking