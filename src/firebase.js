import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBaLrrvN5Aw8nt28N2rjoDdAWliiAmN-e8",
    authDomain: "react-twitter-apl.firebaseapp.com",
    databaseURL: "https://react-twitter-apl.firebaseio.com",
    projectId: "react-twitter-apl",
    storageBucket: "react-twitter-apl.appspot.com",
    messagingSenderId: "137909395989",
    appId: "1:137909395989:web:9a267fd40f03be1a43641c",
    measurementId: "G-KCB5ZM7GWN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;