import { authService } from 'fbase';
import { useState } from 'react';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);

    const onChange = (event) => {
        console.log(event.target.name); // 어떤 input 엘리먼트에서 입력을 시도하는지
        const {
            target: {name, value},
        } = event;
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
         console.log(error);
        }
    };

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
        </form>
        <div>
            <button>Google로 로그인</button>
            <button>Github로 로그인</button>
        </div>
        </>
    );
};


export default Auth;