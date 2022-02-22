import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAr5XyRXtuIBFVFbUpEojuBZv31RQoh8e0",
  authDomain: "docs-clone-b8c38.firebaseapp.com",
  projectId: "docs-clone-b8c38",
  storageBucket: "docs-clone-b8c38.appspot.com",
  messagingSenderId: "296033521862",
  appId: "1:296033521862:web:bdb3726566f074958147c7",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
