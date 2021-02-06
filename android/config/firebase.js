import React from "react";
import App from "../../App";
import firebase from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAbDzeJM3-nUz0bpZ0KKUrrmCkA_3egRHE",
    authDomain: "blood-bank-2-9919f.firebaseapp.com",
    projectId: "blood-bank-2-9919f",
    storageBucket: "blood-bank-2-9919f.appspot.com",
    messagingSenderId: "813222611118",
    appId: "1:813222611118:web:afb38d2ea3cb9cf0e4853f",
    measurementId: "G-633CDWHXL3"
  };

  if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export {firebase, auth};
  
  function Setup (){
      return <App/>;
  }

  export default Setup;