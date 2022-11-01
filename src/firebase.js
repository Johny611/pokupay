import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzxS9kiPdMloBFbfsQiZSg6kwLwTvTuls",
  authDomain: "pokupay-ad75b.firebaseapp.com",
  databaseURL: "https://pokupay-ad75b-default-rtdb.firebaseio.com",
  projectId: "pokupay-ad75b",
  storageBucket: "pokupay-ad75b.appspot.com",
  messagingSenderId: "722410253160",
  appId: "1:722410253160:web:386b85c4dd54b7a40144dd",
  measurementId: "G-KPGE1QNLNK",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, auth, storage, db };
