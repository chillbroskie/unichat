import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyBnCS9vCKkLlxUB1W2ENfHuUGJ-gLYWseo",
  authDomain: "unichat-f80da.firebaseapp.com",
  projectId: "unichat-f80da",
  storageBucket: "unichat-f80da.appspot.com",
  messagingSenderId: "757302202095",
  appId: "1:757302202095:web:791754344ed97ee7f2551a"
}).auth()