// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6Fuhh7pmA_IDX2BD7Fgtj2gxS5-sJuZ8",
  authDomain: "tenth-assignment-3267e.firebaseapp.com",
  projectId: "tenth-assignment-3267e",
  storageBucket: "tenth-assignment-3267e.appspot.com",
  messagingSenderId: "27234336554",
  appId: "1:27234336554:web:b6f0c9f6aa0d283218a853"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
;
const auth = getAuth(app)
export default auth;