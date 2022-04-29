// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxQbshs6cb4iO59Yx5yd16I1ff9kAp7CA",
  authDomain: "sluck-ccc28.firebaseapp.com",
  projectId: "sluck-ccc28",
  storageBucket: "sluck-ccc28.appspot.com",
  messagingSenderId: "660850693533",
  appId: "1:660850693533:web:9f2deac4c63beae538cb74",
  measurementId: "G-YCJ0M1N7KY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);