import { useState, useEffect } from "react";
import {
  ref,
  set,
  remove,
  onValue,
  child,
  push,
  update,
} from "firebase/database";
import { doc, setDoc } from "firebase/firestore";
import { database, auth, db } from "../firebase";

const useMessages = () => {
  const sendMessageFromProduct = async (data, userUID, productID) => {
    await push(ref(database, `chats/${productID}/${userUID}`), data).then(
      () => {
        const userRef = doc(
          db,
          "users",
          auth.currentUser.uid,
          "chats",
          productID
        );
        setDoc(userRef, {
          ref: productID,
        })
          .then(() => console.log("chat id uploaded to user account"))
          .catch((err) => console.log(err));
      }
    );
  };

  const sendInChat = async (data, userUID, productID) => {
    await push(ref(database, `chats/${productID}/${userUID}`), data)
      .then(() => console.log("message sent"))
      .catch((err) => console.log(err));
  };

  return [sendMessageFromProduct, sendInChat];
};

export default useMessages;
