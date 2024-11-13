// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPB8H_0HioyBYOqNfteLYfKeXeBP7qzRg",
  authDomain: "netflixgpt-d86d8.firebaseapp.com",
  projectId: "netflixgpt-d86d8",
  storageBucket: "netflixgpt-d86d8.firebasestorage.app",
  messagingSenderId: "523467610777",
  appId: "1:523467610777:web:53195baf44dd3cd3f33608",
  measurementId: "G-V3LF3KM5SW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()