import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";


const AppRouter = ({ isLoggedIn }) => { // 상위컴포넌트 (App.js) 에서 받은 props 는 구조분해할당으로 넣어줌

    return(
        <Router>
            <Switch>
                {isLoggedIn 
                    ? (<Route exact path="/">
                            <Home/>
                        </Route>)
                    : (<Route exact path="/">
                            <Auth/>
                        </Route>)                
                }
            </Switch>
        </Router>
    );
};

export default AppRouter;