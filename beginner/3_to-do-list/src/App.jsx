import React from 'react';
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="wrap">
      {/* Header */}
      <Header />

      {/* Form */}
      <section className="form">
        <form className="form__area">
          <label htmlFor="form__title">
            <strong>제목</strong>
            <input 
              type="text"
              id="form__title"
            />
          </label>
          <label htmlFor="form__body">
            <strong>내용</strong>
            <input
              type="text"
              id="form__body"
            />
          </label>
          <button
            className="form__button"
          >
            <strong>추가하기</strong>
          </button>
        </form>
      </section>

      {/* list */}
      <section className="list">
        <div className="list__working">
          <h1>Working</h1>
          <div className="list__area">
            <div className="todo">
              <h1>111</h1>
              <p>222</p>
              <div className="btn">
                <button
                  className="btn__delete"
                >
                  삭제하기
                </button>
                <button
                  className="btn__check"
                >
                  완료
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="list__done">
          <h1>Done</h1>
          <div className="list__area">
          </div>
        </div>
      </section>
    </div>
  )
}

export default App