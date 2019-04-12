import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDL4KjO1szOu8rWmtGeNlEv_eGfk_7mbCs",
    authDomain: "tocca-shoppoing-app.firebaseapp.com",
    databaseURL: "https://tocca-shoppoing-app.firebaseio.com",
    projectId: "tocca-shoppoing-app",
    storageBucket: "tocca-shoppoing-app.appspot.com",
    messagingSenderId: "602004610077"
  };
  firebase.initializeApp(config);

  export default firebase;