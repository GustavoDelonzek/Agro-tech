import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyByt915hyHRgoGCNvdI8OR8oRh3cWrASRg",
    authDomain: "nome-86071.firebaseapp.com",
    projectId: "nome-86071",
    storageBucket: "nome-86071.appspot.com",
    messagingSenderId: "27194429538",
    appId: "1:27194429538:web:491449c53a7b9796bb013b"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export default{ firebaseConfig, auth, db };