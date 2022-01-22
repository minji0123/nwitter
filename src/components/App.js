import AppRouter from "components/Router";
import { useState } from "react";
import { authService } from "fbase";

function App() {
  // AppRouter 컴포넌트가 라우터역할을 하면서 코드의 가독성을 챙기기 위해서는 
  // useState 는 App 컴포넌트에서 사용하는게 좋다.

  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); // authService.currentUser 를 값으로 입력해줘서, 로그인상태 파악함
  // console.log(authService.currentUser); // 얘가 null 값

  return (
    <>
      <h1>hello</h1>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
