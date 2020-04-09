import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


// Your web app's Firebase configuration

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings()({timestampsInSnapshots : true}) ;

  export default firebase ;
