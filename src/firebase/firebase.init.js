// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9rx-IUpaa-qWUWSeLP9cAnTu343tGLB4",
    authDomain: "services-review.firebaseapp.com",
    projectId: "services-review",
    storageBucket: "services-review.appspot.com",
    messagingSenderId: "102704968131",
    appId: "1:102704968131:web:f10a452323ad6a78248d76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;