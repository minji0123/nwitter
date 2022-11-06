/*eslint-disable*/

import { useState } from 'react';

const Auth = () => { 
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const onChange = (e) => {
        const {target:{name,value}} = e;
        // console.log(value);

        if(name==="email"){
            setEmail(value);
        }else if(name==="password"){
            setPassword(value);
        }

        console.log(e.target.name);
    };
    const onSubmit = (e) => {
        // preventDefault: 기본 행위가 실행되는걸 원치 않는다. 내가 컨트롤할 수 있게 해줘라
        // 이거안쓰면 새로고침됨
        e.preventDefault();
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
                <input type="submit" value="Log In"/>
            </form>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
        </>
    )
}

export default Auth;