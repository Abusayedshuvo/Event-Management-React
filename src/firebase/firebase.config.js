// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4_Mpua7ZCgAdPCq4Ah8DodTgdKo0bZUk",
  authDomain: "assignment-9-d5747.firebaseapp.com",
  projectId: "assignment-9-d5747",
  storageBucket: "assignment-9-d5747.appspot.com",
  messagingSenderId: "1783287420",
  appId: "1:1783287420:web:3909f63cfc36c790ca03f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
