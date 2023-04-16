import React from 'react';
import ListMap from './ListMap';

function List({ todos, setTodos }) {
  return (
    <section className="list">
      <div className="list__working">
        <h1>🔥Working🔥</h1>
        <div className="list__area">
        {
          todos
          .filter((todo) => !todo.isDone)
          .map((item) => <ListMap key={item.id} todos={todos} setTodos={setTodos} item={item} />)
        }
        </div>
      </div>

      <div className="list__done">
        <h1>🎉Done🎉</h1>
        <div className="list__area">
        {
          todos
          .filter((todo) => todo.isDone)
          .map((item) => <ListMap key={item.id} todos={todos} setTodos={setTodos} item={item} />)
        }
        </div>
      </div>  
    </section>
  )
}

export default List