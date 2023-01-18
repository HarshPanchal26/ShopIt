// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'; 
const firebaseConfig = {
  apiKey: "AIzaSyAseWtphJEsU92q9uSy-xY5Qld08yX5Nv0",
  authDomain: "shop-it-again.firebaseapp.com",
  projectId: "shop-it-again",
  storageBucket: "shop-it-again.appspot.com",
  messagingSenderId: "874286739122",
  appId: "1:874286739122:web:588bd4c9f3832c79aea3ab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);