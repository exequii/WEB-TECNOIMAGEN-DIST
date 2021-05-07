import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAcvY49Lxd8auSpsE2cJYaf82xLnS40xkQ",
    authDomain: "tecnoimagen-distribuidores.firebaseapp.com",
    projectId: "tecnoimagen-distribuidores",
    storageBucket: "tecnoimagen-distribuidores.appspot.com",
    messagingSenderId: "856844671789",
    appId: "1:856844671789:web:292b3d5a1a9021a4f091a4",
    measurementId: "G-JQ81JZ3EFW"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth()

export {auth}