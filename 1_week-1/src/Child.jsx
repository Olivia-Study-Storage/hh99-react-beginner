import React from 'react'

// * [defaultProps] 부모 컴포넌트에서 props를 보내주지 않아도 설정될 (임시) 초기 값
// 부모 컴포넌트에서 해당 props가 내려오면 defaultProps는 사라지고 내려받은 props값으로 변경된다
function Child({ age, name, children }) {
  console.log(age);
  console.log(name);
  console.log(children);

  return (
    <div>Child</div>
  )
}

Child.defaultProps = {
  name: 'Olivia',
}

export default Child