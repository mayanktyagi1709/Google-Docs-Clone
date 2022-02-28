import * as firebase from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAr5XyRXtuIBFVFbUpEojuBZv31RQoh8e0",
  authDomain: "docs-clone-b8c38.firebaseapp.com",
  projectId: "docs-clone-b8c38",
  storageBucket: "docs-clone-b8c38.appspot.com",
  messagingSenderId: "296033521862",
  appId: "1:296033521862:web:bdb3726566f074958147c7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
