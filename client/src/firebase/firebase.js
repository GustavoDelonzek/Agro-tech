// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByt915hyHRgoGCNvdI8OR8oRh3cWrASRg",
  authDomain: "nome-86071.firebaseapp.com",
  projectId: "nome-86071",
  storageBucket: "nome-86071.appspot.com",
  messagingSenderId: "27194429538",
  appId: "1:27194429538:web:491449c53a7b9796bb013b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth}