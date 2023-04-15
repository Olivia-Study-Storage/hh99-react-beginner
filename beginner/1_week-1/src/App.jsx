import './App.css';

// im : 안쪽 (들여온다)
// ex(out) : 바깥쪽 (내보낸다)

// 컴포넌트 (여기서는 App) 의 이름은 무조건 대문자로 시작해야 한다.
// 안의 폴더는 카멜케이스로 작성한다. ex.componentFolder
function App() {
  // 여기가 자바스크립트를 쓸 수 있는 영역이다.

  return (
    // HTML이 아닌, JSX(JavaScript + XML (작스)) 문법!
    // js를 쓰고 싶다면 {}를 이용해 사용한다.
    <div>
      Learn Reactttttttt!
    </div>
  );
}

export default App;