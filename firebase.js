// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz2PU1vT-X4tD8zi_zyU8uxDK_Y4-YzHc",
  authDomain: "netflixgpt-a203a.firebaseapp.com",
  projectId: "netflixgpt-a203a",
  storageBucket: "netflixgpt-a203a.firebasestorage.app",
  messagingSenderId: "516733820427",
  appId: "1:516733820427:web:6f40c39542f2768a4e710e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
