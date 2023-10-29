// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvIJ_h1p7Q-xYaXU2SjXUkRInS-wUVBJc",
  authDomain: "linkedin-auth-24fab.firebaseapp.com",
  projectId: "linkedin-auth-24fab",
  storageBucket: "linkedin-auth-24fab.appspot.com",
  messagingSenderId: "269787065693",
  appId: "1:269787065693:web:9975b1462c74e931950cb4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
