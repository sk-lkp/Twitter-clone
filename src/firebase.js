
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCa9kKB01Sq28PkXjCHmTLEctJy1bfEnKY",
    authDomain: "twitter-3-78004.firebaseapp.com",
    projectId: "twitter-3-78004",
    storageBucket: "twitter-3-78004.appspot.com",
    messagingSenderId: "306746326158",
    appId: "1:306746326158:web:bd01fcbb815c27ed141ddf",
    measurementId: "G-52C9ZJD2RK"
  };

  
  const firebaseApp = firebase.initializeApp
  (firebaseConfig)

  const db = firebaseApp.firestore()

  export default db;