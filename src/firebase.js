import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvIJ_h1p7Q-xYaXU2SjXUkRInS-wUVBJc",
  authDomain: "linkedin-auth-24fab.firebaseapp.com",
  projectId: "linkedin-auth-24fab",
  storageBucket: "linkedin-auth-24fab.appspot.com",
  messagingSenderId: "269787065693",
  appId: "1:269787065693:web:9975b1462c74e931950cb4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const colRef = collection(db, "posts");

export default app;
