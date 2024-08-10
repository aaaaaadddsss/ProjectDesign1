import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBTnVs5WxylzZDFVZQoUOtnEM_ZhFW6HN8",
  authDomain: "projectdesign2-6eebb.firebaseapp.com",
  databaseURL:
    "https://projectdesign2-6eebb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "projectdesign2-6eebb",
  storageBucket: "projectdesign2-6eebb.appspot.com",
  messagingSenderId: "584023560287",
  appId: "1:584023560287:web:2ff56e79dd57abf2a9cbea",
  measurementId: "G-T3MTNDY5TF",
};

// Check if Firebase app is already initialized
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getDatabase(app);
