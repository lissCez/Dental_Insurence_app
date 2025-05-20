import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD856cV_yfMDr8sA5UyRDmEwZ7x0cGLbAs",
    authDomain: "dental-insurance-app.firebaseapp.com",
    databaseURL: "https://dental-insurance-app-default-rtdb.firebaseio.com",
    projectId: "dental-insurance-app",
    storageBucket: "dental-insurance-app.appspot.com",
    messagingSenderId: "350249775122",
    appId: "1:350249775122:android:bc3576d5b7f37cbe93e8cb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
