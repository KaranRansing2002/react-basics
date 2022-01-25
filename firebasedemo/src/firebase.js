// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import Firebase from './components/Firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvTmjSDS-2KNFLRhpYE6ah6dIK9irvEgA",
  authDomain: "fir-31cd3.firebaseapp.com",
  projectId: "fir-31cd3",
  storageBucket: "fir-31cd3.appspot.com",
  messagingSenderId: "798555970873",
  appId: "1:798555970873:web:fcc1c16427610b53199ce8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth();

const firestore=firebase.firestore();

export const database={
  users : firestore.collection('users')
}

export const storage=firebase.storage();