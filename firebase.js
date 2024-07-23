import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAXOlAz0ngBUnjLt3oDt5aetpfU2zfvjLc",
  authDomain: "thanhdao-3c5ff.firebaseapp.com",
  projectId: "thanhdao-3c5ff",
  storageBucket: "thanhdao-3c5ff.appspot.com",
  messagingSenderId: "927313929250",
  appId: "1:927313929250:web:b7fc9fc1dca2e525cbd67b",
  measurementId: "G-G7K4PNVJ3V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;
