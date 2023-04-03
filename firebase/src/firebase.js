// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVqBqqFaW0GgC-IGgcM5lbVt-g44-9iNE",
  authDomain: "fir-practice-702df.firebaseapp.com",
  projectId: "fir-practice-702df",
  storageBucket: "fir-practice-702df.appspot.com",
  messagingSenderId: "589090218983",
  appId: "1:589090218983:web:74002ca126321a042e9342",
  measurementId: "G-B6LXFZZFK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

