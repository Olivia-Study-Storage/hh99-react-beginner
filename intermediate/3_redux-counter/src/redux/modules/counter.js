// ! modules -> state들의 그룹!

// * 초기 상태값(state)
const initialState = {
  number: 0,
};

// TODO 코드가 이해 안간다고 절망하지 말고 그냥 함수구나 하고 넘길 것! 사용 방법이 더 중요함
// * 리듀서 : state를 action의 type에 따라 변경하는 함수
// input : state와 action
// 들어온 state값이 없으면 initialState를 초기값으로 지정해준다.
// action(state를 어떻게 할 것인지에 대한 표현) 객체는 타입을 가지고 있다.
const counter = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// * 리듀서를 바깥으로 내보내기
export default counter;