import { authService } from "fbase";
import { useHistory } from "react-router-dom";

const Profile = () => {
    const history = useHistory();

    const onLogOutClick = () => {
        authService.signOut(); // 자동으로 indexedDB 에 있는 정보를 알아서 비우고, 로그아웃 처리도 해줌
        history.push('/'); // push() 는 () 안의 경로로 주소를 이동시켜줌 (배웠던거같으)
    };

    return (
        <>
        <span>Profile</span>
        <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};




export default Profile;