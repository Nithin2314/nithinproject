// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfX8Mn74GeEa2OynsxNu5eJDuxj4cMpsY",
  authDomain: "chitfund23.firebaseapp.com",
  projectId: "chitfund23",
  storageBucket: "chitfund23.appspot.com",
  messagingSenderId: "1082704377278",
  appId: "1:1082704377278:web:00b52866a7ada38b2475ef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

