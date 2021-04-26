import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCY8sUXKbowFa6-k93N6FfEymBNZN8dQP8",
    authDomain: "pbf-modul11-6b07f.firebaseapp.com",
    projectId: "pbf-modul11-6b07f",
    storageBucket: "pbf-modul11-6b07f.appspot.com",
    messagingSenderId: "814654755471",
    appId: "1:814654755471:web:49b5962d7b01a2febb96fa",
    measurementId: "G-CPHBTLTT44"
  };
export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;