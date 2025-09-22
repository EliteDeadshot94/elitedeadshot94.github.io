import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6TVGiW4TAvTPKMVYIGkk57j8EcTtg7M8",
  authDomain: "website-e13d8.firebaseapp.com",
  projectId: "website-e13d8",
  storageBucket: "website-e13d8.firebasestorage.app",
  messagingSenderId: "302211042727",
  appId: "1:302211042727:web:1159877ddec21925f83a82",
  measurementId: "G-B7M9KV8H6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;