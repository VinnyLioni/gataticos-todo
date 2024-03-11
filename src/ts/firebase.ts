// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdcp2QrgzEsfyghuJVhypBgcPjpOS2QZo",
  authDomain: "gataticos-todo.firebaseapp.com",
  projectId: "gataticos-todo",
  storageBucket: "gataticos-todo.appspot.com",
  messagingSenderId: "183087610133",
  appId: "1:183087610133:web:62fe093f40dfbeeb77111c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = getAuth(app)

export { auth, db}