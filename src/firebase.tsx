// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries - find available SDKs

// Your web app's Firebase configuration
// TODO: Don't forget to hide these
const firebaseConfig = {
  apiKey: "AIzaSyDfr9vc96OwkiGFzcGcRxrsHSz-r9H3a_E",
  authDomain: "sep6-39250.firebaseapp.com",
  projectId: "sep6-39250",
  storageBucket: "sep6-39250.appspot.com",
  messagingSenderId: "253766975714",
  appId: "1:253766975714:web:0df03aac91f1d880d31ebb",
  measurementId: "G-FWRL4C7FRB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
