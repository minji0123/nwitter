// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import "firebase/compat/auth"; // firebase 인증 모듈을 쓰기 위해 
import "firebase/compat/firestore"; //


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const authService = firebase.auth(); // 로그인을 위해 사용할거임. authService 변수에 담아놓음
export const firebaseInstance = firebase; // 쇼셜로그인을 위해 사용할거임. 근데 쇼설로그인은 위처럼 .auth 같은 함수가없어서 전부 다 export 해야됨
export const dbService = firebase.firestore(); // 

// const app = initializeApp(firebaseConfig);