import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC4enNSpa5dRLJ4tpKLcBjhvFWdNLV6nAo",
  authDomain: "bpp-goals.firebaseapp.com",
  projectId: "bpp-goals",
  storageBucket: "bpp-goals.firebasestorage.app",
  messagingSenderId: "1025190612447",
  appId: "1:1025190612447:web:08a6e775f305690ae1086a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)