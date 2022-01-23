import { authService, firebaseInstance } from 'fbase';
import { useState } from 'react';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) => {
        console.log(event.target.name); // 어떤 input 엘리먼트에서 입력을 시도하는지
        const { target: {name, value},} = event;
        if (name === "email") {
            setEmail(value);    
        }else if (name === "password") {
            setPassword(value);
        }
    };
    // async await : 기다렸다가 실행ㄱ 
    const onSubmit = async (event) =>{
        event.preventDefault(); // onSubmit 은 데이터를 전송할 때 페이지가 새로고침됨 그래서 preventDefault 써줌
        try {
            let data;
            if(newAccount) {
                // create newAccount
                data = await authService.createUserWithEmailAndPassword(email, password); // 인자로 전달받은 데이터를 파이어베이스의 db에 저장
            } else {
                // log in 
                data = await authService.signInWithEmailAndPassword(email, password); // 인자로 전달받은 데이터를 파베 db에 저장해서 확인 -> 로그인ㄱ
            }
            console.log(data);
        } catch (error){
        //  console.log(error);
            setError(error.message);
        }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev); // 계정 만든거 (true) 값을 toggleAccount 에 넘김
        // 함수를 인자로 전달하면 인자로 전달한 함수의 1번째 인자(prev) 에 newAccount 값이넘어온다.

    const onSocialClick = async (event) => { // event.target.name 담음
        console.log(event.target.name);
        const { target : { name },} = event;
        let provider; 
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider(); // provider에 GoogleAuthProvider를 담음
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider(); // provider에 GithubAuthProvider를 담음
        }
        const data = await authService.signInWithPopup(provider);
        console.log(data);
    }
    return(
        <>
            <form onSubmit={onSubmit}>
                <input
                    name="email" 
                    type="email" 
                    placeholder="Email" 
                    required
                    value={email}
                    onChange={onChange}
                />
                <input 
                    name="password"
                    type="password" 
                    placeholder="Password" 
                    required
                    value={password}
                    onChange={onChange}
                />
                <input type="submit" value={newAccount ? "Create Account" : "Log in"}/>
                {error}
            </form>
            <button onClick={toggleAccount}>
                {newAccount ? "Sign In" : "Create Account"}
            </button>

            <div>
                <button onClick={onSocialClick} name="google">Google로 로그인</button>
                <button onClick={onSocialClick} name="github">Github로 로그인</button>
            </div>
        </>
    );
};


export default Auth;