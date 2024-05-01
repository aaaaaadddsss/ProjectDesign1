import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDVKqLTNyK8ygxtNmMbnamOKNQ425s1Olo",
  authDomain: "designproject-362db.firebaseapp.com",
  projectId: "designproject-362db",
  storageBucket: "designproject-362db.appspot.com",
  messagingSenderId: "13804216235",
  appId: "1:13804216235:web:597f5b987b08b5ba39bcee",
  measurementId: "G-J11YKEQ4D9",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
