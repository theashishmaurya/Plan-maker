import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBWO6GLscHrRw-TqFyAj-VMim9_wA96Vf8",
    authDomain: "plan-maker-c14a9.firebaseapp.com",
    databaseURL: "https://plan-maker-c14a9.firebaseio.com",
    projectId: "plan-maker-c14a9",
    storageBucket: "plan-maker-c14a9.appspot.com",
    messagingSenderId: "931265126477",
    appId: "1:931265126477:web:fb9c5b38bb4b03cf82fc04"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings()({timestampsInSnapshots : true}) ;

  export default firebase ;
