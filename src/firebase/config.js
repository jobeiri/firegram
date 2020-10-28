import * as firebase from "firebase";

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
const projectFirebase = firebase.firestore();

export { projectStorage, projectFirebase };
