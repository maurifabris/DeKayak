// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3BlAVlJcpoL4C6DttcHCLSfqvol5a0bY",
  authDomain: "dekayak-2d689.firebaseapp.com",
  projectId: "dekayak-2d689",
  storageBucket: "dekayak-2d689.appspot.com",
  messagingSenderId: "1054342901242",
  appId: "1:1054342901242:web:62f40f4e2117bf450b8843"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)