import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-DQmWNyrcczDlTxQBNxWsFvcJDkpx2xA",
  authDomain: "react-34880-daf8d.firebaseapp.com",
  projectId: "react-34880-daf8d",
  storageBucket: "react-34880-daf8d.appspot.com",
  messagingSenderId: "263692583829",
  appId: "1:263692583829:web:8826048df7ba9252326c9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
