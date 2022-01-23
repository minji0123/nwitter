// 트윗을 위한 폼 만들기
import { useEffect, useState } from "react";
import { dbService } from "fbase";

const Home = () => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]); // 데이터를 배열에 넣을려그

    const getNweets = async () => {
        const dbNweets = await dbService.collection("nweets").get();
        dbNweets.forEach((document) =>  // 전달할 데이터는 스냅샷이기 때문에 forEach 로 스냅샷을 돌아야함
            // console.log(document.data())
            setNweets((prev) => [document.data(), ...prev]) // ...는 spread []를 벗기는거
        ); 
    };

    useEffect(() => { // useEffect 함수는 특정한 시점에서 실행되는 함수. 특정한 시점 : 컴포넌트가 모두 마운트된 이후
        getNweets(); // useEffect는 await, async 랑 같이 못씀 그래서 getNweets() 를 따로 빼서 감싸줌
    },[]);// []로 지정해야지 컴포넌트가 최초로 랜더링이 완료되었을 때 1회만 동작함

    console.log(nweets);


    const onSubmit = async (event) => { // 폼에있는걸 제출하는거야 (가입하기 버튼)
        event.preventDefault(); // 원래의 이벤트가 발생하지 않도록 방지!
        await dbService.collection("nweets").add({ // dbService.collection("nweets")는 컬렉션을 생성해
            text: nweet, // 컬렉션은 텍스트 필드로 저장한고임
            createAt: Date.now(), //.add(~~,) 는 컬렉션을 생성해
        });
        setNweet(""); // 저장을 다 했으면 빈 문자열로 상태를 초기화했어
    };

    const onChange = (event) => { // input 값이 바뀌었을 때 발동하는거야
        event.preventDefault();
        const { target: {value},} = event; // const value = event.target.value; 랑 같은거야
        setNweet(value);
    };
    

    return (
        <>
            <span>Home</span>
            <form onSubmit={onSubmit}>
                <input 
                    value={nweet}
                    onChange={onChange}
                    type="text"
                    placeholder="what's on your mind?"
                    maxLength={120}
                />
                <input type="submit" value="Nweet" />
            </form>
        </>
    );
};
    

export default Home;