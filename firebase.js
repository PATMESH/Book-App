import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCNXMjGSL36xSfJlaY8MoTUhHGg5j6c5uM",
  authDomain: "book-ceccb.firebaseapp.com",
  projectId: "book-ceccb",
  storageBucket: "book-ceccb.appspot.com",
  messagingSenderId: "666698053438",
  appId: "1:666698053438:web:98be28a83ddec20c52de6f",
  measurementId: "G-XM12BJ77P4"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };


