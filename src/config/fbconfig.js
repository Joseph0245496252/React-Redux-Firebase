import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDkxm905h9qVXkP16Hf6-KHmKRY-4Vtf4A",
    authDomain: "codetrain-project-b8f11.firebaseapp.com",
    databaseURL: "https://codetrain-project-b8f11.firebaseio.com",
    projectId: "codetrain-project-b8f11",
    storageBucket: "codetrain-project-b8f11.appspot.com",
    messagingSenderId: "1046361304132",
    appId: "1:1046361304132:web:118a5801985721fd092011",
    measurementId: "G-Y4GB9Z4GMM" 
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;