import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2QjEHNsMzuCOd3zynEa1_IgibpdF10dE",
  authDomain: "netflix-clone-60cd6.firebaseapp.com",
  projectId: "netflix-clone-60cd6",
  storageBucket: "netflix-clone-60cd6.appspot.com",
  messagingSenderId: "303883650977",
  appId: "1:303883650977:web:2fa61f62ffd0a1a227ade0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
