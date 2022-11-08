/*eslint-disable*/

import { useState } from 'react';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, } from 'firebase/auth';
import { async } from '@firebase/util';

const Auth = () => { 
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [newAccount,setnewAccount] = useState(true);

    const onChange = (e) => {
        const {target:{name,value}} = e;

        if(name==="email"){
            setEmail(value);
        }else if(name==="password"){
            setPassword(value);
        }

        // console.log(e.target.name);
    };
    const onSubmit = async(e) => {

        // preventDefault: 기본 행위가 실행되는걸 원치 않는다. 내가 컨트롤할 수 있게 해줘라
        // 이거안쓰면 새로고침됨
        e.preventDefault();

        try {
            let data;
            const auth = getAuth();
            if (newAccount) {
                data = await createUserWithEmailAndPassword(auth, email, password);
            } else {
                data = await signInWithEmailAndPassword(auth, email, password);
            }
                console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <>
            <form onSubmit={onSubmit}>
                <input 
                    name="email" 
                    type="text" 
                    placeholder="email" 
                    value={email} 
                    onChange={onChange} 
                    required
                />
                <input 
                    name="password" 
                    type="password" 
                    placeholder="password" 
                    value={password} 
                    onChange={onChange} 
                    required
                />
                <input type="submit" value={newAccount ? "회원가입":"로그인"}/>
            </form>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
        </>
    )
}

export default Auth;