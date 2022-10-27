import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAcjhLhx2D92XEPCCKaJJGIhdXHZOFk1Fs",
    authDomain: "fir-369e9.firebaseapp.com",
    projectId: "fir-369e9",
    storageBucket: "fir-369e9.appspot.com",
    messagingSenderId: "1011861368515",
    appId: "1:1011861368515:web:dbb67619ec08635dee7c76",
    measurementId: "G-MZ89CPQRWV"
  };

 export default firebase.initializeApp(firebaseConfig)