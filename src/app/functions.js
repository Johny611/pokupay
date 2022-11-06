import {
  doc,
  setDoc,
  deleteDoc,
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

export const registerUser = async (userID, userData) => {
  await setDoc(doc(db, "users", userID), userData, { merge: true });
};
