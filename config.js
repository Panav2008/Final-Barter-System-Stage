import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBMmxB2KYmeVCMnBZkPqkSRWErVH29XzUk",
  authDomain: "barter-system-74653.firebaseapp.com",
  projectId: "barter-system-74653",
  storageBucket: "barter-system-74653.appspot.com",
  messagingSenderId: "21624125043",
  appId: "1:21624125043:web:003541dfe7031f1a7d5c06",
  measurementId: "G-6YF9T6DB1J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();