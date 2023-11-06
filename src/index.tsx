import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// firebase test
import database from "./Firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore"
import AuthProvider from 'context/authProvider';


const q = query(collection(database, "board"))
getDocs(q).then( (querySnapshot)=>{
    querySnapshot.forEach((doc) => {
        let data = doc.data()  //저장된 데이터
        let id = doc.id  //고유 아이디
        console.log(id, data);
    })
})


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);

console.log(process.env)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
