// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJmeEpR3VlBurXavnjHgdTIFYS4GG6eSE",
  authDomain: "social-media-app-192bb.firebaseapp.com",
  projectId: "social-media-app-192bb",
  storageBucket: "social-media-app-192bb.appspot.com",
  messagingSenderId: "955507285946",
  appId: "1:955507285946:web:14212d5d0056a40bd50783",
  measurementId: "G-GWQ2VSPPV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)