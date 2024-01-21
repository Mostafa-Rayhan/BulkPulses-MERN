// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEMmyHGnuXKGz33DMimXM2D07mi7QXVYA",
    authDomain: "dall-dfd74.firebaseapp.com",
    projectId: "dall-dfd74",
    storageBucket: "dall-dfd74.appspot.com",
    messagingSenderId: "365511431792",
    appId: "1:365511431792:web:114d6968ca2676319c06b5",
    measurementId: "G-9P6TJS93WZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;