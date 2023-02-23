// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH_5daRrjiKLPr3YribIZpunKfbRt78vg",
  authDomain: "comida-chile.firebaseapp.com",
  projectId: "comida-chile",
  storageBucket: "comida-chile.appspot.com",
  messagingSenderId: "1001690441386",
  appId: "1:1001690441386:web:8217d21c43eb1ca9d552d3"
};

// Initialize Firebase: especificamos los servicios que queremos usar: firestore database
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);