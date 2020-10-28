import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDiEARyae5E6cxXpGqIuaRddhkl8oO9HEQ",
  authDomain: "jobeiri-firegram.firebaseapp.com",
  databaseURL: "https://jobeiri-firegram.firebaseio.com",
  projectId: "jobeiri-firegram",
  storageBucket: "jobeiri-firegram.appspot.com",
  messagingSenderId: "43821669482",
  appId: "1:43821669482:web:8a7e812dd1341fd797fe13",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
