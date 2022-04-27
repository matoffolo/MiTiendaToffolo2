import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAlQ3Knb9QZxxyIHRQKzoQkCB5SJa9m-eA",
  authDomain: "mi-tienda-6713e.firebaseapp.com",
  projectId: "mi-tienda-6713e",
  storageBucket: "mi-tienda-6713e.appspot.com",
  messagingSenderId: "728829836588",
  appId: "1:728829836588:web:82c955ab6dea5ebcbb0089"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
