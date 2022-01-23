// navigation : 사이트를 이리저리 옮겨 다닐 수 있도록!
// components 폴더에 넣은 이유는 여러 페이지에서 공통되게 보여야 하기 때무니다
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <nav> This is navigation </nav>
            <nav>
                <ul>
                    <li>
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">My Profile</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};
export default Navigation;