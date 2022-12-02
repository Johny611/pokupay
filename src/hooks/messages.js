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
import { database } from "../firebase";

const useMessages = (queryList) => {
  const sendMessage = () => {
    set(database, "chats/", user);
  };

  return [];
};

export default useMessages;
