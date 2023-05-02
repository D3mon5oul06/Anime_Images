import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAGfpQObjHJ0ktjxyeHqOfz6RHnwzRcva8",
  authDomain: "portadajuego-firebase.firebaseapp.com",
  projectId: "portadajuego-firebase",
  storageBucket: "portadajuego-firebase.appspot.com",
  messagingSenderId: "1007177022439",
  appId: "1:1007177022439:web:1a49e49ec963d775cddb42",
  measurementId: "G-5NHL6L544H"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebase.storage();

export {
  storage, firestore as default
}