import AppRouter from "components/Router";
import { useEffect, useState } from "react";
import { authService } from "fbase";

function App() {
  // AppRouter 컴포넌트가 라우터역할을 하면서 코드의 가독성을 챙기기 위해 
  // useState 는 App 컴포넌트에서 사용하는게 좋다.
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log(authService.currentUser); // 얘가 null 값
  // setInterval(()=> console.log(authService.currentUser),2000); // 2초마다 auth~함수를 실행시켜서 회원가입->로그인처리완료 가 얼마나 걸리는지 파악

  useEffect(()=> { // useEffect 함수는 특정한 시점에서 실행되는 함수. 특정한 시점 : 파베 로그인 정보를 받을 때(파베가 초기화되는 시점)
    authService.onAuthStateChanged((user) => {
      if (user){ // 여기서 로그인 상태 isLoggedIn 을 변경한다!
        setIsLoggedIn(user);
      } else{
        setIsLoggedIn(false);
      }
      setInit(true); // 여기서 init 상태를 변경한다!!
    });
  }, []);
  // []로 지정해야지 컴포넌트가 최초로 랜더링이 완료되었을 때 1회만 동작함
  return (
    <>
      <h1>hello</h1>
      {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "initializing..."}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
