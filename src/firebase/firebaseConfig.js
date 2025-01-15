// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbnlh6VPncnlbLC2vggrEzCg3A96Y-BNk",
  authDomain: "vibesnap-96df0.firebaseapp.com",
  projectId: "vibesnap-96df0",
  storageBucket: "vibesnap-96df0.firebasestorage.app",
  messagingSenderId: "331387223785",
  appId: "1:331387223785:web:03833d7d0669d6e7ca7a78",
  measurementId: "G-E684R1TWZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and export it
const auth = getAuth(app);

export { auth };