// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMMSL6tzPvxBQBMoa44wcFssqcj-GhLks",
  authDomain: "student-registration-for-97777.firebaseapp.com",
  projectId: "student-registration-for-97777",
  storageBucket: "student-registration-for-97777.appspot.com",
  messagingSenderId: "572694411071",
  appId: "1:572694411071:web:a50e106cb1859bbffc458a",
  measurementId: "G-HJND9N355H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;