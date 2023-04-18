import React from 'react';

const style = {
  color: 'red',
  fontWeight: '900',
};

function Child({ houseName, pocketMoney }) {
  return (
    <div>
      나는 이 집안의 막내에요!
      <br />
      할아버지가 우리 집 이름은 <span style={style}>{houseName}</span>이라고 하셨어요.
      <br />
      게다가 용돈도 <span style={style}>{pocketMoney}</span>원 만큼이나 주셨어요!
    </div>
  )
}

export default Child