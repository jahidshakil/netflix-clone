// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCWDDj_SkN1c7LzXkj5cHzN9h17AMsGQeU",
    authDomain: "netflix-clone-8da1b.firebaseapp.com",
    projectId: "netflix-clone-8da1b",
    storageBucket: "netflix-clone-8da1b.appspot.com",
    messagingSenderId: "811336473194",
    appId: "1:811336473194:web:22bc8389f002b1825d4813",
    measurementId: "G-Z6SP0L83Y6"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;