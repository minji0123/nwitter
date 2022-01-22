import { useState } from 'react';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (event) => {
        console.log(event.target.name); // 어떤 input에서 
    };

    const onSubmit = (event) =>{
        event.preventDefault();
    };

    return(
        <>
        <form onSubmit={onSubmit}>0
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
            <input type="submit" value="Log In"/>
        </form>
        <div>
            <button>Google로 로그인</button>
            <button>Github로 로그인</button>
        </div>
        </>
    );
};


export default Auth;