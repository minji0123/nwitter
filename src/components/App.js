/*eslint-disable*/
import { useState } from 'react';

import MyRouter from "components/MyRouter";
import {app,auth} from "MyFirebase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
  console.log(auth.currentUser);

  return (
  <>
    <MyRouter isLoggedIn={isLoggedIn}/>
    <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
  </>
  );
}

export default App;
