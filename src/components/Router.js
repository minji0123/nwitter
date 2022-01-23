import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn }) => { // 상위컴포넌트 (App.js) 에서 받은 props 는 구조분해할당으로 넣어줌

    return(
        <Router>
            {isLoggedIn && <Navigation/>} 
                {/* isLoggedIn 일 때 (로그인 상태일 때) Navigation 뵤여줌 */}
            <Switch>
                {isLoggedIn ? (
                <>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                </>
                ) : (
                    <Route exact path="/">
                        <Auth/>
                    </Route>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;