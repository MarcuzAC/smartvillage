// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-6cdd9.firebaseapp.com",
  projectId: "mern-6cdd9",
  storageBucket: "mern-6cdd9.appspot.com",
  messagingSenderId: "337034512876",
  appId: "1:337034512876:web:51821321cbf7a6e120d8c9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);