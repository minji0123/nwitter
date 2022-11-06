/*eslint-disable*/
import { Routes, Route } from 'react-router-dom'

import Auth from '../routes/Auth';
import Home from '../routes/Home';

const MyRouter = ({isLoggedIn}) => {

    return(
        <>
            <Routes>
                {/* 로그인되어있으면 home, 아니면 로그인화면 */}
                {isLoggedIn 
                ?
                <>
                <Route path="/" element = {<Home/>}/>
                </>
                :
                <Route path="/" element = {<Auth/>}/>
                }
            </Routes>
        </>
    )
}

export default MyRouter;