import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  //AGREGAR SU CONFIGURACION DE FIREBASE
  apikey: "AlzaSyBT-OJyOeCFZBrR-XnewR78mTvFGEKj_xc",
  authDomain: "react-34880-61d40.firebaseapp.com",
  projectId: "react-34880-61d40",
  storageBucket: "react-34880-61d40.appspot.com",
  messagingSenderId: "27195071869",
  appId: "1:27195071869:web:1db89f6533f958bc444014",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
