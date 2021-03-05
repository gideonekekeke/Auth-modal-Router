import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyBtmxqaO_-yjHPWi8sVGEWxIYWQi-cJWFU",
  authDomain: "authent-react-demo.firebaseapp.com",
  projectId: "authent-react-demo",
  storageBucket: "authent-react-demo.appspot.com",
  messagingSenderId: "130586344796",
  appId: "1:130586344796:web:f95734e1a714a417e69599",
});
