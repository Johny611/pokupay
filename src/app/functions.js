import {
  doc,
  setDoc,
  addDoc,
  Timestamp,
  serverTimestamp,
  collection,
  updateDoc,
  arrayUnion,
  arrayRemove,
  increment,
} from "firebase/firestore";
import { db } from "../firebase";

const users = collection(db, "users");
const advertisements = collection(db, "advertisements");
const chats = collection(db, "chats");

export const registerUser = async (userID, userData) => {
  await setDoc(doc(db, "users", userID), userData, { merge: true });
};
