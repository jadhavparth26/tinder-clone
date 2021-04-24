import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyASFVLL6K6bwCFnGhsDl86BQ0HZLQCeAfo",
    authDomain: "tinder-clone-5a76d.firebaseapp.com",
    databaseURL: "https://tinder-clone-5a76d.firebaseio.com",
    projectId: "tinder-clone-5a76d",
    storageBucket: "tinder-clone-5a76d.appspot.com",
    messagingSenderId: "838502615010",
    appId: "1:838502615010:web:81939890074360fe901bbb",
    measurementId: "G-KBLZZN5F5L"
  };
   const firebaseApp = firebase.initializeApp(firebaseConfig);

   const database = firebaseApp.firestore();
   export default database;