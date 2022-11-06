import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import firebase from "./firebase";
import { BrowserRouter } from "react-router-dom";

// import firebase from "firebase/compat/app";
console.log(firebase);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
