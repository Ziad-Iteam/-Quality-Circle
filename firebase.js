// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPM2Or2tVZAik0wZQ1v0Os4Ww5bzW6InM",
  authDomain: "quality-circle-cfe27.firebaseapp.com",
  projectId: "quality-circle-cfe27",
  storageBucket: "quality-circle-cfe27.appspot.com",
  messagingSenderId: "243678062746",
  appId: "1:243678062746:web:895949d3b60f1b08c41723",
  measurementId: "G-05QCXDJSEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);